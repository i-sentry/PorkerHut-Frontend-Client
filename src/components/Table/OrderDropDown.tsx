import React from "react";
import Select from "react-select";

interface SelectOption {
  value: string;
  label: string;
}

const options: SelectOption[] = [
  {
    value: "Print_selected_order_details",
    label: "Print selected order details",
  },
  { value: "Set_to_ready_to_go", label: "Set to ready to go" },
  { value: "Complete_order", label: "Complete order" },
  { value: "Decline_order", label: "Decline order" },
];

export const OrderDropDown: React.FC = () => (
  <Select<SelectOption>
    defaultValue={options?.[0]}
    options={options}
    className="w-full text-sm font-light bg-amber-600 rounded-md"
  />
);
