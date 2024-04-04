import React, { useMemo } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Column } from "react-table";
import moment from "moment";
import { BsStar } from "react-icons/bs";
import { useGetWeekendKills } from "../../services/hooks/service/weekendKills";
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

const WeekendKill = () => {
  const { data, isLoading } = useGetWeekendKills();
  const weekendKills = useMemo(() => {
    return isLoading === false && data?.weekendKills ? data?.weekendKills : [];
  }, [data?.weekendKills]);

  console.log(
    data?.weekendKills,
    "weekendkillsssss",
    weekendKills?.length > 0,
    weekendKills?.length,
  );

  return (
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
      {weekendKills && (
        <AdminTable
          tabs={["All", "Unread", "Read", "Starred"]}
          placeholder={"Search account owner, email address, store name.... "}
          Tcolumns={Tcolumns}
          showCheckbox={true}
          showDropDown={true}
          TData={weekendKills}
        />
      )}
    </div>
  );
};

export default WeekendKill;
