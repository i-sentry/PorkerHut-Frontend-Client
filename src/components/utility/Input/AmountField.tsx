import React, { forwardRef } from "react";
import Select, { components } from "react-select";

export enum InputTypes {
  amount = "amount",
  number = "number",
  text = "text",
  date = "date",
  richText = "richText",
  autocomplete = "autocomplete",
  select = "select",
  textarea = "textarea",
}

export const currencies = [
  { value: "NGN", label: "NGN - Nigerian Naira" },
  { value: "USD", label: "USD - United States Dollar" },
  { value: "EUR", label: "EUR - Euro" },
  { value: "JPY", label: "JPY - Japanese Yen" },
  { value: "GBP", label: "GBP - British Pound Sterling" },
  { value: "CHF", label: "CHF - Swiss Franc" },
  { value: "CAD", label: "CAD - Canadian Dollar" },
  { value: "AUD", label: "AUD - Australian Dollar" },
  { value: "CNY", label: "CNY - Chinese Yuan Renminbi" },
  { value: "HKD", label: "HKD - Hong Kong Dollar" },
];

const customStyles = {
  menu: (base: any) => ({ ...base, width: "350px" }),

  control: (provided: any, state: { isFocused: any }) => ({
    ...provided,
    width: "max-content",
    height: "100%",
    padding: 0,
    borderRadius: "0.375rem 0 0 0.375rem",
    fontSize: "12px",
    border: state.isFocused ? undefined : 0,
    boxShadow: "none",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    fontSize: "15px",
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    padding: "0 5px 0 0",
  }),
};

function AmountField({ errors, data, onChange, onBlur, value }: any, ref: any) {
  const currencyValue =
    currencies.find((item) => item.value === value?.currency) || currencies[0];
  console.log("value val", value);
  return (
    <div className="mb-1 w-full ">
      <label
        htmlFor={data.name}
        className={`text-HeadingColor mb-[6px] block text-[16px] ${
          data.required && "after:ml-0.5 after:text-red-500 after:content-['*']"
        } }`}
      >
        {data.label}
      </label>
      <div className="z-50 flex rounded-md border border-gray-300">
        <Select
          options={currencies}
          value={currencyValue}
          styles={customStyles}
          onChange={({ value: currency }: any) =>
            onChange({ ...value, currency })
          }
          components={{
            SingleValue: (props) => (
              <components.SingleValue {...props}>
                {props.data.value}
              </components.SingleValue>
            ),
          }}
        />
        <input
          ref={ref}
          id={data.name}
          type={data.type}
          onBlur={onBlur}
          className={`focus:border-primary-300  focus:ring-primaryDark  focus:border-primaryDark relative h-12 w-full appearance-none rounded-r-md border-l border-gray-300 px-[14px] py-[10px] text-gray-900 placeholder-gray-500 focus:z-10 focus:border focus:outline-none sm:text-sm ${
            errors[data.name] && "border-ErrorBorder"
          }`}
          placeholder={data.place_holder}
          value={value?.amount}
          onChange={({ target }: any) =>
            onChange({ ...value, amount: target.value })
          }
        />
      </div>

      <p className="text-ErrorColor mt-1 text-xs">
        {errors[data.name] && (errors[data.name]?.amount?.message as string)}
      </p>
    </div>
  );
}

export default forwardRef(AmountField);
