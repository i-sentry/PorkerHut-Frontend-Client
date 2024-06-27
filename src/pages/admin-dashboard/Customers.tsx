import React, { useContext, useEffect, useMemo, useState } from "react";
import Popover from "../../components/utility/PopOver";
import { BsThreeDotsVertical } from "react-icons/bs";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import {
  useEnableDisableUser,
  useGetAllUsers,
} from "../../services/hooks/users";
import logo from "../../assets/images/porkerlogo.png";
import { Tooltip } from "../../components/utility/ToolTip";
import {
  useGetAggregateUserOrders,
  useGetAllUsersAggregate,
} from "../../services/hooks/orders";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import AdminAccessContext from "../../context/AdminAccessProvider";

export const StatusColumn = ({ data }: { data: any }) => {
  switch (data?.userData?.status?.toLowerCase()) {
    case "active":
      return (
        <span className="text-sm font-normal  text-[#22C55E] ">Active</span>
      );

    case "inactive":
      return (
        <span className=" text-sm font-normal capitalize  text-[#F91919]">
          Inactive
        </span>
      );
    default:
      return (
        <span className="text-sm font-normal text-[#F91919] ">Inactive</span>
      );
  }
};

export const OrderColumn = ({ row }: any) => {
  const id = row?._id;
  const { data: orders } = useGetAggregateUserOrders(id);
  return <div>{orders?.data?.totalOrders}</div>;
};

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

      // return `${info?.phoneNumber || ""}`;
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
    accessor: (row: any) => {
      return <StatusColumn data={row} />;
    },
  },
];

const Customers = () => {
  const [users, setUsers] = useState<any[]>([]);
  const { data: allUser, isLoading } = useGetAllUsers();
  const { data: user, refetch } = useGetAllUsersAggregate();
  const userAggregate = useMemo(
    () => (user?.data ? user?.data : []),
    [user?.data],
  );

  useEffect(() => {
    if (!isLoading && allUser)
      setUsers(allUser?.filter((user: any) => user?.role === "user"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  const optionalColumn = {
    id: "view",
    // The header can use the table's getToggleAllRowsSelectedProps method
    // to render a checkbox
    Header: () => <div></div>,
    // The cell can use the individual row's getToggleRowSelectedProps method
    // to the render a checkbox
    Cell: (props: any) => {
      return (
        <>
          <UserActions user={props?.row?.original} refetch={refetch} />
        </>
      );
    },
  };

  console.log(users, "users", user?.data);

  return (
    <div className="py-6 pl-8 pr-5 ">
      <div className="mb-5">
        <h1 className="text-2xl font-medium text-[#333333]">Customers</h1>
        <span className="text-sm font-normal text-[#A2A2A2]">
          All Information available
        </span>
      </div>

      <div>
        {isLoading ? (
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
        ) : (
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
            TData={userAggregate}
            placeholder={"Search name, email, account ID....  "}
          />
        )}
      </div>
    </div>
  );
};

export default Customers;

const UserActions = ({ user, refetch }: { user: any; refetch: any }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: enableDisableUser } = useEnableDisableUser(
    user?.userData?._id,
  );
   const { userRole } = useContext(AdminAccessContext);

  const handleEnableDisable = async () => {
    setIsLoading(true);
    try {
      const res = await enableDisableUser({});
      refetch();
      console.log(res, "user res");
      toast.success(
        `${res?.data?.data?.lastName}'s account is now ${res?.data?.data?.status}`,
      );
      setIsLoading(false);
    } catch (err) {
      console.log(err, "user err");
      toast.success("Error Occured");
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <span>
          <CgSpinner className="animate-spin" size={20} />
        </span>
      ) : (
        <Popover
          buttonContent={<BsThreeDotsVertical size={20} />}
          placementOrder={"auto"}
          closeOnClick={true}
        >
          <div className="flex w-[150px] flex-col py-2">
            <button
              disabled={user?.userData?.status?.toLowerCase() === "active"}
              className="w-full cursor-pointer py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC] disabled:cursor-not-allowed disabled:text-neutral-300"
              onClick={handleEnableDisable}
            >
              Activate
            </button>
            <button
              disabled={user?.userData?.status?.toLowerCase() === "inactive"}
              className="w-full cursor-pointer py-1 px-3 text-left font-light text-[#667085] transition-all duration-300 hover:bg-[#E9F5EC] disabled:cursor-not-allowed disabled:text-neutral-300"
              onClick={handleEnableDisable}
            >
              Deactivate
            </button>
          </div>
        </Popover>
      )}
    </>
  );
};
