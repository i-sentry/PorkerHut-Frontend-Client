import React, { useMemo } from "react";
import { useGetAllUsersAggregate } from "../../services/hooks/orders";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import Popover from "../../components/utility/PopOver";
import { BsThreeDotsVertical } from "react-icons/bs";
import { StatusColumn } from "./Customers";
import { Tooltip } from "../../components/utility/ToolTip";
import { Column } from "react-table";

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Name",
    // accessor: "name",
    accessor: (row: any) => (
      <p className="capitalize">
        {row?.userData?.firstName.toLowerCase()}{" "}
        {row?.userData?.lastName.toLowerCase()}
      </p>
    ),
  },
  {
    Header: "Email",
    accessor: (row: any) => (
      <span className="">{row?.userData?.email.toLowerCase()}</span>
    ),
  },
  {
    Header: "Phone Number",
    accessor: (row: any) => {
      const info = row?.billingInfo?.find((info: any) => info?.isDefault);

      return <div>{info?.phoneNumber || "Not Applicable"}</div>;
    },
  },
  {
    Header: "Order",
    accessor: "totalOrders",
  },
  {
    Header: "Amount Spent",
    // accessor: "totalAmountSpent",
    accessor: (row: any) => (
      <span className="">₦{row?.totalAmountSpent.toLocaleString()}</span>
    ),
  },
  {
    Header: "Account ID",
    accessor: (row: any) => (
      <Tooltip message={row?._id}>
        <span className="cursor-pointer">{row?._id.slice(0, 10)}...</span>
      </Tooltip>
    ),
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];

const CustomerCompletedOrders = () => {
  const { data: user } = useGetAllUsersAggregate();
  const userAggregate = useMemo(
    () => (user?.data?.length ? user?.data : []),
    [user?.data],
  );

  const completedOrders = userAggregate.filter((item: any) =>
    item.ordersByStatus.some((order: any) => order.status === "completed"),
  );

  const optionalColumn = {
    id: "view",
    // The header can use the table's getToggleAllRowsSelectedProps method
    // to render a checkbox
    Header: () => <div></div>,
    // The cell can use the individual row's getToggleRowSelectedProps method
    // to the render a checkbox
    Cell: (props: any) => (
      <>
        <Popover
          buttonContent={<BsThreeDotsVertical size={20} />}
          placementOrder={"auto"}
          closeOnClick={true}
        >
          <div className="flex w-[150px] flex-col py-2">
            <button
              className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
              onClick={() => {
                //  router.push(
                //    `/assets/corporate-assets/${props.row.original.id}`
                //  );
              }}
            >
              Activate
            </button>
            {/* {permissions.canEdit && ( */}
            <button
              className="w-full py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC]"
              onClick={() => {
                //  setEditAsset(true);
                //  setAssetId(props.row.original.id);
              }}
            >
              Deactivate
            </button>
            {/* )} */}
            {/* {permissions.canDelete && (
               <button
                 className="hover:bg-[#E9F5EC] font-light py-1 px-3 transition-all duration-300 text-[#667085] w-full text-left"
                 onClick={() => setDeleteCompany(props.row.original)}
               >
                 Delete Asset
               </button>
             )} */}
          </div>
        </Popover>
      </>
    ),
  };
  return (
    <div className="py-6 pl-5 pr-5 ">
      <div className="mb-5">
        <h1 className="text-2xl font-medium text-[#333333]">
          Customers with Completed Orders
        </h1>
        <span className="text-sm font-normal text-[#A2A2A2]">
          All Information available for customers with complete order
        </span>
      </div>

      <div>
        <AdminTable
          Tcolumns={Tcolumns}
          // @ts-ignore
          showCheckbox={true}
          showDropDown={true}
          optionalColumn={optionalColumn}
          dropDownOption={[
            {
              value: "inactive",
              label: "Inactive",
            },
            {
              value: "active",
              label: "Active",
            },
          ]}
          tabs={["All", "Active", "Inactive"]}
          TData={completedOrders}
          placeholder={"Search name, email, account ID....  "}
        />
      </div>
    </div>
  );
};

export default CustomerCompletedOrders;
