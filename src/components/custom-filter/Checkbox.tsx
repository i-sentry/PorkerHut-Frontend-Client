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
    <label className="my-3 flex items-center">
      <input
        type="checkbox"
        className="form-checkbox mr-2 rounded-sm border border-[#BDBDBD] checked:bg-green-500 checked:hover:bg-green-500 focus:ring-green-500 checked:focus:bg-green-500 checked:focus:ring-green-500"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="text-[16px]  font-normal leading-normal text-[#333]">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
