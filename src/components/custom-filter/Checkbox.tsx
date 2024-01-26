import React, { useState, ChangeEvent } from "react";

interface CheckboxProps {
  label: string;
  onCheckboxChange: (label: string, isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  // const handleCancelCheck = () => {
  //     setIsChecked(false)
  // }

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    setIsChecked(newCheckedState);
    onCheckboxChange(label, newCheckedState);
  };

  return (
    <div className="flex items-center my-3">
      <input
        type="checkbox"
        className="mr-2 rounded-sm border form-checkbox border-[#BDBDBD] checked:bg-green-500 checked:hover:bg-green-500 checked:focus:ring-green-500 checked:focus:bg-green-500 focus:ring-green-500"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="text-[16px]  leading-normal text-[#333] font-normal">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
