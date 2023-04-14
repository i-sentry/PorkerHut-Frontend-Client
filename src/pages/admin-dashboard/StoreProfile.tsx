import React from "react";
import storeData from "../../utils/storeData.json";
import CustomerCard from "../../components/admin-dashboard-components/CustomerCard";


const StoreProfile = () => {
  return (
    <div className="ml-10 mr-4 mt-4 mb-8">
      <div className="mb-2">
        <h1 className="text-xl font-medium ">Store Profile</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          Here you can check all available details of each store.
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 my-6">
        {storeData.map((item, index) => (
          <div key={index}>
            <CustomerCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreProfile;
