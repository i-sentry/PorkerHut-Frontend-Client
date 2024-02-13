import React, { useState } from "react";

interface CurrencyInputProps {
  onChange: (value: number) => void;
  price?: number;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ onChange, price }) => {
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
      value={formatCurrency(String(price)) || formatCurrency(value)}
      onChange={handleChange}
      className={`focus:ring-primaryDark focus:border-primaryDark "border-ErrorBorder" } relative block w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[15px] text-[#333333] placeholder-[#A2A2A2] focus:z-10  focus:outline-none
      sm:text-sm`}
      placeholder="Enter price"
    />
  );
};

export default CurrencyInput;
