import React from 'react'
import { camelCase } from "lodash";
import { Controller } from "react-hook-form";
import AmountField from './AmountField';


function CustomAmountField({ data, control, errors }: any) {
    const { defaultValue, name } = data;
    console.log(defaultValue, name, "tsk");
  return (
    <Controller
      control={control}
      name={camelCase(name)}
      defaultValue={defaultValue}
      render={({ field }) => <AmountField {...{ errors, data, ...field }} />}
    />
  );
}

export default CustomAmountField