import React, { useState, ChangeEvent } from "react";

interface CheckboxProps {
  label: string;
  onCheckboxChange: (label: string, isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    setIsChecked(newCheckedState);
    onCheckboxChange(label, newCheckedState);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="mr-2 rounded-sm border border-[#BDBDBD]"
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
