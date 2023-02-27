import React, { useEffect } from "react";
import Select from "react-select";
import  State  from "react-select";
import  ValueType  from "react-select";

export type SelectOptionType = {
  id: string | number;
  label: string;
} | null;

type DashboardSelectType = {
  options: Array<{
    id: string | number;
    label: string;
  }>;
  selectedOption: SelectOptionType | null;
  setSelectOption: (value: React.SetStateAction<any>) => void;
};

function ChartSelect(props: DashboardSelectType) {
  const { options, selectedOption, setSelectOption } = props;

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "#fff",
    }),

    indicatorsContainer: (provided: any) => ({
      ...provided,
      display: "hidden",
    }),

    singleValue: (provided: any) => ({
      ...provided,
      color: "#667085",
      fontSize: "14px",
    }),

    placeholder: (provided: any) => ({
      ...provided,
      fontSize: "14px",
    }),

    option: (provided: any, state: { isFocused: any; }) => ({
      ...provided,
      fontSize: "12px",
      color: "#667085",
      backgroundColor: state.isFocused && "#F6F6F6",
    }),
  };

  const handleChange = ((option: any) => {
    setSelectOption(option);
  })

  return (
    <Select
      styles={customStyles}
      options={options}
      value={selectedOption}
      isClearable={false}
      isSearchable={false}
      onChange={handleChange}
      defaultValue={options[0]}
    />
  );
}

export default ChartSelect;
