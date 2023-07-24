import React, { useState, createContext } from "react";
// import VetPartnerFormMobile from "../components/vet-form/useMultistepForm";

export const VetPartnerContexts = createContext({});

const VetPartnerContext = () => {
  const [vetData, setVetData] = useState({
    name: "",
    businessName: "",
    businessAddress: "",
    email: "",
    phone: "",
    companyRc: "",
  });

  return (
    <div>
      <VetPartnerContexts.Provider
        value={{
          vetData,
          setVetData,
        }}
      >
        {/* <VetPartnerFormMobile /> */}
      </VetPartnerContexts.Provider>
    </div>
  );
};

export default VetPartnerContext;
