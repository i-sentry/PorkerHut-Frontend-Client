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

export type IProps = {
  // id: number;
  name: string;
  create: string;
  product_id: number;
  price: string;
  quantity: number;
  visible: null;
  active: null;
  action: null;
};

export type ITable = {
  tabs: any;
  placeholder: string;
  Tcolumns: readonly Column<object>[];
  optionalColumn: null;
  TData: any;
};

//@ts-ignore
const ManageProductTable = ({
  // optionalColumn,
  tabs,
  Tcolumns,
  TData,
  placeholder,
}: ITable) => {
  const [selectedRows, setSelectedRows] = useState(null);
  const [numOfSelectedRow, setNumOfSelectedRow] = useState(0);
  const [Tdata, setTdata] = useState(TData);
  const columns = useMemo(() => Tcolumns, []);
  const data = useMemo(() => Tdata, [Tdata]);
  const [selectedTab, setSelectedTab] = useState<string>(tabs);
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

        // optionalColumn
        //   ? optionalColumn
        //   : {
        //       id: "view",
        //       // The header can use the table's getToggleAllRowsSelectedProps method
        //       // to render a checkbox
        //       Header: () => <div></div>,
        //       // The cell can use the individual row's getToggleRowSelectedProps method
        //       // to the render a checkbox
        //       Cell: () => <div></div>,
        //     },
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
      setTdata(TData);
    } else {
      setTdata(
        TData.filter(
          (d: { order_status: string }) =>
            d?.order_status?.toLowerCase() === chosenTab.toLowerCase(),
        ),
      );
    }
  }, [chosenTab]);

  return (
    <>
      <div className="tabs flex gap-4   ">
        {tabs.map((tab: string, index: React.Key | null | undefined) => (
          <TabSelector
            key={index}
            className={`relative cursor-pointer bg-transparent p-2  px-4 text-center underline text-[#5c6f7f]${
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
      <div className="my-6  mt-5 flex  w-full items-center justify-between ">
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
            <OrderDropDown />
          </div>
          <div className="cursor-pointer rounded-md bg-[#197B30] px-4 py-1.5 text-[14px] font-semibold leading-[24px] text-[#fff]">
            Go
          </div>
        </div>
        <div className=" flex xxs:justify-center md:justify-end">
          <GlobalFilter
            setFilter={setGlobalFilter}
            filter={globalFilter}
            placeholder={placeholder}
          />
        </div>
      </div>
      <div className="  mb-8 flex flex-col bg-white ">
        <div className="">
          <div className="inline-block min-w-full ">
            <div className="">
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
                              className="text-primary whitespace-nowrap rounded-t-md py-4 px-4 text-left text-sm font-normal"
                              {...column.getHeaderProps(
                                column.getSortByToggleProps(),
                              )}
                              key={column.id}
                            >
                              <div className="flex items-center text-[16px] font-normal leading-[19px] text-[#333333]">
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
                      // prepareRow(row?.subRows);
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
                                  className="border-r py-4 px-4 text-[16px] font-normal leading-[19px] text-[#202223]"
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

export default ManageProductTable;
