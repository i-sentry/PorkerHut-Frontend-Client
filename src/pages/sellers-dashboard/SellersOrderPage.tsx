import React from "react";
import DashboardStatsGrid from "../../components/sellers-order-page-component/DashboardStatsGrid";
import Table from "../../components/Table/Table";

const SellersOrderPage = () => {
  return (
    <div className="w-full  bg-[#fff] p-5 md:pl-8">
      <div className=" w-full">
        <div>
          <DashboardStatsGrid />
        </div>
        <div className="">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default SellersOrderPage;
