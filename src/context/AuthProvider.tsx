import { Dispatch, createContext, useState } from "react";
const AuthContext = createContext({});
interface IProps{
    children: React.ReactNode
}
interface AuthState {
  // define the properties and their types of the auth object
  // for example:
//   userId: number;
//   token: string;
//   isAuthenticated: boolean;
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
