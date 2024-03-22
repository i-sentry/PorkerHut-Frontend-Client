import React, { ChangeEvent } from "react";

interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  containerClass?: string;
  inputClass?: string;
  value?: string;
  name?: string;
  required?: boolean;
  isDisabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}
const InputComponent = ({
  label,
  type,
  required,
  placeholder,
  containerClass,
  inputClass,
  value,
  name,
  isDisabled,
  onChange,
  defaultValue,
}: Props) => {
  return (
    <div>
      {label && <p className="text-xm text-HeadingColor mb-2">{label}</p>}
      {/* <div
        className={`flex border-[1px] border-black border-opacity-20 rounded-lg items-center h-12 ${containerClass}`}
      > */}
      <input
        type={type}
        placeholder={placeholder}
        className={`relative  block w-full appearance-none rounded-md border border-gray-300 px-[14px] py-[12px] text-gray-900 placeholder-slate-300 focus:z-10 focus:border-[#197b30] focus:outline-none focus:ring-[#197b30] sm:text-sm`}
        value={value}
        name={name}
        required={required ? required : false}
        onChange={onChange}
        disabled={isDisabled}
        defaultValue={defaultValue}
      />
      {/* </div> */}
    </div>
  );
};

export default InputComponent;
