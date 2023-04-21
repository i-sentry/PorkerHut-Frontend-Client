import React from "react";
import AdminNewStoreTable from "../../components/admin-dashboard-components/AdminNewStoreTable";
import { useNavigate } from "react-router-dom";

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
    <div className="p-14 ">
      <div className="mb-2">
        <h1 className="text-2xl font-medium text-[#333333]">New Stores</h1>
        <span className="text-[#A2A2A2] font-light text-sm">
          All new stores can be approved and rejected.
        </span>
      </div>
      <div>
        <AdminNewStoreTable
          //@ts-ignore
          optionalColumn={optionalColumn}
          tabs={["All", "Pending", "Approved", "Rejected"]}
        />
      </div>
    </div>
  );
};

export default NewStore;
