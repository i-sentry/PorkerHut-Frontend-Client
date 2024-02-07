import React, { useMemo } from "react";
import { Column } from "react-table";
import ToggleSwitch from "../../components/toggle-switch/ToggleSwitch";
import { useNavigate } from "react-router-dom";
// import _ from "lodash";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { useGetProductByVendor } from "../../services/hooks/Vendor/products";
import moment from "moment";
import { ImSpinner6 } from "react-icons/im";
import { Tooltip } from "../../components/utility/ToolTip";

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
  const { information, images } = d;
  console.log(images);

  return (
    <div className="group flex items-center gap-2 relative cursor-pointer">
      <span className=" text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {information?.productName}
      </span>

      <div className="w-[100px] h-[100px] overflow-hidden rounded-lg absolute top-0 -right-10 z-10 duration-300 opacity-0 group-hover:opacity-100">
        <img
          src={images[0]}
          alt="product thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const DateColumn = ({ d }: any) => {
  const { createdAt } = d;

  const formattedDate = moment(createdAt).format("DD MMM YYYY");
  return (
    <div>
      <span className="text-[14px] font-normal leading-[normal] whitespace-nowrap text-[#333333]">
        {formattedDate}
      </span>
    </div>
  );
};

const ProductIDColumn = ({ d }: any) => {
  const { _id: productId } = d;

  console.log(productId, d, "pppppp");

  return (
    <div>
      <Tooltip message={productId}>{productId.slice(-7)}</Tooltip>
    </div>
  );
};

// const ActionColumn = ({ d }: any) => {
//   const { _id: productId } = d;
//   console.log(d, "ddddddddddddd");
//   // const catId = row?.original?.information?.category?._id;

//   return (
//     <div onClick={handleView(productId)} className="underline">
//       Edit
//     </div>
//   );
// };

const SellersProductPage = () => {
  const navigate = useNavigate();
  //@ts-ignore
  const store = JSON.parse(localStorage.getItem("vendor"));

  console.log(store.vendor._id, "store");
  const id = store.vendor._id;
  const { data: vendorProducts, isLoading } = useGetProductByVendor(id);

  const productData = useMemo(() => {
    if (!vendorProducts?.data) {
      return [];
    }

    const dataCopy = [...vendorProducts.data];

    dataCopy.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return dataCopy;
  }, [vendorProducts?.data]);

  if (isLoading || !vendorProducts?.data) {
    return (
      <div className="flex flex-col  items-center justify-center h-screen bg-[#A2A2A2] ">
        <span className="animate-spin">
          <ImSpinner6 size={30} />
        </span>
        Please wait..
      </div>
    );
  }

  const handleView = (id: any, catId: any) => {
    navigate(
      `/vendor/create-product?id=${encodeURIComponent(
        id
      )}&catId=${encodeURIComponent(catId)}`,
      {
        replace: true,
      }
    );
  };

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
      // accessor: "_id",
      Cell: (data) => {
        const d = data?.row?.original;

        return <ProductIDColumn d={d} />;
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
