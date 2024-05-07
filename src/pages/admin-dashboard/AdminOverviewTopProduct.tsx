import React, { useMemo } from "react";
import Img from "../../assets/images/Pig.png";
import { useGetAllVendorsAggregate } from "../../services/hooks/orders";
import { BiSolidUserCircle } from "react-icons/bi";

const AdminOverviewTopProduct = () => {
  const { data, isLoading } = useGetAllVendorsAggregate();
  const vendorAggregate = useMemo(
    () => (data?.data?.length ? data?.data : []),
    [data?.data],
  );
  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="hide-scroll-bar h-64 overflow-hidden overflow-y-scroll rounded bg-[#F4F4F4] py-3 px-3 pt-0">
      <div className="sticky top-0 left-0 flex w-full items-center justify-between bg-[#F4F4F4] py-3">
        <h4 className="text-base font-bold text-slate-700 ">Top Products</h4>

        <form className="hidden">
          <div className="flex items-center gap-4">
            <label className="" htmlFor="week"></label>
            <input
              type="week"
              className="h-10 w-36 rounded border px-2 focus:outline-none "
            />
          </div>
        </form>
      </div>
      <div className="space-y-3">
        {!isLoading &&
          vendorAggregate?.length >= 1 &&
          vendorAggregate
            ?.toSorted((a: any, b: any) => b?.totalOrders - a?.totalOrders)
            ?.map((product: any, index: number) => {
              return (
                <div
                  className="flex w-full items-center justify-between"
                  key={index}
                >
                  <div className="grid w-full grid-cols-[54px_1fr] items-center gap-1.5">
                    <span>
                      <BiSolidUserCircle
                        size={54}
                        className="text-neutral-500"
                      />
                    </span>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-right">
                        <span className="font-semibold text-[#333]">
                          Product Name
                        </span>
                        <span className="text-[#a2a2a2]">
                          {product?.totalOrders} Sold
                        </span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-[50px] bg-slate-400">
                        <div className="h-2.5 w-[40%] rounded-[50px] bg-green-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

        {!isLoading && vendorAggregate?.length < 1 && (
          <div className="py-8 px-4 text-center">No Products yet</div>
        )}
      </div>
    </div>
  );
};

export default AdminOverviewTopProduct;
