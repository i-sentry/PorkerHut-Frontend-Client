import React from "react";
import PaymentCard from "../../components/admin-dashboard-components/PaymentCard";
import { BsSearch } from "react-icons/bs";
import TrackerCard from "../../components/admin-dashboard-components/TrackerCard";
import ComingSoon from "../../components/ComingSoon";

const PaymentTracker = () => {
  return (
    // <div>
    //   <PaymentCard store_name={undefined} id={0} email={''} company_address={''} phone={''} total_orders={0} total_failed_orders={0} data_joined={''} status={''} />
    // </div>

    <div className="py-6 pl-8 pr-5">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-[#333333]">Payment Tracker</h2>
        <div className="flex items-center justify-between">
          <p className="text-[#A2A2A2]">Vendor account details</p>
          <span>Week 35</span>
        </div>
        <div className="mt-3 flex justify-end">
          <label htmlFor="search" className="relative block w-[45%]">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search store name or ID number...."
              className="form-input inline-block w-full rounded-[8px] border-0 bg-[#F4F4F4] py-2.5 px-3 pl-6 outline-none ring-0 focus:border focus:border-green-700 focus:ring-0"
            />
            <span className="absolute top-1/2 right-4 -translate-y-1/2">
              <BsSearch size={20} />
            </span>
          </label>
        </div>
      </div>

      {/* TRACKER CARD */}
      <div className="hidden grid-cols-3">
        <TrackerCard />
      </div>

      <div className="absolute top-0 left-0 h-full w-full bg-white">
        <ComingSoon pendingPage={"Payment Tracker"} />
      </div>
    </div>
  );
};

export default PaymentTracker;
