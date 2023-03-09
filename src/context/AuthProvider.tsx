import { Dispatch, createContext, useState } from "react";
const AuthContext = createContext({});
interface IProps{
    children: React.ReactNode
}
export const AuthProvider = ({ children }: IProps) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider
      value={{ auth, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
