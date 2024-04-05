import React, { useMemo } from "react";
import {
  useCreateVetService,
  useGetAllVetServices,
} from "../../services/hooks/service/vet";
import logo from "../../assets/images/porkerlogo.png";
import { MdOutlinePets } from "react-icons/md";

const VetSerivce = () => {
  const { data, isLoading } = useGetAllVetServices();
  const VetSerivce = useMemo(() => {
    return isLoading === false && data?.data ? data?.data : [];
  }, [data?.data]);

  console.log(data, "vet service", isLoading, VetSerivce);
  return (
    <div className="py-6 px-5">
      <div>
        <h1 className="text-2xl font-bold text-[#333]">Veterinary Services</h1>
        <p className="text-[#a2a2a2]">
          Here you can find veterinary service request and treat as urgent.
        </p>
      </div>
      {isLoading && (
        <>
          <div className="flex h-[50vh] w-full flex-col items-center justify-center bg-white py-10">
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt="loaderLogo"
                className="h-20 w-20 animate-pulse"
              />
              <p className="text-[14px] leading-[24px] text-[#333333]">
                Fetching Data...
              </p>
            </div>
          </div>
        </>
      )}
      <div>
        {/* <AdminTable
          tabs={["All", "Unread", "Read", "Starred"]}
          placeholder={"Search account owner, email address, store name.... "}
          Tcolumns={Tcolumns}
          showCheckbox={true}
          showDropDown={true}
          TData={[]}
        /> */}
      </div>
      {!isLoading && VetSerivce.length === 0 && (
        <div className="text-center">
          <MdOutlinePets size={64} />
          <p>No Vet Services yet</p>
        </div>
      )}
    </div>
  );
};

export default VetSerivce;
