import { Dispatch, createContext, useState } from "react";
const AuthContext = createContext({});
interface IProps {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: IProps) => {
  const [auth, setAuth] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
