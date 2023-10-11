import React from "react";
import { useNavigate } from "react-router-dom";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import VetData from "../../utils/json/vetData.json";

export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "approved":
      return <span className="text-[#22C55E]">Approved</span>;

    case "rejected":
      return <span className=" text-[#F91919]">Rejected</span>;
    case "pending":
      return <span className=" text-[#F29339]">Pending</span>;
    // case "returned":
    //   return <span className=" text-[#198df9]">Returned</span>;
    // case "returned Failed":
    //   return <span className=" text-[#F91919]">Returned Failed</span>;
    default:
      return (
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
      );
  }
};

// export const ProductNameColumn = ({ data }: any) => {
//   console.log(data?.row?.original?.img, "data");
//   const adata = data?.cell?.value;
//   const lowerData = adata?.toLowerCase();
//   const assetName = _.startCase(lowerData);
//   return (
//     <div className="flex items-center gap-2">
//       <figure className="h-9 w-9 rounded-full border">
//         <img
//           src={data?.row?.original?.img}
//           alt="product"
//           className="rounded-full"
//         />
//       </figure>
//       <span className="font-light text-sm whitespace-nowrap  text-[#333333]">
//         {assetName}
//       </span>
//     </div>
//   );
// };

const Tabcolumns: readonly Column<object>[] = [
  {
    Header: "Account Name",
    accessor: "accountName",
    // Cell: (props: any) => <ProductNameColumn data={props} />,
  },
  {
    Header: "Business Name",
    accessor: "businessName",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phone",
  },
  {
    Header: "Type of Vet",
    accessor: "vet_type",
  },
  {
    Header: "State of Operation",
    accessor: "state",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];

const VetPartner = () => {
  const optionalColumn = {
    id: "expand",
    // The header can use the table's getToggleAllRowsSelectedProps method
    // to render a checkbox
    Header: (
      <div>
        {/* <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} /> */}
      </div>
    ),
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
            className="flex items-center gap-3 text-sm underline text-[#333333] active:scale-90 transition-all ease-in-out cursor-pointer hover:text-[#0eb683] "
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
        <h1 className="text-2xl font-medium "> Vets</h1>
        <span className="text-[#A2A2A2] font-light text-sm">
          All new vet partner can be approved and rejected.
        </span>
      </div>
      <div>
        <AdminTable
          // @ts-ignore
          optionalColumn={optionalColumn}
          tabs={["All", "Approved", "Pending", "Rejected"]}
          Tcolumns={Tabcolumns}
          TData={VetData}
          placeholder={"Search account owner, email address, store name.... "}
        />
      </div>
    </div>
  );
};

export default VetPartner;
