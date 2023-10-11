import React from "react";
import { useNavigate } from "react-router-dom";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import newStoreData from "../../utils/json/newStoreData.json";

export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "approved":
      return <span className="  text-[#22C55E] ">Approved</span>;

    case "rejected":
      return <span className=" text-[#F91919]  capitalize">Rejected</span>;

    case "pending":
      return <span className=" text-[#F29339]  capitalize">Pending</span>;
    default:
      return (
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
      );
  }
};

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Account Owner",
    accessor: "account_owner",
    Cell: ({ value }) => (
      <div className="flex gap-2 items-center">
        <img
          src={value?.image}
          alt={value?.name}
          className="h-8 w-8 object-cover rounded-full"
        />
        <span className="whitespace-normal">{value?.name}</span>
      </div>
    ),
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Company Address",
    accessor: "company_address",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Store Name",
    accessor: "store_name",
  },
  {
    Header: "Created",
    accessor: "created_at",
  },

  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];

const NewStore = () => {

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
            onClick={() => handleView(row?.original?.id)}
            className="flex items-center gap-3 text-sm underline text-[#333333] active:scale-90 transition-all ease-in-out cursor-pointer"
          >
            View
          </span>
        </div>
      );
    },
  };

  return (
    <div className="pl-10 pt-10 pr-5 ">
      <div className="mb-5">
        <h1 className="text-2xl font-medium text-[#333333]">New Stores</h1>
        <span className="text-[#A2A2A2] font-light text-sm">
          All new stores can be approved and rejected.
        </span>
      </div>
      <div>
        <AdminTable
          Tcolumns={Tcolumns}
          // @ts-ignore
          optionalColumn={optionalColumn}
          tabs={["All", "Pending", "Approved", "Rejected"]}
          TData={newStoreData}
          placeholder={"Search account owner, email address, vet name.... "}
        />
      </div>
    </div>
  );
};

export default NewStore;
