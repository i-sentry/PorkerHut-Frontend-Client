import React from "react";
import CustomAmountField from "./CustomAmountField";
import CustomAutoComplete from "./CustomAutoComplete";
import CustomTextArea from "./CustomTextArea";
import CustomSelectField from "./CustomSelectField";
import TextField from "./TextField";

const CustomInput = ({ errors, data, register, control, infoColor }: any) => {
  switch (data.type) {
    case "amount":
      return <CustomAmountField {...{ errors, data, register, control }} />;
    case "autocomplete":
      return <CustomAutoComplete {...{ errors, data, register, control }} />;
    case "richText":
      return <CustomTextArea {...{ errors, data, register }} />;
    case "select":
      return <CustomSelectField {...{ errors, data, control, register }} />;
    case "textarea":
      return <CustomTextArea {...{ errors, data, register }} />;
    default:
      return <TextField {...{ errors, data, register, infoColor }} />;
  }
};

export default CustomInput;
