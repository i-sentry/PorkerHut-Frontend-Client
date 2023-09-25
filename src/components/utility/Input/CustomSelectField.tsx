import _ from "lodash";
import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function CustomSelectField({ data, control, errors }: any) {
  const { name } = data;
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderColor: errors && errors[_.camelCase(name)] && "#FDA29B",
      paddingTop: "5px",
      paddingBottom: "5px",
    }),

    indicatorsContainer: (provided: any) => ({
      ...provided,
      display: "hidden",
    }),

    singleValue: (provided: any) => ({
      ...provided,
      textTransform: "capitalize",
    }),

    option: (provided: any) => ({
      ...provided,
      textTransform: "capitalize",
    }),
  };

  return (
    <div className="mb-1 w-full">
      <label
        htmlFor={data.name}
        className={`block text-[16px] mb-[6px] text-HeadingColor ${
          data.required && "after:content-['*'] after:ml-0.5 after:text-red-500"
        } }`}
      >
        {data.label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select
            {...field}
            styles={customStyles}
            placeholder={data.placeholder}
            options={data.values}
            isClearable={false}
          />
        )}
      />
      <p className="mt-1 text-ErrorColor text-xs">
        {errors[data.name] &&
          ((errors[data.name]!.message as string) ||
            (errors[data.name]?.label!.message as string))}
      </p>
    </div>
  );
}

export default CustomSelectField;
