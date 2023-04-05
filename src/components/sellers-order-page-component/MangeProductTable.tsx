import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  TableToggleAllRowsSelectedProps,
  Column,
  HeaderProps,
  Hooks,
  useExpanded,
} from "react-table";
import mockData from "../../utils/mockData.json";
import { column } from "../Table/column";
import GlobalFilter from "../../components/Table/GlobalFilter";
import { usePaginationPages } from "../../components/Table/usePaginationPages";
import Pagination from "../../components/Table/Pagination";
import IndeterminateCheckbox from "../../components/Table/IndeterminateCheckBox";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { OrderDropDown } from "../../components/Table/OrderDropDown";

const ManageProductTable = () => {
  const [selectedRows, setSelectedRows] = useState(null);
  const [numOfSelectedRow, setNumOfSelectedRow] = useState(0);
  const columns = useMemo(() => column, []);

   const column: Column<{
    id: number;
    Order_number: string;
    confirmation_date: string;
    updated_price: string;
    price: string;
    quality: number;
    status: string;
  }>[] = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Created",
      accessor: "create",
    },
    {
      Header: "Product ID",
      accessor: "product_id",
     
    },
    {
      Header: "Price",
      accessor: "price",
      
      
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Quality",
      accessor: "quality",
    },
    {
      Header: "Visible",
      accessor: "status" as const,
    },
    {
      Header: "Active",
      accessor: "status" as const,
    },
    {
      Header: "Action",
      cell: ({{{{{{{}}}}}}})
    },
    {
      Header: "Active",
      accessor: "status" as const,
    },
  ];
  

  const data = useMemo(() => mockData, []);
  const table = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,

    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }: any) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }: any) => (
            <div>
              <IndeterminateCheckbox
                {...(row as any).getToggleRowSelectedProps()}
              />
            </div>
          ),
        },
        {
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
          Cell: ({ row }: any) => (
            <div>
              {row.canExpand ? (
                <span
                  className="flex items-center gap-3"
                  {...row.getToggleRowExpandedProps({
                    style: {
                      // We can even use the row.depth property
                      // and paddingLeft to indicate the depth
                      // of the row
                      paddingLeft: `${row.depth * 2}rem`,
                    },
                  })}
                >
                  <span> Details </span>
                  {row.isExpanded ? (
                    <RxCaretDown size={20} />
                  ) : (
                    <RxCaretUp size={20} />
                  )}
                </span>
              ) : null}
            </div>
          ),
        },
        ...columns,
      ]);
    }
  ) as any;
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    state,
    setGlobalFilter,
    selectedFlatRows,
    nextPage,
    gotoPage,
    pageCount,
    setPageSize,
    previousPage,
    pageOptions,
    canNextPage,
    canPreviousPage,
    footerGroups,
  } = table;
  const { globalFilter, pageIndex, pageSize, expanded } = state;

  useEffect(() => {
    var selectedRows = selectedFlatRows.map(
      (d: { original: any }) => d.original
    );

    setSelectedRows(selectedRows);

    setNumOfSelectedRow(selectedFlatRows.length);
  }, [setSelectedRows, setNumOfSelectedRow, selectedFlatRows]);

  return (
    <>
      <div className="flex items-center justify-between  mb-4 w-full ">
        <div className="md:flex items-center gap-3 ml-4 xxs:hidden">
          <div className="flex h-full items-center pl-4 border-r-[1px] border-r-[#D0D5DD]">
            <input
              type="checkbox"
              className="text-primary  accent-[#197B30] text-xs md:text-sm"
              readOnly
              checked={numOfSelectedRow > 0 ? true : false}
            />
            {numOfSelectedRow > 0 && (
              <span className="mx-3 text-slate-400">
                {numOfSelectedRow} Selected
              </span>
            )}
          </div>
          <div className="max-w-xl ">
            <OrderDropDown />
          </div>
          <div className="bg-[#197B30] text-[#fff] px-4 py-2 rounded-md cursor-pointer">
            Go
          </div>
        </div>
<div className=" flex md:justify-end xxs:justify-center">
<GlobalFilter setFilter={setGlobalFilter} filter={globalFilter} />
</div>

      </div>
      <div className="  flex flex-col bg-white mb-8">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table
                {...getTableProps()}
                className="appearance-none bg-white min-w-full  mb-6 "
                id="my-table"
              >
                <thead className="bg-[#F4F4F4] appearance-none ">
                  {headerGroups.map(
                    (headerGroup: {
                      getHeaderGroupProps: () => { [x: string]: any; key: any };
                      headers: any[];
                    }) => {
                      const { key, ...restHeaderProps } =
                        headerGroup.getHeaderGroupProps();
                      return (
                        <tr key={key} {...restHeaderProps}>
                          {headerGroup.headers.map((column) => (
                            <th
                              className="font-normal text-sm text-primary py-4 text-left whitespace-nowrap px-4 border-r"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                              key={column.id}
                            >
                              <div className="flex items-center">
                                {column.render("Header")}

                                {column.canSort === true && (
                                  <span className="ml-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="10"
                                      height="12"
                                      viewBox="0 0 10 18"
                                      fill="none"
                                    >
                                      <path
                                        d="M5.00016 2.83L8.17016 6L9.58016 4.59L5.00016 0L0.410156 4.59L1.83016 6L5.00016 2.83ZM5.00016 15.17L1.83016 12L0.420156 13.41L5.00016 18L9.59016 13.41L8.17016 12L5.00016 15.17Z"
                                        fill="#323232"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </div>
                            </th>
                          ))}
                        </tr>
                      );
                    }
                  )}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="mt-3 pt-3 w-full space-y-8 border-r"
                >
                  {page.map(
                    (row: {
                      subRows: any;
                      getRowProps: () => JSX.IntrinsicAttributes &
                        React.ClassAttributes<HTMLTableRowElement> &
                        React.HTMLAttributes<HTMLTableRowElement>;
                      cells: any[];
                    }) => {
                      prepareRow(row);
                      // console.log(row?.subRows, "sub");
                      // prepareRow(row?.subRows);
                      return (
                        <>
                          <tr
                            {...row.getRowProps()}
                            className="appearance-none my-4 border "
                          >
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className="font-normal text-sm text-[#202223] py-4 px-4 border-r"
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        </>
                      );
                    }
                  )}
                </tbody>
              </table>

              <Pagination
                gotoPage={gotoPage}
                length={data.length}
                pageSize={pageSize}
                setPageSize={setPageSize}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProductTable;