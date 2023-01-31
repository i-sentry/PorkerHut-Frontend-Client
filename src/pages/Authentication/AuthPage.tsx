import React from "react";
import Login from "../../components/auth-component/Login";
import Footer from "../../components/footer-component/Footer";


const AuthPage = () => {
  return (
    <div className="bg-[#F5F5F5]  justify-center items-center h-screen">
      
      <Login />
      <Footer />
    </div>
  );
};

export default AuthPage;
