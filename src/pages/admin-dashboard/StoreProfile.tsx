import React, { useEffect, useState } from "react";
import logo from "../../assets/images/porkerlogo.png";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { chunkArray } from "../../helper/chunck";
import { BsSearch } from "react-icons/bs";
import StoreCard from "../../components/admin-dashboard-components/StoreCard";
import { useGetVendors } from "../../services/hooks/Vendor";
import StoreProfileOverlay from "../../components/admin-dashboard-components/StoreProfileOverlay";
import { ToastContainer } from "react-toastify";
import StatusModal from "../../components/admin-dashboard-components/StatusModal";
// import StoreProfileOverlay from "../../components/admin-dashboard-components/StoreProfileOverlay";

const itemsPerPage = 8;
const currentPage = 1;
const StoreProfile = () => {
  const [data, setData] = useState([]);
  const [filterSearch, setFilterSearch] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage);
  const { data: stores, isLoading, refetch } = useGetVendors();
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState("");
  const [shop, setShop] = useState<any>();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      setData(stores?.data);
      setFilterSearch(stores?.data);
    }
  }, [isLoading, stores?.data]);

  const storesList = data;

  useEffect(() => {
    if (searchValue === "") {
      setData((data) => data);
    }
    if (searchValue) {
      setFilterSearch(
        storesList
          ?.slice()
          ?.filter(
            (item: any) =>
              item?.sellerAccountInformation?.shopName
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              item?.businessInformation?.address1
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              item?._id === searchValue.toLowerCase(),
          ),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const fil = data?.filter((a: any) => {
    const b = [];
    b.push(a.storeStatus);
    return b;
  });

  console.log("stores", fil);
  return (
    <div className="relative px-4 py-10">
      <ToastContainer />
      <div className="flex items-center justify-between">
        <div className="mb-5">
          <h1 className="text-2xl font-medium ">Store Profile</h1>
          <span className="text-sm font-light text-[#A2A2A2]">
            Here you can check all available details of each store.
          </span>
        </div>
        <div>
          <div className="relative flex w-full items-center justify-between gap-4 ">
            <input
              type="search"
              value={searchValue}
              placeholder={
                "Search store name, company address or ID number...."
              }
              className="rounded-md bg-[#F4F4F4] px-3 py-2 text-base font-normal text-[#333333] placeholder:text-xs placeholder:font-light focus:outline-none active:outline-none xxs:w-full md:w-[500px]"
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            {!isSearchFocused && (
              <div className="absolute right-3">
                <BsSearch />
              </div>
            )}
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-white">
          <img
            src={logo}
            alt="loaderLogo"
            className="h-20 w-20 animate-pulse"
          />
          <p className="text-[14px] leading-[24px] text-[#333333]">
            Fetching Data...
          </p>
        </div>
      )}

      {!isLoading && data?.length ? (
        <div>
          {/* {data?.map((item: any, index: number) => (
            <StoreCard item={item} key={index} setIsOpen={setIsOpen} />
          ))} */}
          <div className="grid gap-5 py-5 lg:grid-cols-2 xl:grid-cols-3">
            {chunkArray(data, itemsPerPage)[currentPageIndex - 1]?.map(
              (item, index) => (
                <StoreCard
                  item={item}
                  key={index}
                  setIsOpen={setIsOpen}
                  setAction={setAction}
                  setShop={setShop}
                  refetch={refetch}
                  setShowConfirm={setShowConfirm}
                />
              ),
            )}
          </div>

          <div className="flex items-center justify-center gap-1    bg-white px-4 py-3 sm:px-6">
            <button
              onClick={() =>
                currentPageIndex !== 1
                  ? setCurrentPageIndex(currentPageIndex - 1)
                  : null
              }
              className={
                (currentPageIndex === 1 ? "no-item" : "") +
                " rounded-l-md border-2  border-[#A2A2A2] p-1  hover:bg-[#A2A2A2] hover:text-white"
              }
            >
              <RxCaretLeft size={16} />
            </button>
            <div className="pagination flex items-center gap-1">
              {chunkArray(data, itemsPerPage).map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentPageIndex(index + 1)}
                    className={` border-2   border-[#A2A2A2]  ${
                      currentPageIndex === index + 1
                        ? "active-page-index flex-1 rounded-md  border-[#197B30] p-[1px] px-2 text-[#197B30]"
                        : "flex-1 rounded-md border-[#A2A2A2] p-[1px] px-2 text-[#A2A2A2] hover:bg-slate-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                currentPageIndex !== chunkArray(data, itemsPerPage).length
                  ? setCurrentPageIndex(currentPageIndex + 1)
                  : null
              }
              className={
                (currentPageIndex === chunkArray(data, itemsPerPage).length
                  ? "no-items"
                  : "") +
                " rounded-r-md border-2  border-[#A2A2A2] p-1 hover:bg-[#A2A2A2] hover:text-white"
              }
            >
              <RxCaretRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div>No Store is available yet</div>
      )}

      {/* {!isLoading && data ? (
      
      ) : (
        ""
      )} */}

      <StoreProfileOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <StatusModal
        action={action}
        shop={shop}
        showConfirm={showConfirm}
        refetch={refetch}
        setShowConfirm={setShowConfirm}
      />
    </div>
  );
};

export default StoreProfile;
