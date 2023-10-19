import _ from "lodash";
import { Column } from "react-table";
import { useShowModal } from "../../store/overlay";
const moment = require("moment");

export const column: Column<{
  Order_number: string;
  confirmation_date: string;
  updated_price: string;
  price: string;
  quality: number;
  status: string;
}>[] = [
  {
    Header: "Order Number",
    accessor: "Order_number",
  },
  {
    Header: "Confirmation Date",
    accessor: "confirmation_date",
    Cell: ({ value }) => {
      const myDate = new Date(value);
      const formatDate = moment(myDate);
      const Cdate = formatDate.format("MMMM Do YYYY");
      return Cdate;
    },
  },
  {
    Header: "Update Price",
    accessor: "updated_price",
    Cell: ({ value }) => {
      const myDate = new Date(value);
      const formatDate = moment(myDate);
      const Tdate = formatDate.format("MMMM Do YYYY");
      return Tdate;
    },
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Quality",
    accessor: "quality",
  },
  {
    Header: "Status",
    accessor: "status" as const,
  },
  {
    Header: "View more",
    Cell: ({ row }: any) => {
      const toggleOpenModal = useShowModal((state) => state.toggleOpenModal);
      return (
        <span
          onClick={() => toggleOpenModal(true)}
          className="hover:underline hover:text-[#0eb6683] cursor-pointer"
        >
          View 
        </span>
      );
    },
  },
];

interface INestedStatement {
  location: string;
  productName: string;
}

export const Statementcolumn: Column<{
  productName: INestedStatement;
  confirmation_date: string;
  deliverydate: string;
  id: string;
  product: INestedStatement;
  price: number;
  change: string;
  payout: string;
  status: string;
}>[] = [
  {
    Header: "product Name",
    accessor: (data) => data.product.productName,
    Cell: (props: any) => <ProductNameColumn data={props} />,
  },
  {
    Header: "Delivered to",
    accessor: (data) => data.product.location,
  },
  {
    Header: "Delivered Date",
    accessor: "deliverydate",
    // Cell: ({ value }) => {
    //   const myDate = new Date(value);
    //   const formatDate = moment(myDate);
    //   const Tdate = formatDate.format("MMMM Do YYYY");
    //   return Tdate;
    // },
  },
  {
    Header: "Product ID",
    accessor: "id",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Charges",
    accessor: "change" as const,
  },
  {
    Header: "Status",
    accessor: "status" as const,
    Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];

export const StatusColumn = ({ data }: { data: string }) => {
  return (
    <div className="flex items-center gap-1 ">
      <div
        className={`h-2 w-2 ${
          data === "unpaid" ? "bg-[#F29339]" : "bg-[#22C55E]"
        } rounded-full`}
      ></div>
      <p>{data}</p>
    </div>
  );
};

export const ProductNameColumn = ({ data }: any) => {
  console.log(data?.row?.original?.img, "data");
  const adata = data?.cell?.row?.original?.product?.productName;
  const lowerData = adata?.toLowerCase();
  console.log(data?.cell?.row?.original?.product?.productName);
  const productName = _.startCase(lowerData);
  return (
    <div className="flex items-center gap-2">
      <span className="font-light text-sm whitespace-nowrap  text-[#333333]">
        {productName}
      </span>
    </div>
  );
};
