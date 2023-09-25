// import { getData } from "@/utils/fetcher";
import { useCallback } from "react";
import { Controller } from "react-hook-form";
import { debounce, camelCase } from "lodash";
import AsyncSelect from "react-select/async";

function CustomAutoComplete({ data, control, errors }: any) {
  const { name } = data;
  const customStyles = {
    control: (provided: any, state: { isFocused: any }) => ({
      ...provided,
      borderColor: errors && errors[camelCase(name)] && "#FDA29B",
      minHeight: "3rem",
      height: "3rem",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided: any) => ({
      ...provided,
      height: "3rem",
      padding: "0 6px",
    }),

    input: (provided: any, state: any) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: "3rem",
    }),
  };

//   const loadOptions = useCallback(
//     debounce((value, callback) => {
//       getData(data.jqlQuery(value)).then((response) =>
//         callback(response?.data || [])
//       );
//     }, 1000),
//     []
//   );
  return (
    <div className="mb-1 w-full">
      <label
        htmlFor={name}
        className={`block text-[16px] mb-[6px] text-HeadingColor ${
          data.required && "after:content-['*'] after:ml-0.5 after:text-red-500"
        } }`}
      >
        {data.label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={{
          required: data.required ? data.error_message : undefined,
        }}
        render={({ field }) => (
          <AsyncSelect
            {...field}
            placeholder="Type to search..."
            styles={customStyles}
            isClearable
            defaultOptions
            loadOptions={()=>{}}
          />
        )}
      />
      <p className="mt-1 text-ErrorColor text-xs">
        {errors[name] &&
          ((errors[name]!.message as string) ||
            (errors[name]?.label!.message as string))}
      </p>
    </div>
  );
}

export default CustomAutoComplete;
