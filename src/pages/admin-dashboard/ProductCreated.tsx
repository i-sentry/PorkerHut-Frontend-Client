import React, { useMemo } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import { useGetAllProducts } from "../../services/hooks/Vendor/products";
import moment from "moment";
import { capitalizeFirstLetter } from "./ProductDetail";
import { ImSpinner6 } from "react-icons/im";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { divide } from "lodash";
import { Tooltip } from "../../components/utility/ToolTip";

const ProductNameColumn = ({ d }: any) => {
  const { information } = d;

  return (
    <div className="flex items-center gap-2">
      <span className=" whitespace-nowrap text-[14px] font-normal capitalize leading-[normal] text-[#333333]">
        {information?.productName}
      </span>
    </div>
  );
};
const StoreNameColumn = ({ d }: any) => {
  const { vendor } = d;
  const storeName = vendor?.sellerAccountInformation?.shopName;
  return (
    <div className="flex items-center gap-2">
      <span className=" whitespace-nowrap text-[14px] font-normal capitalize leading-[normal] text-[#333333]">
        {storeName}
      </span>
    </div>
  );
};

const CategoryColumn = ({ d }: any) => {
  const category = d.information.category?.name;

  return (
    <div>
      <span className="whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
        {capitalizeFirstLetter(category) || "Not applicable"}
      </span>
    </div>
  );
};
const DateColumn = ({ d }: any) => {
  const { createdAt } = d;

  const formattedDate = moment(createdAt).format("Do MMM YYYY");
  return (
    <div>
      <span className="whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
        {formattedDate}
      </span>
    </div>
  );
};
const QuantityColumn = ({ d }: any) => {
  const { pricing } = d;

  return (
    <div>
      <span className="whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
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
      <span className="whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
        ₦ {formattedPrice}
      </span>
    </div>
  );
};
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
        className={`whitespace-nowrap text-[14px] font-normal leading-[normal] ${statusClassName}`}
      >
        {formattedStatus}
      </span>
    </div>
  );
};

const ProductCreated = () => {
  const navigate = useNavigate();

  const { data: products, isLoading } = useGetAllProducts();

  const productData = useMemo(() => {
    if (!products?.data) {
      return [];
    }

    const dataCopy = [...products.data];

    dataCopy.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return dataCopy;
  }, [products?.data]);

  if (isLoading || !products?.data) {
    return (
      <div className="flex h-screen  flex-col items-center justify-center bg-[#A2A2A2] ">
        <span className="animate-spin">
          <ImSpinner6 size={30} />
        </span>
        Please wait..
      </div>
    );
  }

  const handleView = (id: any, catId: any) => {
    navigate(
      `/admin/products__details?id=${encodeURIComponent(
        id,
      )}&catId=${encodeURIComponent(catId)}`,
      {
        replace: true,
      },
    );
  };

  const Tcolumns: readonly Column<object>[] = [
    {
      Header: "Product Name",
      Cell: (data) => {
        const d = data.row.original;
        return <ProductNameColumn d={d} />;
      },
    },

    {
      Header: "Store Name",
      Cell: (data) => {
        const d = data.row.original;
        return <StoreNameColumn d={d} />;
      },
    },
    {
      Header: "Category",
      Cell: (data) => {
        const d = data?.row.original;

        return <CategoryColumn d={d} />;
      },
    },
    {
      Header: "Product ID",
      accessor: (row: any) => {
        return (
          <div>
            <Tooltip message={row?._id}>{row?._id.slice(0, 10)}...</Tooltip>
          </div>
        );
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
      Header: "Qnty",

      Cell: (data) => {
        const d = data?.row.original;

        return <QuantityColumn d={d} />;
      },
    },
    {
      Header: "Price",

      Cell: (data) => {
        const d = data?.row.original;

        return <PriceColumn d={d} />;
      },
    },
    {
      Header: "Status",

      Cell: (data) => {
        const d = data?.row.original;

        return <StatusColumn d={d} />;
      },
    },
  ];

  const optionalColumn = {
    id: "expand",
    Header: (
      <div>
        {/* <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} /> */}
      </div>
    ),
    Cell: ({ row }: any) => {
      const id = row?.original?._id;
      const catId = row?.original?.information?.category?._id;

      return (
        <div>
          <span
            onClick={() => handleView(id, catId)}
            className="flex cursor-pointer items-center gap-3 text-sm text-[#333333] underline transition-all ease-in-out hover:text-[#0eb683] active:scale-90 "
          >
            View
          </span>
        </div>
      );
    },
  };

  return (
    <div className="py-6 pl-8 pr-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Product Created</h1>
        <span className="text-sm font-normal text-[#A2A2A2]">
          Find all created product here for approval.
        </span>
      </div>
      <div className="">
        <AdminTable
          Tcolumns={Tcolumns}
          optionalColumn={optionalColumn}
          tabs={["All", "Pending", "Approved", "Rejected"]}
          TData={productData}
          placeholder={"Search product name, store names, category.... "}
          showIcon={true}
          showCheckbox={true}
          showDropDown={true}
          statusType="product"
        />
      </div>
    </div>
  );
};

export default ProductCreated;
