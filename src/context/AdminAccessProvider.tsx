import { createContext, useState } from "react";

interface AuthContextType {
  userRole: string;
  setUserRole: (role: string) => void;
  // setUserRole: any;
}

const AdminAccessContext = createContext<any>({});

interface IProps {
  children: React.ReactNode;
}

export const AdminAccessProvider = ({ children }: IProps) => {
  const [userRole, setUserRole] = useState("");

  return (
    <AdminAccessContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AdminAccessContext.Provider>
  );
};

export default AdminAccessContext;
