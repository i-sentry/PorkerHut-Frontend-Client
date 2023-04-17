import React from "react";
import AdminCustomerTable from "../../components/admin-dashboard-components/AdminCustomerTable";
import Popover from "../../components/utility/PopOver";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TabSelector } from "../../components/utility/TabSelector";

const Customers = () => {
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
    <div className="p-14 ">
      <div className="mb-2">
        <h1 className="text-xl font-medium text-[#333333]">Customers</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          All Information available
        </span>
      </div>

      <div>
        <AdminCustomerTable
          // @ts-ignore
          optionalColumn={optionalColumn}
          tabs={["All", "Active", "Inactive"]}
        />
      </div>
    </div>
  );
};

export default Customers;
