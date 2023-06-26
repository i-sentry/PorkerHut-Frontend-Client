import React, { useState } from "react";

interface CurrencyInputProps {
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ onChange }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    setValue(numericValue);
    onChange(parseInt(numericValue, 10) || 0);
  };

 const formatCurrency = (value: string) => {
   const currencySymbol = "₦";
   const numericValue = parseInt(value, 10) || 0;

   const nairaValue = Math.floor(numericValue / 100);
   const koboValue = numericValue % 100;

   const formattedNairaValue = nairaValue.toLocaleString();
   const formattedKoboValue = koboValue.toString().padStart(2, "0");

   return `${currencySymbol} ${formattedNairaValue}.${formattedKoboValue}`;
 };


  return (
    <input
      type="text"
      value={formatCurrency(value)}
      onChange={handleChange}
      className={`appearance-none relative block w-full px-[14px] py-[15px] border border-[#D9D9D9] placeholder-[#A2A2A2] text-[#333333] rounded-md focus:outline-none focus:ring-primaryDark focus:border-primaryDark focus:z-10 sm:text-sm  "border-ErrorBorder"
      }`}
      placeholder="Enter price"
    />
  );
};

export default CurrencyInput;
