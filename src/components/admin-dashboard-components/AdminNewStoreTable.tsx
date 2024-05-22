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
import newStoreData from "../../utils/json/newStoreData.json";
import GlobalFilter from "../Table/GlobalFilter";

import Pagination from "../Table/Pagination";
import IndeterminateCheckbox from "../Table/IndeterminateCheckBox";
import { OrderDropDown } from "../Table/OrderDropDown";
import { TabSelector } from "../utility/TabSelector";

export const StatusColumn = ({ data }: { data: string }) => {
  switch (data?.toLowerCase()) {
    case "approved":
      return <span className="  text-[#22C55E] ">Approved</span>;

    case "rejected":
      return <span className=" capitalize  text-[#F91919]">Rejected</span>;

    case "pending":
      return <span className=" capitalize  text-[#F29339]">Pending</span>;
    default:
      return (
        <span className="text-sm font-normal text-[#202223] ">{data}</span>
      );
  }
};

interface IAccountOwner {
  name: string;
  image: string;
}

export type IProps = {
  company_address: string;
  email: string;
  phone: string;
  order: string;
  account_owner: IAccountOwner;
  store_name: string;
  created_a: number;
  status: string;
  name: string;
  image: string;
};

const Tcolumns: readonly Column<object>[] = [
  {
    Header: "Account Owner",
    accessor: "account_owner",
    Cell: ({ value }) => (
      <div className="flex items-center gap-2">
        <img
          src={value?.image}
          alt={value?.name}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="whitespace-normal">{value?.name}</span>
      </div>
    ),
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Company Address",
    accessor: "company_address",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Store Name",
    accessor: "store_name",
  },
  {
    Header: "Created",
    accessor: "created_at",
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
  const [Tdata, setTdata] = useState(newStoreData);
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
    },
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
      setTdata(newStoreData);
    } else {
      setTdata(
        newStoreData.filter(
          (d) => d?.status?.toLowerCase() === chosenTab.toLowerCase(),
        ),
      );
    }
  }, [chosenTab]);

  return (
    <>
      <div className="tabs flex gap-4 pt-5 pb-1  ">
        {tabs.map((tab: string, index: React.Key | null | undefined) => (
          <TabSelector
            key={index}
            className={`relative cursor-pointer bg-transparent p-2  px-2 text-center underline text-[#5c6f7f]${
              selectedTab === tab
                ? " rounded-md border border-[#197B30] text-[#197B30] no-underline shadow-md transition-all duration-100 ease-in-out"
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
      <div className="my-4  flex w-full  items-center justify-between ">
        <div className="ml-4 items-center gap-3 xxs:hidden md:flex">
          <div className="flex h-full items-center border-r-[1px] border-r-[#D0D5DD] pl-4">
            <input
              type="checkbox"
              className="text-primary  text-xs accent-[#197B30] md:text-sm"
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
            {/* <OrderDropDown /> */}
          </div>
          <div className="cursor-pointer rounded-md bg-[#197B30] px-4 py-2 text-[#fff]">
            Go
          </div>
        </div>
        <div className=" flex xxs:justify-center md:justify-end">
          <GlobalFilter
            setFilter={setGlobalFilter}
            filter={globalFilter}
            placeholder={"Search account owner, email address, store name...."}
          />
        </div>
      </div>
      <div className="  mb-8 flex flex-col bg-white">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table
                {...getTableProps()}
                className="mb-6 min-w-full appearance-none  bg-white "
                id="my-table"
              >
                <thead className="appearance-none bg-[#F4F4F4] ">
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
                              className="text-primary whitespace-nowrap rounded-t-md py-4 px-2 text-left text-sm font-normal"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps(),
                              )}
                              key={column.id}
                            >
                              <div className="flex items-center text-[#333333]">
                                {column.render("Header")}
                              </div>
                            </th>
                          ))}
                        </tr>
                      );
                    },
                  )}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="mt-3 w-full space-y-8 border-r pt-3"
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
                      return (
                        <>
                          <tr
                            {...row.getRowProps()}
                            className="my-4 appearance-none border "
                          >
                            {row.cells.map((cell) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className="border-r py-4 px-2 text-sm font-light text-[#202223]"
                                >
                                  {cell.render("Cell")}
                                </td>
                              );
                            })}
                          </tr>
                        </>
                      );
                    },
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
