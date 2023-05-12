// import MuiPhoneNumber from 'material-ui-phone-number'


import PhoneInput from "react-phone-input-2";
import "./style.css";

const Input = () => {


  return (

        <PhoneInput
          specialLabel={""}
          country={"th"}
          inputStyle={{
            borderColor:  "red",
          }}

        />

        

  );
};

const index = (props: any) => {
  return (
    <Input
      label={"Mobile Phone"}
      req={true}
      helperText={""}
      error={true}
      isSelect={false}
      {...props.input}
      {...props.meta}
      {...props.custom}
    />
  );
};

export default index;
