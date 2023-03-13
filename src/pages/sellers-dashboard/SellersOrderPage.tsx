import React from "react";
import { NavLink } from "react-router-dom";
import DashboardStatsGrid from "../../components/sellers-order-page-component/DashboardStatsGrid";
import OrderTable from "../../components/sellers-order-page-component/OrderTable";

const SellersOrderPage = () => {
  return (
    <div className="w-full h-[1100px] bg-[#fff] p-5 pl-8">
      <div className=" w-full">
        <div>
          <DashboardStatsGrid />
        </div>
        <div className="">
          <OrderTable />
        </div>
      </div>
      
    </div>
  );
};

export default SellersOrderPage;
