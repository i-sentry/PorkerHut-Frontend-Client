import { createContext, useContext, useState } from "react";
interface IProps {
  children: React.ReactNode;
}

interface IAuthContext {
  auth: Record<string, any>;
  setAuth: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: IProps) => {
  const [auth, setAuth] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
