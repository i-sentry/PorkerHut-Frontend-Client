import React, { ReactElement } from "react";
import ChartSelect from "./ChartSelect";

interface IOption {
  label: string;
  id: string | number;
}
interface IProps {
  options?: IOption[];
  title: string;
  value: string | number;
  className?: string;
  style?: { [key: string]: string | number };
  children: ReactElement;
  selectedOption?: IOption | null;
  onSelectOption?: (arg: IOption) => void;
  hideCurrency?: boolean;
}

function ChartLayout({
  options,
  value,
  title,
  style = {},
  className = "",
  selectedOption,
  children,
  onSelectOption,
  hideCurrency = false,
}: IProps) {
  return (
    <div
      className={[
        "bg-[#fafafa] border p-6 pb-0 shadow-md rounded-lg",
        className,
      ].join(" ")}
      style={style}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          {title && <h2 className="font-semibold text-lg">{title}</h2>}
          {value && (
            <p className="mb-0">
              {!hideCurrency && <></>} {value}
            </p>
          )}
        </div>
        {options && selectedOption && onSelectOption && (
          <div className="w-[120px]">
            <ChartSelect
              options={options}
              selectedOption={selectedOption}
              setSelectOption={onSelectOption}
            />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

export default ChartLayout;
