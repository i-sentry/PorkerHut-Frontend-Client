import React, { useEffect, useState } from "react";

interface CurrencyInputProps {
  onChange: (value: number) => void;
  price?: number;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ onChange, price }) => {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    if (price) setValue(String(price));
  }, [price]);

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
      className={`relative block h-12 w-full appearance-none rounded-md border border-[#D9D9D9] px-[14px] py-[10px] text-sm leading-normal text-[#333333] placeholder-[#A2A2A2] focus:z-10 focus:border-green-500  focus:outline-none
      focus:ring-green-500`}
      placeholder="Enter price"
    />
  );
};

export default CurrencyInput;
