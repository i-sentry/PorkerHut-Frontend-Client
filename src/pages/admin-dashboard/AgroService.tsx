import React, { useMemo } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import { useGetAllAgroServices } from "../../services/hooks/users";
import { BsStar } from "react-icons/bs";
import moment from "moment";
import logo from "../../assets/images/porkerlogo.png";

const Tcolumns: readonly Column<object>[] = [
  {
    Header: " ",
    accessor: (row: any) => {
      return (
        <span>
          <BsStar size={20} className="text-[#a2a2a2]" />
        </span>
      );
    },
  },
  {
    Header: "Name",
    accessor: "fullName",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "City/Town",
    accessor: "",
  },
  {
    Header: "Address",
    accessor: "",
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Date",
    accessor: (row: any) => {
      console.log(row, "roeww", moment(row?.createdAt).format("DD MMMM YYYY"));
      return <span>{moment(row?.createdAt).format("DD MMMM YYYY")}</span>;
    },
  },
  {
    Header: "Status",
    accessor: "",
  },
];

const optionalColumn = {
  id: "expand",
  Header: <div></div>,

  Cell: ({ row }: any) => {
    // const navigate = useNavigate();
    // console.log(row?.original, row?.original?._id, "row");

    // const handleView = (id: any) => {
    //   navigate(`/my__orders/${id}`, {
    //     replace: true,
    //   });
    // };
    return (
      <div>
        <span
          // onClick={() => handleView(row?.original?._id)}
          className="flex cursor-pointer items-center gap-3 text-sm text-[#333333] underline transition-all ease-in-out hover:text-[#0eb683] active:scale-90 "
        >
          View
        </span>
      </div>
    );
  },
};

const AgroService = () => {
  const { data, isLoading } = useGetAllAgroServices();

  const agroService = useMemo(() => {
    return isLoading === false && data?.agroservices ? data?.agroservices : [];
  }, [data?.agroservices]);

  console.log(data, "agrosss");
  return (
    <div className="py-6 px-5">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#333]">Agro Service</h1>
        <p className="text-[#a2a2a2]">
          Here you can find agro service request and treat as urgent.
        </p>
      </div>
      {isLoading && (
        <>
          <div className="flex h-[50vh] w-full flex-col items-center justify-center bg-white py-10">
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
        </>
      )}
      {agroService && (
        <div className="hide-scroll-bar">
          <AdminTable
            tabs={["All", "Unread", "Read", "Starred"]}
            placeholder={"Search account owner, email address, store name.... "}
            Tcolumns={Tcolumns}
            showCheckbox={true}
            showDropDown={true}
            TData={agroService}
            optionalColumn={optionalColumn}
            dropDownOption={[
              {
                label: "Please select an action",
                value: "please_select_an_action",
              },
              { label: "Mark as Read", value: "mark_as_read" },
              { label: "Starred", value: "starred" },
              { label: "Delete", value: "delete" },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default AgroService;
