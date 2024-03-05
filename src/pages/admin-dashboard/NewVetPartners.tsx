/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useGetAllVets } from "../../services/hooks/service/vet";
import { BsSearch } from "react-icons/bs";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/porkerlogo.png";

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
    accessor: "vetType",
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
        <span className="text-sm font-normal text-[#202223] ">{data}</span>
      );
  }
};

const NewVetPartners = () => {
  const [vets, setVets] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { data, isLoading } = useGetAllVets();
  const allVets = data?.data?.data;
  useEffect(() => {
    if (!isLoading) setVets(allVets);
  }, [allVets, isLoading]);

  const handleChange = (value: any) => {
    setSearchValue(value);
    setVets(
      vets
        .slice()
        .filter(
          (item: any) =>
            item.accountName.toLowerCase().includes(value.toLowerCase()) ||
            item.businessName.toLowerCase().includes(value.toLowerCase()) ||
            item.status.toLowerCase().includes(value.toLowerCase()),
        ),
    );
  };

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
            onClick={() => handleView(row?.original?._id)}
            className="flex cursor-pointer items-center gap-3 text-sm text-[#333333] underline transition-all ease-in-out hover:text-[#0eb683] active:scale-90 "
          >
            View
          </span>
        </div>
      );
    },
  };

  return (
    <div className="pl-10 pt-10 pr-5 pb-10">
      <div className="mb-5">
        <div className="flex flex-col items-start justify-between">
          <div className="mb-2">
            <h1 className="text-2xl font-medium ">New Vets</h1>
            <span className="text-sm font-light text-[#A2A2A2]">
              New vets All new vet partner can be approved and rejected.
            </span>
          </div>
        </div>
      </div>

      <div>
        {isLoading && (
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
        )}
        {!isLoading ? (
          <AdminTable
            // @ts-ignore
            optionalColumn={optionalColumn}
            tabs={["All", "Approved", "Pending", "Rejected"]}
            Tcolumns={Tabcolumns}
            TData={vets}
            placeholder={"Search account owner, email address, store name.... "}
          />
        ) : (
          "No Vet Partners Yet"
        )}
      </div>
    </div>
  );
};

export default NewVetPartners;
