import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import newStoreData from "../../utils/json/newStoreData.json";
import { useGetVendors } from "../../services/hooks/Vendor";
import { Tooltip } from "../../components/utility/ToolTip";
import StoreProfileOverlay from "../../components/admin-dashboard-components/StoreProfileOverlay";
import moment from "moment";

export const StatusColumn = ({ data }: { data: any }) => {
  switch (data?.storeStatus?.toLowerCase()) {
    case "approved":
      return <span className="  text-[#22C55E] ">Approved</span>;

    case "rejected":
      return <span className=" capitalize  text-[#F91919]">Rejected</span>;

    case "deactivated":
      return <span className=" capitalize  text-[#F91919]">Deactivated</span>;

    case "pending":
      return <span className=" capitalize  text-[#F29339]">Pending</span>;
    default:
      return (
        <span className="text-sm font-normal text-[#202223] ">{data}</span>
      );
  }
};

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Account Owner",
    accessor: (row: any) => {
      return row?.businessInformation?.businessOwnerName;
    },
    // accessor: "account_owner",
    // Cell: ({ value }) => (
    //   <div className="flex items-center gap-2">
    //     <img
    //       src={value?.image}
    //       alt={value?.name}
    //       className="h-8 w-8 rounded-full object-cover"
    //     />
    //     <span className="whitespace-normal">{value?.name}</span>
    //   </div>
    // ),
  },
  {
    Header: "Email Address",
    accessor: (row: any) => row?.sellerAccountInformation?.email.toLowerCase(),
  },
  {
    Header: "Company Address",
    accessor: (row: any) => {
      return (
        <Tooltip
          className="items-start"
          message={row?.businessInformation?.address1}
        >
          <span className="text-left capitalize">
            {row?.businessInformation?.address1.slice(0, 20)}
          </span>
        </Tooltip>
      );
    },
  },
  {
    Header: "Phone",
    accessor: (row: any) => row?.sellerAccountInformation?.phoneNumber,
  },
  {
    Header: "Store Name",
    accessor: (row: any) => {
      return (
        <Tooltip
          className="items-start"
          message={row?.sellerAccountInformation?.shopName}
        >
          <span className="text-left capitalize">
            {row?.sellerAccountInformation?.shopName.slice(0, 10)}
          </span>
        </Tooltip>
      );
    },
  },
  {
    Header: "Created",
    accessor: (row: any) => {
      return (
        <span>
          {row?.createdAt
            ? moment(row?.createdAt).format("DD MMM YYYY")
            : "Nil"}
        </span>
      );
    },
  },

  {
    Header: "Status",
    accessor: (row: any) => {
      return <StatusColumn data={row} />;
    },
    // Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];

const NewStore = () => {
  const { data: allStores, isLoading } = useGetVendors();
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setData(
        allStores?.data
          ?.slice()
          ?.sort(
            (a: any, b: any) =>
              new Date(b?.createdAt).getTime() -
              new Date(a?.createdAt).getTime(),
          ),
      );
    }
  }, [isLoading, allStores?.data]);

  console.log(data, "stors");

  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  const optionalColumn = {
    id: "expand",
    // The header can use the table's getToggleAllRowsSelectedProps method
    // to render a checkbox
    Header: <div></div>,
    // The cell can use the individual row's getToggleRowSelectedProps method
    // to the render a checkbox
    Cell: ({ row }: any) => {
      const navigate = useNavigate();

      const handleView = (id: any) => {
        navigate(`/admin/admin-order/${id}`, {
          replace: true,
        });
      };
      return (
        <div>
          <span
            onClick={() => setIsOpen(true)}
            className="flex cursor-pointer items-center gap-3 text-sm text-[#333333] underline transition-all ease-in-out active:scale-90"
          >
            View
          </span>
        </div>
      );
    },
  };

  return (
    <>
      <div className="py-6 pl-8 pr-5 ">
        <div className="mb-5">
          <h1 className="text-2xl font-medium text-[#333333]">New Stores</h1>
          <span className="text-sm font-light text-[#A2A2A2]">
            All new stores can be approved and rejected.
          </span>
        </div>
        <div>
          <AdminTable
            showDropDown={true}
            showCheckbox={true}
            Tcolumns={Tcolumns}
            // @ts-ignore
            optionalColumn={optionalColumn}
            tabs={["All", "Pending", "Approved", "Rejected"]}
            TData={data}
            placeholder={"Search account owner, email address, vet name.... "}
            statusType="store"
          />
        </div>
      </div>
      <StoreProfileOverlay isOpen={isOpen} setIsOpen={setIsOpen} item={""} />
    </>
  );
};

export default NewStore;
