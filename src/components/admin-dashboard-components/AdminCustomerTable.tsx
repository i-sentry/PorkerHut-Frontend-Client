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
import customerMockData from "../../utils/customerMockData.json";
import { column } from "../Table/column";
import GlobalFilter from "../Table/GlobalFilter";
import { usePaginationPages } from "../Table/usePaginationPages";
import Pagination from "../Table/Pagination";
import IndeterminateCheckbox from "../Table/IndeterminateCheckBox";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { OrderDropDown } from "../Table/OrderDropDown";
import { TabSelector } from "../utility/TabSelector";

export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "active":
      return <span className="  text-[#22C55E] ">Active</span>;

    case "inactive":
      return <span className=" text-[#F91919]  capitalize">inactive</span>;
    default:
      return (
        <span className="font-normal text-sm text-[#202223] ">{data}</span>
      );
  }
};

export type IProps = {
  name: string;
  email: string;
  phone_number: string;
  order: string;
  amount_spent: string;
  account_id: number;
  status: string;
};

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "phone_number",
  },
  {
    Header: "Order",
    accessor: "order",
  },
  {
    Header: "Amount Spent",
    accessor: "amount_spent",
  },
  {
    Header: "Account ID",
    accessor: "account_id",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ cell: { value } }: any) => <StatusColumn data={value} />,
  },
];
//@ts-ignore
const AdminCustomerTable = ({ optionalColumn = null, tabs }) => {
  const [selectedRows, setSelectedRows] = useState(null);
  const [numOfSelectedRow, setNumOfSelectedRow] = useState(0);
  const [Tdata, setTdata] = useState(customerMockData);
  const columns = useMemo(() => Tcolumns, []);
  const data = useMemo(() => Tdata, [Tdata]);
  const [selectedTab, setSelectedTab] = useState(tabs);
  const [chosenTab, setChosenTab] = useState("All");
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

        ...columns,
        optionalColumn
          ? optionalColumn
          : {
              id: "view",
              // The header can use the table's getToggleAllRowsSelectedProps method
              // to render a checkbox
              Header: () => <div></div>,
              // The cell can use the individual row's getToggleRowSelectedProps method
              // to the render a checkbox
              Cell: () => <div></div>,
            },
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
    if (chosenTab === "All") {
      setTdata(customerMockData);
    } else {
      setTdata(
        customerMockData.filter(
          (d) => d?.status?.toLowerCase() === chosenTab.toLowerCase()
        )
      );
    }
  }, [chosenTab]);

  return (
    <>
      <div className="tabs flex gap-4 pt-5 pb-1  ">
        {tabs.map((tab: string, index: React.Key | null | undefined) => (
          <TabSelector
            key={index}
            className={`cursor-pointer relative underline bg-transparent  text-center p-2 px-4 text-[#5c6f7f]${
              selectedTab === tab 
                ? " text-[#197B30] no-underline border border-[#197B30] rounded-md shadow-md transition-all ease-in-out duration-100"
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
      <div className="flex  items-center justify-between  my-4 w-full ">
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
          <GlobalFilter
            setFilter={setGlobalFilter}
            filter={globalFilter}
            placeholder={"Search name, email, account ID.... "}
          />
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
                              className="font-normal text-sm text-primary py-4 text-left whitespace-nowrap px-4 rounded-t-md"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps()
                              )}
                              key={column.id}
                            >
                              <div className="flex items-center text-[#333333]">
                                {column.render("Header")}

                                {/* {column.canSort === true && (
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
                                )} */}
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
                                  className="font-light text-sm text-[#202223] py-4 px-4 border-r"
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

export default AdminCustomerTable;
