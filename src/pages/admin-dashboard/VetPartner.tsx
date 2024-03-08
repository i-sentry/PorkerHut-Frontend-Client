import React, { useEffect, useState } from "react";
import { useGetAllVets } from "../../services/hooks/service/vet";
import logo from "../../assets/images/porkerlogo.png";
import VetCard from "../../components/admin-dashboard-components/VetCard";
import { chunkArray } from "../../helper/chunck";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import ComingSoon from "../../components/ComingSoon";

let currentPage = 1;
const itemsPerPage = 4;

const VetPartner = () => {
  const [vets, setVets] = useState([]);
  const { data, isLoading } = useGetAllVets();
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  const allVets = data?.data?.data;

  useEffect(() => {
    if (!isLoading) setVets(allVets);
  }, [allVets, isLoading]);

  console.log(vets, "All vet");

  return (
    <div className="relative px-5 py-10">
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Vets</h1>
        <span className="text-sm font-light text-[#A2A2A2]">
          Here you can check all available details of each vets.
        </span>
      </div>

      {isLoading && (
        <div className="flex h-screen flex-col items-center justify-center">
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
      )}
      {!isLoading && vets?.length > 0 ? (
        <>
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 xxl:gap-3">
            {vets?.map((vet: any, index: number) => (
              <VetCard item={vet} key={index} />
            ))}
            {chunkArray(vets, itemsPerPage)[currentPageIndex - 1]?.map(
              (vet: any, index: any) => {
                return <VetCard item={vet} key={index} />;
              },
            )}
          </div>
          <div className="mt-10 flex items-center justify-center  gap-1 bg-white px-4 py-3 sm:px-6">
            <button
              onClick={() =>
                currentPageIndex !== 1
                  ? setCurrentPageIndex(currentPageIndex - 1)
                  : null
              }
              disabled={currentPageIndex === 1}
              className={
                (currentPageIndex === 1 ? "no-item" : "") +
                " rounded-l-lg border  border-[#A2A2A2] hover:bg-[#A2A2A2]  hover:text-white "
              }
            >
              <RxCaretLeft size={22} />
            </button>
            <div className="pagination flex items-center gap-1">
              {chunkArray(vets, itemsPerPage).map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPageIndex(index + 1)}
                    className={` border   border-[#A2A2A2]  ${
                      currentPageIndex === index + 1
                        ? "active-page-index    rounded-lg border-[#197B30] bg-[#3b554115] text-[#197B30]"
                        : "rounded-lg border-[#A2A2A2]  text-[#A2A2A2] hover:bg-slate-100"
                    }`}
                  >
                    <span className="px-1.5 text-sm">{index + 1}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                currentPageIndex !== chunkArray(vets, itemsPerPage).length
                  ? setCurrentPageIndex(currentPageIndex + 1)
                  : null
              }
              className={
                (currentPageIndex === chunkArray(vets, itemsPerPage).length
                  ? "no-items"
                  : "") +
                " rounded-r-lg border  border-[#A2A2A2] hover:bg-[#A2A2A2]  hover:text-white"
              }
            >
              <span className="">
                <RxCaretRight size={22} />
              </span>
            </button>
          </div>
        </>
      ) : (
        "No Vet partners yet"
      )}
      <div className="absolute top-0 left-0 h-full w-full bg-white">
        <ComingSoon pendingPage={"Veterinary Services"} />
      </div>
    </div>
  );
};

export default VetPartner;
