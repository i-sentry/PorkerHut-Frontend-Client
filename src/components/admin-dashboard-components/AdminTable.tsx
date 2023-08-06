import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useExpanded,
  Column,
} from "react-table";
import GlobalFilter from "../Table/GlobalFilter";
import Pagination from "../Table/Pagination";
import IndeterminateCheckbox from "../Table/IndeterminateCheckBox";
import { OrderDropDown } from "../Table/OrderDropDown";
import { TabSelector } from "../utility/TabSelector";

export type ITable = {
  tabs: any;
  placeholder: string;
  Tcolumns: readonly Column<object>[];
  optionalColumn?: Column<object>; // Make optionalColumn prop optional
  TData: any;
  sortButton?: React.ReactNode;
  showIcon?: boolean;
  showCheckbox?: boolean;
  showDropDown?: boolean;
};

//@ts-ignore
const AdminTable = ({
  optionalColumn,
  tabs,
  Tcolumns,
  TData,
  placeholder,
  sortButton,
  showIcon,
  showCheckbox,
  showDropDown,
}: ITable) => {
  const [selectedRows, setSelectedRows] = useState(null);
  const [numOfSelectedRow, setNumOfSelectedRow] = useState(0);
  const [Tdata, setTdata] = useState(TData);
  const columns = useMemo(() => Tcolumns, []);
  const data = useMemo(() => Tdata, [Tdata]);
  const [selectedTab, setSelectedTab] = useState<string>(tabs);
  const [chosenTab, setChosenTab] = useState("All");

  const tableColumns = useMemo(() => {
    const columns = [
      ...(showCheckbox
        ? [
            {
              id: "selection",
              Header: ({ getToggleAllPageRowsSelectedProps }: any) => (
                <div>
                  <IndeterminateCheckbox
                    {...getToggleAllPageRowsSelectedProps()}
                  />
                </div>
              ),
              Cell: ({ row }: any) => (
                <div>
                  <IndeterminateCheckbox
                    {...(row as any).getToggleRowSelectedProps()}
                  />
                </div>
              ),
            },
          ]
        : []),
      ...Tcolumns,
    ];

    if (optionalColumn) {
      columns.push(optionalColumn);
    }

    return columns;
  }, [Tcolumns, optionalColumn, showCheckbox]);

  const table = useTable(
    {
      columns: tableColumns,
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
    if (chosenTab === "All") {
      setTdata(TData);
    } else {
      setTdata(
        TData.filter(
          (d: { order_status: string }) =>
            d?.order_status?.toLowerCase() === chosenTab.toLowerCase()
        )
      );
    }
  }, [chosenTab]);

  return (
    <>
      <div className="flex gap-4 w-full overflow-x-scroll xxs:py-4 md:py-0">
        {tabs.map((tab: string, index: React.Key | null | undefined) => (
          <TabSelector
            key={index}
            className={`cursor-pointer relative underline bg-transparent text-center p-2 px-4 text-[#5c6f7f] ${
              selectedTab === tab
                ? "text-[#197B30] no-underline border border-[#197B30] rounded-md shadow-md transition-all ease-in-out duration-100"
                : ""
            }`}
            isActive={selectedTab === tab}
            onClick={() => {
              setSelectedTab(tab);
              setChosenTab(tab);
            }}
          >
            {tab}
          </TabSelector>
        ))}
      </div>

      <div
        className={`md:flex  items-center ${
          showDropDown ? "justify-between" : "justify-end"
        }  mt-5 my-6 w-full `}
      >
        {showDropDown && (
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
            <div className="bg-[#197B30] text-[#fff] px-4 py-1.5 text-sm rounded-md cursor-pointer">
              Go
            </div>
          </div>
        )}
        <div className=" md:flex md:justify-end xxs:block">
          <GlobalFilter
            setFilter={setGlobalFilter}
            filter={globalFilter}
            placeholder={placeholder}
          />
        </div>
      </div>
      <div className="  flex flex-col bg-white mb-8 ">
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
                              className=" font-normal text-sm text-primary py-4 text-left whitespace-nowrap px-4 rounded-t-md"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                              key={column.id}
                            >
                              <div className="flex items-center">
                                <span className="flex items-center text-[#333333] text-[16px] leading-[19px] font-normal">
                                  {" "}
                                  {column.render("Header")}
                                </span>

                                {showIcon && (
                                  <>
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
                                  </>
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
                                  className="font-light text-sm  leading-[19px]  text-[#202223] py-4 text-center px-4 whitespace-nowrap border-r"
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

export default AdminTable;
