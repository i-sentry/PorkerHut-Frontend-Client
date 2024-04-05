import React, { useMemo, useState } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import moment from "moment";
import { BsStar, BsX } from "react-icons/bs";
import { useGetWeekendKills } from "../../services/hooks/service/weekendKills";
import logo from "../../assets/images/porkerlogo.png";
import { useNavigate } from "react-router-dom";

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

const WeekendKill = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetWeekendKills();
  const [showOverlay, setShowOverlay] = useState(false);
  const weekendKills = useMemo(() => {
    return isLoading === false && data?.weekendKills ? data?.weekendKills : [];
  }, [data?.weekendKills]);

  console.log(
    data?.weekendKills,
    "weekendkillsssss",
    weekendKills?.length > 0,
    weekendKills?.length,
  );
  const optionalColumn = {
    id: "expand",
    Header: <div></div>,
    // accessor: (row: any) => {
    //   const handleView = (id: any) => {
    //     setShowOverlay(true);
    //     console.log(id);
    //   };

    //   return (
    //     <div>
    //       <span
    //         onClick={() => handleView(row?._id)}
    //         className="flex cursor-pointer items-center gap-3 text-sm text-[#333333] underline transition-all ease-in-out hover:text-[#0eb683] active:scale-90 "
    //       >
    //         View
    //       </span>
    //     </div>
    //   );
    // },

    Cell: ({ row }: any) => {
      // const navigate = useNavigate();

      const handleView = (id: any) => {
        console.log(row?.original, row?.original?._id, "row");
        setShowOverlay(true);
        console.log(id);
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
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#333]">Weekend Kills</h1>
          <p className="text-[#a2a2a2]">
            Here you can find weekend kill request and treat as urgent.
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
        {!isLoading && weekendKills && (
          <AdminTable
            tabs={["All", "Unread", "Read", "Starred"]}
            placeholder={"Search account owner, email address, store name.... "}
            Tcolumns={Tcolumns}
            showCheckbox={true}
            showDropDown={true}
            TData={weekendKills}
            optionalColumn={optionalColumn}
          />
        )}
      </div>
      <ServicesOverlay
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </>
  );
};

export default WeekendKill;

const ServicesOverlay = ({ showOverlay, setShowOverlay }: any) => {
  return (
    <>
      {showOverlay && (
        <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-60">
          <div className="absolute top-0 left-0 flex h-screen w-full items-start justify-center pt-20">
            <div className="relative w-[500px] bg-[#F4F4F4] px-8 py-10">
              <span
                className="absolute top-3 right-3 cursor-pointer text-[#333]"
                onClick={() => setShowOverlay(false)}
              >
                <BsX size={32} />
              </span>

              <h2 className="text-2xl font-medium">Let’s Talk Agro Services</h2>
              <p className="text-[#797979]">
                How can we help? Please contact us and we will get back to you
                as soon as possible. If you have an inquiry about our agro
                service, you can respond directly to the order confirmation
                email or contact us via chat.
              </p>
              <div
                style={{ overflowClipMargin: "16px" }}
                className="hide-scroll-bar h-[400px] w-full overflow-auto"
              >
                <form className="mt-6 space-y-3">
                  <label htmlFor="fullName" className="block w-full">
                    <span className="mb-1.5 inline-block text-sm text-[#333333]">
                      Full Name
                    </span>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      disabled
                      className="form-input w-full rounded border border-[#D9D9D9] bg-white text-[#a2a2a2] focus:border-green-700 focus:ring-0"
                    />
                  </label>
                  <label htmlFor="email" className="block w-full">
                    <span className="mb-1.5 inline-block text-sm text-[#333333]">
                      Email address
                    </span>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      disabled
                      className="form-input w-full rounded border border-[#D9D9D9] bg-white text-[#a2a2a2] focus:border-green-700 focus:ring-0"
                    />
                  </label>
                  <label htmlFor="address" className="block w-full">
                    <span className="mb-1.5 inline-block text-sm text-[#333333]">
                      Address
                    </span>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      disabled
                      className="form-input w-full rounded border border-[#D9D9D9] bg-white text-[#a2a2a2] focus:border-green-700 focus:ring-0"
                    />
                  </label>
                  <label htmlFor="city" className="block w-full">
                    <span className="mb-1.5 inline-block text-sm text-[#333333]">
                      City/Town
                    </span>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      disabled
                      className="form-input w-full rounded border border-[#D9D9D9] bg-white text-[#a2a2a2] focus:border-green-700 focus:ring-0"
                    />
                  </label>
                  <label htmlFor="phoneNumber" className="block w-full">
                    <span className="mb-1.5 inline-block text-sm text-[#333333]">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      disabled
                      className="form-input w-full rounded border border-[#D9D9D9] bg-white text-[#a2a2a2] focus:border-green-700 focus:ring-0"
                    />
                  </label>
                  <label htmlFor="subject" className="block w-full">
                    <span className="mb-1.5 inline-block text-sm text-[#333333]">
                      Subject
                    </span>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      disabled
                      className="form-input w-full rounded border border-[#D9D9D9] bg-white text-[#a2a2a2] focus:border-green-700 focus:ring-0"
                    />
                  </label>
                  <label htmlFor="message" className="block w-full">
                    <span className="mb-1.5 inline-block text-sm text-[#333333]">
                      Message
                    </span>
                    <textarea
                      id="message"
                      name="message"
                      disabled
                      className="form-textarea h-[130px] w-full rounded border border-[#D9D9D9] bg-white text-[#a2a2a2] focus:border-green-700 focus:ring-0"
                    />
                  </label>
                  <div className="flex items-start justify-end">
                    <button
                      onClick={() => setShowOverlay(false)}
                      className="rounded-md bg-green-700 px-5 py-2.5 text-white"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
