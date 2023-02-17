import React from "react";
import DashboardStatsGrid from "../../components/order-page-component/DashboardStatsGrid";
import OrderTable from "../../components/order-page-component/OrderTable";

const SellersOrderPage = () => {
  return (
    <div className="w-full h-[900px] bg-[#fff] p-5 pr-9">
      <div className="bg-transparent w-full">
        <div>
          <DashboardStatsGrid />
        </div>
        <div>
          <OrderTable />
        </div>
      </div>
    </div>
  );
};

export default SellersOrderPage;
