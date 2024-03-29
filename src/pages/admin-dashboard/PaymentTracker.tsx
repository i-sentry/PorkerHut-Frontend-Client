import React from "react";
import PaymentCard from "../../components/admin-dashboard-components/PaymentCard";

const PaymentTracker = () => {
  return (
    // <div>
    //   <PaymentCard store_name={undefined} id={0} email={''} company_address={''} phone={''} total_orders={0} total_failed_orders={0} data_joined={''} status={''} />
    // </div>

    <div className="p-9">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-[#333333]">Payment Tracker</h2>
        <p className="text-[#A2A2A2]">Vendor account details</p>
      </div>
    </div>
  );
};

export default PaymentTracker;
