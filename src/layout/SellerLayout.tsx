import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import VendorsNav from "../components/vendors-component/VendorsNav";
import SellerSideNav from "../pages/sellers-dashboard/SellerSideNav"
import { useGetVendorById } from "../services/hooks/Vendor";


const Layout = () => {
  console.log(localStorage.getItem("vendor"), "done");

  const [user, setUser] = useState<any>({});
  const id: string | undefined = "64fed7f696d7bdabcd0b5993"
  const getVendorById = useGetVendorById(id)

  useEffect(() => {
    //@ts-ignore
    const storedUser = JSON.parse(localStorage.getItem("vendor"));
    
    if (storedUser !== null) {
      setUser(storedUser);
    }
  }, []);
  console.log(localStorage.getItem('vendor'), 'active')

  console.log(getVendorById, "isLogin");
  // console.log(useGetVendorById, 'unique')
  // console.log(user?.vendor.id)

useEffect(() => {
  console.log(getVendorById, "fair")
}, [user])

  return (
    <div className="h-screen w-screen overflow-hidden hide-scroll-bar">
      <div className="grid grid-rows-[auto_1fr] w-full h-full">
        <div className="sticky top-0 left-0 right-0 z-50">
          <VendorsNav />
        </div>
        <div className="md:flex h-full w-full overflow-x-hidden hide-scroll-bar">
          <div className="">
            <SellerSideNav />
          </div>
          <div className="overflow-y-auto flex-1 pt-0 md:pt-4 lg:pt-[40px] md:px-4 lg:pl-20  lg::pr-6 hide-scroll-bar">
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Layout;
