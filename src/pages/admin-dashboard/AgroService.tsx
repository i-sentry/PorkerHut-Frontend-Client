import React, { useMemo, useState } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column, Row } from "react-table";
import { useGetAllAgroServices } from "../../services/hooks/users";
import { BsStar, BsX } from "react-icons/bs";
import moment from "moment";
import logo from "../../assets/images/porkerlogo.png";
import { Tooltip } from "../../components/utility/ToolTip";

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
    accessor: "city",
  },
  {
    Header: "Address",
    accessor: (row: any) => {
      return (
        <>
          {row?.address ? (
            <Tooltip message={row?.address} className={"text-left"}>
              {row?.address?.slice(0, 30) || ""}...
            </Tooltip>
          ) : (
            "-"
          )}
        </>
      );
    },
  },
  {
    Header: "Phone Number",
    accessor: "phoneNumber",
  },
  {
    Header: "Date",
    accessor: (row: any) => {
      return <span>{moment(row?.createdAt).format("DD MMMM YYYY")}</span>;
    },
  },
  // {
  //   Header: "Status",
  //   accessor: "",
  // },
];

const AgroService = () => {
  const { data, isLoading } = useGetAllAgroServices();
  const [showOverlay, setShowOverlay] = useState(false);
  const [agroInfo, setAgroInfo] = useState<any>();

  const agroService = useMemo(() => {
    return isLoading === false && data?.agroservices ? data?.agroservices : [];
  }, [data?.agroservices]);

  const optionalColumn = {
    id: "expand",
    Header: <div></div>,

    Cell: ({ row }: any) => {
      // const navigate = useNavigate();

      const handleView = (id: any) => {
        setShowOverlay(true);
        setAgroInfo(row?.original);
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
    <>
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
        {!isLoading && (
          <div className="hide-scroll-bar">
            <AdminTable
              tabs={["All", "Unread", "Read", "Starred"]}
              placeholder={
                "Search account owner, email address, store name.... "
              }
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
      <ServicesOverlay
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        row={agroInfo}
      />
    </>
  );
};

export default AgroService;

const ServicesOverlay = ({ showOverlay, setShowOverlay, row }: any) => {
  console.log(row, "row");

  return (
    <>
      {showOverlay && (
        <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-60">
          <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center pt-20">
            <div className="relative w-[500px] bg-[#F4F4F4] px-8 py-10">
              <span
                className="absolute top-3 right-3 cursor-pointer text-[#333]"
                onClick={() => setShowOverlay(false)}
              >
                <BsX size={32} />
              </span>

              <div>
                <h3 className="text-2xl font-bold">Agroservice Request</h3>
                <p>
                  Here you can find agro service request and treat as urgent
                </p>
                <div className="mt-8">
                  <label htmlFor="fullName" className="mb-2 block">
                    <span className="mb-1 font-medium text-neutral-500">
                      Full Name:
                    </span>
                    <input
                      id="fullName"
                      type="text"
                      defaultValue={row?.fullName}
                      disabled
                      className={`relative block h-12 w-full appearance-none rounded-md border-2 border-[#D9D9D9] px-[14px] py-[10px] text-[#333333] placeholder-[#A2A2A2] placeholder:text-[14px] placeholder:leading-[16px] focus:z-10 focus:outline-none
                        sm:text-sm`}
                      placeholder="Enter your full name"
                    />
                  </label>
                  <div>
                    <label
                      htmlFor="mes"
                      className="mb-1 font-medium text-neutral-500"
                    >
                      Message:
                    </label>
                    <textarea
                      id="mes"
                      name="mes"
                      disabled
                      defaultValue={row?.message}
                      className="form-textarea h-[140px] w-full resize-none rounded-md border border-neutral-200 p-3 text-sm"
                    ></textarea>
                  </div>

                  <button
                    onClick={() => setShowOverlay(false)}
                    className="mt-3 rounded-md bg-green-700 px-6 py-2 text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
