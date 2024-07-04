import React, { useState } from "react";
import Select from "react-select";

interface SelectOption {
  value: string;
  label: string;
}

const data: SelectOption[] = [
  {
    value: "Print_selected_order_details",
    label: "Print selected order details",
  },
  { value: "Set_to_ready_to_go", label: "Set to ready to go" },
  { value: "Complete_order", label: "Complete order" },
  { value: "Decline_order", label: "Decline order" },
];

export const OrderDropDown: React.FC<{
  options?: SelectOption[];
  optionSelected?: any;
}> = ({ options, optionSelected }) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    options?.[0] || data?.[0],
  );

  const handleChange = (option: SelectOption | null) => {
    setSelectedOption(option);
    optionSelected(option);
  };

  return (
    <Select<SelectOption>
      defaultValue={selectedOption}
      options={options || data}
      onChange={handleChange}
      className="w-full rounded-md bg-amber-600 text-[16px] font-normal leading-[19px]"
    />
  );
};
