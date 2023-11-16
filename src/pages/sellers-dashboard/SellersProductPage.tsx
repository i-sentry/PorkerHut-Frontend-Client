import React, { useMemo } from "react";
import { Column } from "react-table";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { useGetAllProducts } from "../../services/hooks/Vendor/products";
import moment from "moment";
import { ImSpinner6 } from "react-icons/im";

const StatusColumn = ({ d }: any) => {
  const { approvalStatus } = d;

  let statusClassName = "";
  let formattedStatus = "";

  switch (approvalStatus) {
    case "rejected":
      statusClassName = "text-[#F91919]";
      formattedStatus = "Rejected";
      break;
    case "approved":
      statusClassName = "text-[#22C55E]";
      formattedStatus = "Approved";
      break;
    case "false":
    case "pending":
      statusClassName = "text-[#F29339]";
      formattedStatus = "Pending";
      break;
    default:
      statusClassName = "text-gray-500";
      formattedStatus = "Unknown";
  }

  return (
    <div>
      <span
        className={`text-[14px] font-normal leading-[normal] whitespace-nowrap ${statusClassName}`}
      >
        {formattedStatus}
      </span>
    </div>
  );
};

const QuantityColumn = ({ d }: any) => {
  const { pricing } = d;

  return (
    <div>
      <span className="text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {pricing?.quantity}
      </span>
    </div>
  );
};
const PriceColumn = ({ d }: any) => {
  const { pricing } = d;

  const formattedPrice = pricing?.productPrice?.toLocaleString("en-US"); // Adjust the locale as needed

  return (
    <div>
      <span className="text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        ₦ {formattedPrice}
      </span>
    </div>
  );
};
const ProductNameColumn = ({ d }: any) => {
  const { information } = d;

  return (
    <div className="flex items-center gap-2">
      <span className=" text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {information?.productName}
      </span>
    </div>
  );
};

const DateColumn = ({ d }: any) => {
  const { createdAt } = d;

  const formattedDate = moment(createdAt).format("Do MMMM YYYY");
  return (
    <div>
      <span className="text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {formattedDate}
      </span>
    </div>
  );
};

const SellersProductPage = () => {
  const { data: products, isLoading } = useGetAllProducts();


  const productData = useMemo(() => {
    if (!products?.data) {
      return [];
    }

    const dataCopy = [...products.data];

    dataCopy.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return dataCopy;
  }, [products?.data]);

   if (isLoading || !products?.data) {
     return (
       <div className="flex flex-col  items-center justify-center h-screen bg-[#A2A2A2] ">
         <span className="animate-spin">
           <ImSpinner6 size={30} />
         </span>
         Please wait..
       </div>
     );
   }

  const Tcolumns: readonly Column<object>[] = [
    {
      Header: "Name",
      Cell: (data) => {
        const d = data.row.original;
        return <ProductNameColumn d={d} />;
      },
    },
    {
      Header: "Created",
      Cell: (data) => {
        const d = data?.row.original;

        return <DateColumn d={d} />;
      },
    },
    {
      Header: "Product ID",
      accessor: "_id",
    },
    {
      Header: "Price",
      Cell: (data) => {
        const d = data?.row.original;

        return <PriceColumn d={d} />;
      },
    },
    {
      Header: "Quantity",
      Cell: (data) => {
        const d = data?.row.original;

        return <QuantityColumn d={d} />;
      },
    },

    {
      Header: "Status",

      Cell: (data) => {
        const d = data?.row.original;

        return <StatusColumn d={d} />;
      },
    },
    {
      Header: "Active",
      accessor: "active",
      Cell: ({ row }: any) => {
        return (
          <div>
            <ToggleSwitch />
          </div>
        );
      },
    },
    {
      Header: "Action",
      Cell: ({ row }: any) => (
        <NavLink
          to={`/sellers-dashboard/product/seller-stepper/${row.id}`}
          className="underline"
        >
          Edit
        </NavLink>
      ),
    },
  ];

  return (
    <div className="pb-10 xxs:px-4 md:px-0">
      <div className="">
        <h1 className="md:text-[36px] md:leading-[42px] font-medium mb-3 xxs:text-[20px] xxs:leading-[23px] ">
          Manage Products
        </h1>
        <div className="mb-4 ">
          <span className="text-[14px] leading-[16px] font-normal text-[#A2A2A2] ">
            The product overview where all products are managed.
          </span>
        </div>
      </div>

      <div className="mt-5">
        <AdminTable
          showDropDown={true}
          showCheckbox={true}
          Tcolumns={Tcolumns}
          tabs={["All", "Approved", "Pending", "Rejected Products", "Sold out"]}
          TData={productData}
          placeholder={"Search product name, store names, category.... "}
        />
      </div>
    </div>
  );
};

export default SellersProductPage;
