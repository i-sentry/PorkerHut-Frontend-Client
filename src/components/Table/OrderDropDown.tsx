import React from "react";
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

export const OrderDropDown: React.FC<{ options?: SelectOption[] }> = ({
  options,
}) => (
  <Select<SelectOption>
    defaultValue={options?.[0] || data?.[0]}
    options={options || data}
    className="w-full rounded-md bg-amber-600 text-[16px] font-normal leading-[19px]"
  />
);
