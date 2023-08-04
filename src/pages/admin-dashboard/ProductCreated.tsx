import React, { useState } from "react";
import AdminTable from "../../components/admin-dashboard-components/AdminTable";
import { useNavigate } from "react-router-dom";
import { Column } from "react-table";
import _ from "lodash";
import { useGetAllProducts } from "../../services/hooks/Vendor/products";
import { format } from "date-fns"
import productAvatar from "../../assets/products/liver.png"

type RowProps = {
  productName: string;
  images: [],
  category: string;
  location: string;
  price: number;
  status: boolean;
  title: string;
  weight: number;
}

export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "approved":
      return <span className="text-[#22C55E]">Approved</span>;

    case "rejected":
      return <span className=" text-[#F91919]">Rejected</span>;
    case "pending":
      return <span className=" text-[#F29339]">Pending</span>;
    default:
      return (
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
      );
  }
};

const ProductNameColumn = ({ d }: any) => {
  const { productName, images } = d;

  return (
    <div className="flex items-center gap-2">
      {images && images.length ? (
        <figure className="h-9 w-9 rounded-full border">
          <img
            src={images[0]}
            alt="product"
            className="rounded-full object-cover w-full h-full"
          />
        </figure>
      ) : (
        <figure className="h-9 w-9 rounded-full border">
          <img
            src={productAvatar}
            alt="avatar"
            className="rounded-full object-cover w-full h-full"
          />
        </figure>
      )}
      <span className="font-light text-sm whitespace-nowrap text-[#333333]">
        {productName}
      </span>
    </div>
  );
};



const ProductCreated = () => {

  const navigate = useNavigate();

  const { data: products, isLoading } = useGetAllProducts();

  if (isLoading || !products?.data) {

    return <div>Loading...</div>;
  }

  console.log(products);


  const handleView = (id: any) => {
    navigate(`/admin/products/${id}`, {
      replace: true,
    });
    window.location.reload();
  };

  const Tcolumns: readonly Column<object>[] = [
    {
      Header: "Product Name",
      Cell: (data) => {
        const d = data.row.original
        return <ProductNameColumn d={d} />
      }
    },

    {
      Header: "Store Name",
      accessor: "title",
    },
    {
      Header: "Category",
      accessor: "category",
    },
    {
      Header: "Product ID",
      accessor: "id",
    },
    {
      Header: "Created",
      accessor: "location",
    },
    {
      Header: "Quantity",
      accessor: "weight",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
    },
  ];
  const tableData = products.data.map((product: any) => ({
    productName: product.information.productName,
    title: product.details.storeName,
    category: product.category,
    id: product._id,
    location: format(new Date(product.createdAt), "dd-MM-yy"),
    weight: product.details.productWeight,
    price: product.pricing.productPrice,
    status: product.approvalStatus ? "Approved" : "Pending",
    images: product.images,
  }));

  const optionalColumn = {
    id: "expand",
    // The header can use the table's getToggleAllRowsSelectedProps method
    // to render a checkbox
    Header: (
      <div>
        {/* <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} /> */}
      </div>
    ),
    // The cell can use the individual row's getToggleRowSelectedProps method
    // to the render a checkbox
    Cell: ({ row }: any) => {

      return (
        <div>
          <span
            onClick={() => handleView(row?.original?.id)}
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
      <div className="mb-5">
        <h1 className="text-2xl font-medium ">Product Created</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          Find all created product here for approval.
        </span>
      </div>
      <div>
        <AdminTable
          Tcolumns={Tcolumns}
          // @ts-ignore
          optionalColumn={optionalColumn}
          tabs={["All", "Pending", "Approved", "Rejected"]}
          TData={tableData}
          placeholder={"Search product name, store names, category.... "}
        />
      </div>
    </div>
  );
};

export default ProductCreated;
