import { useMemo } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import {
  useGetAllUsersAggregate,
  useGetAllVendorsAggregate,
} from "../../services/hooks/orders";

const TopStoresRating = () => {
  const { data, isLoading } = useGetAllVendorsAggregate();
  const { data: user } = useGetAllUsersAggregate();
  const vendorAggregate = useMemo(
    () => (data?.data?.length ? data?.data : []),
    [data?.data],
  );
  const sortedByAmount = vendorAggregate?.toSorted(
    (a: any, b: any) => b?.totalAmountSpent - a?.totalAmountSpent,
  );

  return (
    <div
      style={{ overflowClipMargin: "10px" }}
      className="hide-scroll-bar h-64 overflow-auto rounded border border-[#D9D9D9] bg-[#F4F4F4] py-3 px-3 pt-0"
    >
      <div className="sticky top-0 left-0 flex w-full items-center justify-between bg-[#F4F4F4] py-3">
        <h4 className="text-base font-bold text-slate-700 ">Top Stores</h4>
      </div>

      <div className="mt-4 space-y-3">
        {!isLoading &&
          vendorAggregate?.length >= 1 &&
          vendorAggregate
            ?.toSorted(
              (a: any, b: any) => b?.totalAmountSpent - a?.totalAmountSpent,
            )
            ?.map((vendor: any, index: any) => (
              <div className="flex items-center justify-between" key={index}>
                <div className="grid grid-cols-[54px_1fr] items-center gap-1.5">
                  <span>
                    <BiSolidUserCircle size={54} className="text-neutral-500" />
                  </span>
                  <div>
                    <h3 className="text-[#333]">
                      {
                        vendor?.vendorDetails?.sellerAccountInformation
                          ?.shopName
                      }
                    </h3>
                    <span className="col-[2] text-[#a2a2a2]">Abuja</span>
                  </div>
                </div>
                <div className="inline-grid grid-cols-1 text-right">
                  <span className="font-semibold text-[#333]">
                    ₦{vendor?.totalSalesAmount.toLocaleString()}
                  </span>
                  <span className="text-[#a2a2a2]">
                    {vendor?.totalOrders} Sales
                  </span>
                </div>
              </div>
            ))}

        {!isLoading && vendorAggregate?.length < 1 && (
          <div className="py-8 px-4 text-center">No vendors yet</div>
        )}
      </div>
    </div>
  );
};

export default TopStoresRating;
