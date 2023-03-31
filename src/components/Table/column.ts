import { Column } from "react-table";
const moment = require("moment");

export const column: Column<{
  id: number;
  Order_number: string;
  confirmation_date: string;
  updated_price: string;
  price: string;
  quality: number;
  status: string;
}>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
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
];
