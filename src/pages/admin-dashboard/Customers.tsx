import React from "react";
import Popover from "../../components/utility/PopOver";
import { BsThreeDotsVertical } from "react-icons/bs";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import customerMockData from "../../utils/json/customerMockData.json";
import { Column } from "react-table";

export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "active":
      return <span className="  text-[#22C55E] ">Active</span>;

    case "inactive":
      return <span className=" text-[#F91919]  capitalize">inactive</span>;
    default:
      return (
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
      );
  }
};


const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phone_number",
  },
  {
    Header: "Order",
    accessor: "order",
  },
  {
    Header: "Amount Spent",
    accessor: "amount_spent",
  },
  {
    Header: "Account ID",
    accessor: "account_id",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];

const Customers = () => {


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
    Cell: (props: any) => (
      <>
        <Popover
          buttonContent={<BsThreeDotsVertical size={20} />}
          placementOrder={"auto"}
          closeOnClick={true}
        >
          <div className="w-[150px] py-2">
            <button
              className="hover:bg-[#E9F5EC] font-light py-1 px-3 transition-all duration-300 text-[#667085] w-full text-left"
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
              className="hover:bg-[#E9F5EC] font-light py-1 px-3 transition-all duration-300 text-[#667085] w-full text-left"
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
    <div className="pl-10 pt-10 pr-5 ">
      <div className="mb-5">
        <h1 className="text-2xl font-medium text-[#333333]">Customers</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          All Information available
        </span>
      </div>

      <div>
        <AdminTable
          Tcolumns={Tcolumns}
          // @ts-ignore
          optionalColumn={optionalColumn}
          tabs={["All", "Active", "Inactive"]}
          TData={customerMockData}
          placeholder={"Search name, email, account ID....  "}
        />
      </div>
    </div>
  );
};

export default Customers;
