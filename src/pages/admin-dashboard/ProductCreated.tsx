import React, { useMemo } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import { useGetAllProducts } from "../../services/hooks/Vendor/products";
import moment from "moment";
import { capitalizeFirstLetter } from "./ProductDetail";
import { ImSpinner6 } from "react-icons/im";

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
const StoreNameColumn = ({ d }: any) => {
  const { vendor } = d;
  const storeName = vendor?.sellerAccountInformation?.shopName;
  return (
    <div className="flex items-center gap-2">
      <span className=" text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {storeName}
      </span>
    </div>
  );
};

const CategoryColumn = ({ d }: any) => {
  console.log(d, "category");
  const category = d.information.category?.name;

  return (
    <div>
      <span className="text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {capitalizeFirstLetter(category) || ""}
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

  console.log({ productData });

  const handleView = (id: any, catId: any) => {
    navigate(
      `/admin/products__details?id=${encodeURIComponent(
        id
      )}&catId=${encodeURIComponent(catId)}`,
      {
        replace: true,
      }
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
      accessor: "_id",
    },
    {
      Header: "Created",
      Cell: (data) => {
        const d = data?.row.original;

        return <DateColumn d={d} />;
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
            className="flex items-center gap-3 text-sm underline text-[#333333] active:scale-90 transition-all ease-in-out cursor-pointer hover:text-[#0eb683] "
          >
            View
          </span>
        </div>
      );
    },
  };

  return (
    <div className="pl-10 pt-10 pr-5">
      <div className="mb-10">
        <h1 className="text-[36px] font-semibold leading-normal ">
          Product Created
        </h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
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
        />
      </div>
    </div>
  );
};

export default ProductCreated;
