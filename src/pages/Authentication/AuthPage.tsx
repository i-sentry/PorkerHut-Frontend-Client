import React from "react";
import Login from "../../components/auth-component/Login";

const AuthPage = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
  }, []);
  return (
    <div className="bg-[#F5F5F5]  justify-center items-center h-screen">
      <Login />
    </div>
  );
};

export default AuthPage;
