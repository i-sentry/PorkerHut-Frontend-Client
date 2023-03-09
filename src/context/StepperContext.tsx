// import { createContext, useContext, useState } from "react";

// const StepperContext = createContext({ userData: "", setUserData: null });

// export function UseContextProvider({ children }) {
//   const [userData, setUserData] = useState("");

//   return (
//     <StepperContext.Provider value={{ userData, setUserData }}>
//       {children}
//     </StepperContext.Provider>
//   );
// }

// export function useStepperContext() {
//   const { userData, setUserData } = useContext(StepperContext);

//   return { userData, setUserData };
// }

import { createContext, useContext, useState } from "react";

type UserData = {
  name: string;
  breed: string;
  pork: string;
  weight: string;
  content: string;
  method: string;
  delivery: string;
  description: string;

};

type StepperContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

const StepperContext = createContext<StepperContextType | undefined>(undefined);

export const useStepperContext = (): StepperContextType => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error(
      "useStepperContext must be used within a StepperContextProvider"
    );
  }
  return context;
};

type Props = {
  children: React.ReactNode;
};

export function StepperContextProvider({ children }: Props) {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    breed: "",
    pork: "",
    weight: "",
    content: "",
    method: "",
    delivery: "",
    description: ""
  });

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}
