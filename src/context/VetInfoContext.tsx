import React, { createContext, useContext, useState } from "react";

export interface IChildren {
    children: React.ReactNode;
}

export interface IVetInfo {
    vetAccountInfo: {
        name: string;
        businessName: string;
        businessAddress: string;
        email: string;
        phone: string;
        companyRc: string;
        state: string;
        city: string;
        country: string;
        yearOfOperation: string;
        typeOfVet: string;
        checkbox: string;
        aboutYou: string;
        license: string;
    }

}

interface IContextProps {
    state: IVetInfo;
    setState: React.Dispatch<React.SetStateAction<IVetInfo>>;
}

export const VetStateContext = createContext({} as IContextProps);


export function VetProvider({ children }: IChildren) {
    const initialState: IVetInfo = {
        vetAccountInfo: {
            name: "",
            businessName: "",
            businessAddress: "",
            email: "",
            phone: "",
            companyRc: "",
            state: "",
            city: "",
            country: "",
            yearOfOperation: "",
            typeOfVet: "",
            checkbox: "",
            aboutYou: "",
            license: "",
        }

    };

    const [vetData, setVetData] = useState<IVetInfo>(initialState)

    return (
        <VetStateContext.Provider
            value={{ state: vetData, setState: setVetData }}
        >
            {children}
        </VetStateContext.Provider>
    )
}

export function useAppState() {
    const context = useContext(VetStateContext);
    if (!context) {
        throw new Error("useAppState must be used within the AppProvider");
    }
    return context;
}
