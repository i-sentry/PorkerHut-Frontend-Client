import moment from "moment";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { ImSpinner6 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import { ToastContainer, toast } from "react-toastify";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { Tooltip } from "../../components/utility/ToolTip";
import {
  useGetProductByVendor,
  useUpdateProductVisibility,
} from "../../services/hooks/Vendor/products";
import { useRefresh } from "../../store";
import { FaStoreSlash } from "react-icons/fa";

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

const ProductNameColumn = ({ d }: any) => {
  const { information, images } = d;

  return (
    <div className="group relative flex cursor-pointer items-center gap-2">
      <span className=" whitespace-nowrap text-[14px] font-normal capitalize leading-[normal] text-[#333333]">
        {information?.productName}
      </span>

      <div className="absolute top-0 -right-10 z-10 h-[100px] w-[100px] overflow-hidden rounded-lg opacity-0 duration-300 group-hover:opacity-100">
        <img
          src={images[0]}
          alt="product thumbnail"
          className="h-full w-full object-cover"
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
      <span className="whitespace-nowrap text-[14px] font-normal leading-[normal] text-[#333333]">
        {formattedDate}
      </span>
    </div>
  );
};

const ProductIDColumn = ({ d }: any) => {
  const { _id: productId } = d;

  return (
    <div className="cursor-pointer">
      <Tooltip message={productId}>{productId.slice(0, 7)}...</Tooltip>
    </div>
  );
};

const SellersProductPage = () => {
  const refresh = useRefresh((state) => state.isRefresh);
  const setRefresh = useRefresh((state) => state.setIsRefresh);
  const navigate = useNavigate();
  //@ts-ignore
  const store = JSON.parse(localStorage.getItem("vendor"));
  const [products, setProducts] = useState<any[]>([]);

  const id = store.vendor._id;
  const {
    data: vendorProducts,
    isLoading,
    refetch,
  } = useGetProductByVendor(id);

  useEffect(() => {
    setRefresh(true);
    if (!isLoading && vendorProducts?.data) {
      const dataCopy = [...vendorProducts?.data];
      dataCopy.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      setProducts(dataCopy);
    } else {
      setProducts([]);
    }
  }, [vendorProducts, refresh, isLoading]);

  useEffect(() => {
    if (refresh === true) refetch();
  }, [refresh]);

  const handleView = (id: any, catId: any) => {
    navigate(
      `/vendor/product/create-product?id=${encodeURIComponent(id)}&catId=${encodeURIComponent(catId)}`,
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
      Header: "Product Status",

      Cell: (data) => {
        const d = data?.row.original;

        return <StatusColumn d={d} />;
      },
    },
    {
      Header: "Visibility Status",
      accessor: (row: any) => {
        return <div className="capitalize">{row?.visibilityStatus}</div>;
      },
    },
    {
      Header: "Active",
      accessor: (row: any) => {
        return (
          <div>
            <ToggleVisibility id={row?._id} row={row} refetch={refetch} />
          </div>
        );
      },
    },
    {
      Header: "Action",
      accessor: (row: any) => {
        const id = row?._id;
        const catId = row?.information?.category?._id;
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
    },
  ];

  return (
    <div className="px-4 pb-10 pt-10">
      <ToastContainer />
      <div className="mb-5">
        <h1 className="mb-3 font-medium xxs:text-[20px] xxs:leading-[23px] md:text-[36px] md:leading-[42px] ">
          Manage Products
        </h1>
        <div className="">
          <span className="text-[14px] font-normal leading-[16px] text-[#A2A2A2] ">
            The product overview where all products are managed.
          </span>
        </div>
      </div>

      <div className="mt-2">
        {isLoading && (
          <div className="flex h-screen  flex-col items-center justify-center bg-[#A2A2A2] ">
            <span className="animate-spin">
              <ImSpinner6 size={30} />
            </span>
            Please wait..
          </div>
        )}

        {!isLoading && products?.length > 0 && (
          <AdminTable
            showDropDown={true}
            showCheckbox={true}
            Tcolumns={Tcolumns}
            tabs={["All", "Approved", "Pending", "Rejected", "Sold"]}
            TData={products}
            placeholder={"Search product name, store names, category.... "}
            statusType={"product"}
          />
        )}

        {!isLoading && products?.length < 1 && (
          <div className="flex items-center justify-center bg-neutral-100 py-10 px-4 text-neutral-500">
            <FaStoreSlash size={32} className="mb-1" />
            No products yet...
          </div>
        )}
      </div>
    </div>
  );
};

export default SellersProductPage;

const ToggleVisibility = ({
  id,
  row,
  refetch,
}: {
  id: string | number;
  row: any;
  refetch?: any;
}) => {
  const [toggle, setToggle] = useState<"active" | "inactive">(
    row?.visibilityStatus,
  );
  // const refresh = useRefresh((state) => state.isRefresh);
  const setRefresh = useRefresh((state) => state.setIsRefresh);

  const [loading, setLoading] = useState(false);
  const update = useUpdateProductVisibility(id);
  const productName = row?.information?.productName
    .split(" ")
    .map((arr: any) => `${arr.slice(0, 1).toUpperCase() + arr.slice(1)}`)
    .join(" ");

  useEffect(() => {
    if (loading) {
      setToggle((toggle: any) => (toggle === "active" ? "inactive" : "active"));
    }
  }, []);

  const toggleVisibility = async () => {
    setLoading(true);

    if (toggle === "active") {
      update
        .mutateAsync({
          visibilityStatus: "inactive",
        })
        .then((res: any) => {
          setLoading(false);
          toast.success(`${productName} is currently set to inactive.`);
          setToggle("inactive");
          refetch();
          setRefresh(true);
        })
        .catch((err: any) => {
          toast.error(
            `${productName} visibility status is not updated. Try again!`,
          );
          setLoading(false);
        });
    }

    if (toggle === "inactive") {
      update
        .mutateAsync({
          visibilityStatus: "active",
        })
        .then((res: any) => {
          setLoading(false);
          toast.success(`${productName} is currently set to active.`);
          setToggle("active");
          refetch();
          setRefresh(true);
        })
        .catch((err: any) => {
          toast.error(
            `${productName} visibility status is not updated. Try again!`,
          );
          setLoading(false);
        });
    }
  };

  return (
    <div className="r">
      {/* Switch Container */}

      <div
        className={`relative w-[100px] rounded-lg  p-2 ${toggle === "active" ? "bg-[#22c55e]" : "bg-[#F91919]"}`}
        onClick={toggleVisibility}
      >
        <div
          className={`absolute top-1/2 h-[1.5rem] w-[40px] -translate-y-1/2 rounded bg-white ${toggle === "active" ? "right-2" : "left-2"}`}
        ></div>
        <div className="flex items-center justify-between gap-5 px-1">
          <span className="font-medium uppercase text-white">
            {loading ? <CgSpinner size={18} className="animate-spin" /> : "On"}
          </span>
          <span className="font-medium uppercase text-white">
            {loading ? <CgSpinner size={18} className="animate-spin" /> : "Off"}
          </span>
        </div>
      </div>
    </div>
  );
};
