import React, { useMemo } from "react";
import Img from "../../assets/images/Pig.png";
import { useGetTopProducts } from "../../services/hooks/orders";
import { BiSolidUserCircle } from "react-icons/bi";

const calPercentages = (items: any[], sold: number) => {
  const totalSum = items.reduce((sum, item) => sum + item?.totalItemsSold, 0);
  return (sold / totalSum) * 100;
};

const AdminOverviewTopProduct = () => {
  const { data, isLoading } = useGetTopProducts();
  const vendorAggregate = useMemo(
    () => (data?.data?.length ? data?.data : []),
    [data?.data],
  );
  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  const totalItems = vendorAggregate?.reduce(
    (acc: number, cur: number) => acc + cur,
    0,
  );

  console.log(data, "toppp");

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
            ?.toSorted(
              (a: any, b: any) => b?.totalItemsSold - a?.totalItemsSold,
            )
            ?.map((product: any, index: number) => {
              return (
                <div
                  className="flex w-full items-center justify-between"
                  key={index}
                >
                  <div className="grid w-full grid-cols-[54px_1fr] items-center gap-1.5">
                    <span className="h-[54px] w-[54px] overflow-hidden rounded-full">
                      <img
                        src={product?.productInfo?.images[0]}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                      {/* <BiSolidUserCircle
                        size={54}
                        className="text-neutral-500"
                      /> */}
                    </span>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-right">
                        <span className="font-semibold text-[#333]">
                          {product?.productInfo?.information?.productName}
                        </span>
                        <span className="text-[#a2a2a2]">
                          {product?.totalItemsSold} Sold
                        </span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-[50px] bg-slate-400">
                        <div
                          style={{
                            width: `${calPercentages(
                              vendorAggregate,
                              product?.totalItemsSold,
                            )}%`,
                          }}
                          className="h-2.5 w-[40%] rounded-[50px] bg-green-700"
                        ></div>
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
