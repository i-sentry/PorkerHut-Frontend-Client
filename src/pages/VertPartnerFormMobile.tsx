import React, { FormEvent, useState, useContext } from 'react';
import { useMultiStepForm } from '../components/vet-form/useMultistepForm'
import VetPartnerMobileFormA from './VetPartnerMobileFormA'
import VetPartnerMobileB from './VetPartnerMobileFormB'
import { FileContext } from '../context/FileContext';
import { useNavigate } from "react-router-dom";

import { useCreateVet } from "../services/hooks/service/vet";

interface FileData {
    name: string;
    file: File;
}

type formData = {
    accountName: string;
    businessName: string;
    businessAddress: string;
    email: string;
    phone: string;
    companyRcNumber: string;
    state: string;
    city: string;
    country: string;
    yearsOfOperation: string;
    vetType: string;
    checkbox: string;
    aboutYou: string;
    license: string;
}
const INITIAL_DATA: formData = {
    accountName: "",
    businessName: "",
    businessAddress: "",
    email: "",
    phone: "",
    companyRcNumber: "",
    state: "",
    city: "",
    country: "",
    yearsOfOperation: "",
    vetType: "",
    checkbox: "",
    aboutYou: "",
    license: "",
}
const VertPartnerFormMobile = () => {
    const navigate = useNavigate()
    const createVet = useCreateVet();
    const [data, setData] = useState(INITIAL_DATA)
    const [loading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null);
    const { steps, currentStepIndex, next, back, step, isFirstStep, isLastStep } = useMultiStepForm([
        //@ts-ignore
        <VetPartnerMobileFormA {...data} updateFields={updateFields} />, <VetPartnerMobileB {...data} updateFields={updateFields}
            error={error}
        />
    ])

    const { selecFiles, seFiles } = useContext(FileContext);

    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })

    }


    const appendFilesToFormData = (
        fieldName: string,
        files: FileData[] | null,
        formData: FormData
    ) => {

        if (files) {
            for (const fileData of files) {
                formData.append(fieldName, fileData.file);
                console.log(fileData.file);
            }
        }
    };


    function onSubmit(e: FormEvent) {
        e.preventDefault();
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }
        appendFilesToFormData("vetLicense", selecFiles, formData);
        appendFilesToFormData("additionalDocuments", seFiles, formData);
        next();

        console.log(formData, "FORMDATA");

        createVet.mutateAsync(formData)
            .then((res) => {
                navigate('/vet-success');
            })
            .catch((err) => {
                console.log(err);
                const error = err.response?.data?.message || err.message;
                if (error.includes("duplicate key error")) {
                    setError("Email already registered. Please use a different email.");
                }
            })
            .finally(() => {

                window.scrollTo({ top: 0, behavior: "smooth" });
            });

    }


    return (
        <form onSubmit={onSubmit} className='pb-10'>
            {step}
            <div className="flex items-center justify-between px-9 mt-6 gap-10">
                <button
                    type='button'
                    onClick={back}
                    className="bg-white text-[#197b30] border border-[#197] w-[132px] h-[48px] rounded text-[14px] leading-[24px] font-semibold"
                    >
                    Back
                </button>
                <button
                    type='submit'

                    className="bg-[#197b30] text-white w-[132px] h-[48px] rounded text-[14px] leading-[24px] font-semibold"
                >
                    {isLastStep ? "Submit" : "Next"}
                </button>
            </div>
        </form>
    )
}

export default VertPartnerFormMobile