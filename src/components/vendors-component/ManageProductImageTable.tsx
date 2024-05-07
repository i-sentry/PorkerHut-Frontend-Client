import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  Column,
  useExpanded,
} from "react-table";
import Table_Data from "../../utils/json/Table_Data.json";
import GlobalFilter from "../Table/GlobalFilter";
import Pagination from "../Table/Pagination";

const ManageProductTable = () => {
 const columns: Column<any>[] = [
   { Header: "Name", accessor: "name" },
   { Header: "Created", accessor: "create" },
   { Header: "Product ID", accessor: "product_id" },
   {
     Header: "All Images",
     accessor: "active",
     Cell: ({ row }: any) => <img src="" alt="" />,
   },
 ];


  const [, setSelectedRows] = useState(null);
  const [, setNumOfSelectedRow] = useState(0);
  // const columns = useMemo(() => column, [column]);

  const data = useMemo(() => Table_Data, []);
  const table = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
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
    gotoPage,
    setPageSize,
  } = table;
  const { globalFilter, pageSize} = state;

  useEffect(() => {
    var selectedRows = selectedFlatRows.map(
      (d: { original: any }) => d.original
    );

    setSelectedRows(selectedRows);

    setNumOfSelectedRow(selectedFlatRows.length);
  }, [setSelectedRows, setNumOfSelectedRow, selectedFlatRows]);

  return (
    <>
      <div className="  mb-4 w-full ">
        <div className="flex ">


          <div className="flex items-end">
            <GlobalFilter setFilter={setGlobalFilter} filter={globalFilter} />
          </div>
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
                              <div className="flex items-center text-[16px] leading-[19px] font-normal">
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
                                  className="text-[16px] leading-[19px] font-normal text-[#202223] py-4 px-4 border-r"
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
