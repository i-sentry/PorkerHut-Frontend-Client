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
import { useUpdateOrderStatus } from "../../services/hooks/orders";
import axios from "axios";

export type ITable = {
  tabs: any;
  placeholder: string;
  Tcolumns: readonly Column<object>[];
  optionalColumn?: Column<object>;
  TData: any;
  sortButton?: React.ReactNode;
  showIcon?: boolean;
  showCheckbox?: boolean;
  showDropDown?: boolean;
  dropDownOption?: any[];
  statusType?: string;
  nextpage?: () => void;
  prevPage?: () => void;
};

type SelectOption = {
  value: string;
  label: string;
  // Add any other properties you need
};

//@ts-ignore
const AdminTable = ({
  optionalColumn,
  tabs,
  Tcolumns,
  TData,
  placeholder,
  // sortButton,
  showIcon,
  showCheckbox,
  showDropDown,
  dropDownOption,
  statusType,
  nextpage,
  prevPage,
}: ITable) => {
  const [numOfSelectedRow] = useState(0);
  const [Tdata, setTdata] = useState(TData);
  const data = useMemo(() => Tdata, [Tdata]);
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  const [chosenTab, setChosenTab] = useState(tabs[0]);
  const [selectedOption, setSelectedOption] = useState<SelectOption>();
  const [selectedRow, setSelectedRow] = useState<any>();

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
    useRowSelect,
  ) as any;

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    state,
    setGlobalFilter,
    gotoPage,
    setPageSize,
    selectedFlatRows,
  } = table;
  // const updateOrderStatus = useUpdateOrderStatus();

  const { globalFilter, pageSize } = state;

  useEffect(() => {
    if (selectedFlatRows.length > 0) {
      console.log("Selected row:", selectedFlatRows[0]);
      // setSelectedRow();
      // You can perform any action with the selected row here
    }
  }, [selectedFlatRows]);

  // useEffect(() => {
  //   if (selectedRowIds.length > 1) {
  //     setSelectedRowIds([]);
  //   }
  // }, [selectedRowIds, setSelectedRowIds]);

  const handleOrderChange = (option: SelectOption) => {
    setSelectedOption(option);
    // You can perform any action with the selected option here
  };
  // console.log("Selected order option:", selectedOption);
  // console.log(selectedRowIds[0]);

  useEffect(() => {
    if (chosenTab === tabs[0]) {
      setTdata(TData);
    } else {
      if (statusType === "product") {
        setTdata(
          TData.filter(
            (d: { approvalStatus: string }) =>
              d?.approvalStatus?.toLowerCase() === chosenTab.toLowerCase(),
          ),
        );
      } else if (statusType === "store") {
        setTdata(
          TData.filter(
            (d: { storeStatus: string }) =>
              d?.storeStatus?.toLowerCase() === chosenTab.toLowerCase(),
          ),
        );
      } else if (statusType === "order") {
        setTdata(
          TData.filter(
            (d: { status: string }) =>
              d?.status?.toLowerCase() === chosenTab.toLowerCase(),
          ),
        );
      } else {
        setTdata(
          TData.filter(
            (d: { status: string }) =>
              d?.status?.toLowerCase() === chosenTab.toLowerCase(),
          ),
        );
      }
    }
  }, [chosenTab, TData, tabs]);

  const handleOrderStatus = async (orderId: string, status: string) => {
    try {
      const response = await axios.put(`api/orders/${orderId}/status`, {
        status: status,
      });
      console.log("Payment status updated successfully:", response.data);
    } catch (error: any) {
      console.error("Error updating payment status:", error.message);
    }
  };

  const handleOrders = (value: string, orderId: string) => {
    switch (value.toLowerCase()) {
      case "set_to_ready_to_go":
        handleOrderStatus(orderId, "ready to go");
        break;
      case "complete_order":
        handleOrderStatus(orderId, "completed");
        break;
      case "decline_order":
        handleOrderStatus(orderId, "failed");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="hide-scrollbar flex w-full gap-2 overflow-x-scroll xxs:py-4 md:py-0">
        {tabs.map((tab: string, index: React.Key | null | undefined) => (
          <TabSelector
            key={index}
            className={`relative cursor-pointer bg-transparent px-4 text-center text-[#5c6f7f] underline ${
              selectedTab === tab
                ? "rounded-md border border-[#197B30] text-[#197B30] no-underline shadow-md transition-all duration-100 ease-in-out"
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
        className={`items-center gap-7 md:flex ${
          showDropDown ? "justify-between" : "justify-end"
        }  my-6 mt-5 w-full `}
      >
        {showDropDown && (
          <div className="items-center gap-3 xxs:hidden md:flex">
            <div className="flex h-full items-center border-r-[1px] border-r-[#D0D5DD]">
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
              <OrderDropDown
                options={dropDownOption}
                onChange={handleOrderChange}
              />
            </div>
            <div
              // onClick={handleOrders(selectedOption?.value)}
              className="cursor-pointer rounded-md bg-[#197B30] px-4 py-1.5 text-sm text-[#fff]"
            >
              Go
            </div>
          </div>
        )}
        <div className=" xxs:block md:flex md:w-[350px] md:justify-end">
          <GlobalFilter
            setFilter={setGlobalFilter}
            filter={globalFilter}
            placeholder={placeholder}
          />
        </div>
      </div>
      <div className="mb-8 flex flex-col bg-white ">
        <div className="hide-scroll-bar overflow-x-auto">
          <div className="block w-full">
            <div className="">
              <table
                {...getTableProps()}
                className="mb-6 min-w-full appearance-none rounded-lg border border-gray-300 bg-white"
              >
                <thead className="bg-[#F4F4F4]">
                  {headerGroups.map(
                    (headerGroup: {
                      getHeaderGroupProps: () => { [x: string]: any; key: any };
                      headers: any[];
                    }) => {
                      const { key, ...restHeaderProps } =
                        headerGroup.getHeaderGroupProps();
                      return (
                        <tr key={key} {...restHeaderProps}>
                          {headerGroup.headers.map(
                            (column: {
                              getHeaderProps: (
                                arg0: any,
                              ) => JSX.IntrinsicAttributes &
                                React.ClassAttributes<HTMLTableHeaderCellElement> &
                                React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
                              getSortByToggleProps: () => any;
                              id: React.Key | null | undefined;
                              render: (
                                arg0: string,
                              ) =>
                                | string
                                | number
                                | boolean
                                | React.ReactFragment
                                | React.ReactElement<
                                    any,
                                    string | React.JSXElementConstructor<any>
                                  >
                                | React.ReactPortal
                                | null
                                | undefined;
                              canSort: boolean;
                            }) => (
                              <th
                                className="text-primary whitespace-nowrap rounded-t-md py-4 px-4 text-left text-sm font-normal"
                                {...column.getHeaderProps(
                                  column.getSortByToggleProps(),
                                )}
                                key={column.id}
                              >
                                <div className="flex items-center">
                                  <span className="flex items-center text-[16px] font-normal leading-[19px] text-[#333333]">
                                    {column.render("Header")}
                                  </span>
                                  {showIcon && column.canSort === true && (
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
                            ),
                          )}
                        </tr>
                      );
                    },
                  )}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="mt-3 w-full space-y-8 pt-3"
                >
                  {page.map(
                    (row: {
                      getRowProps: () => JSX.IntrinsicAttributes &
                        React.ClassAttributes<HTMLTableRowElement> &
                        React.HTMLAttributes<HTMLTableRowElement>;
                      cells: any[];
                    }) => {
                      prepareRow(row);
                      return (
                        <tr
                          {...row.getRowProps()}
                          className="border-t border-gray-300 hover:bg-green-100"
                        >
                          {row.cells.map(
                            (
                              cell: {
                                getCellProps: () => JSX.IntrinsicAttributes &
                                  React.ClassAttributes<HTMLTableDataCellElement> &
                                  React.TdHTMLAttributes<HTMLTableDataCellElement>;
                                render: (
                                  arg0: string,
                                ) =>
                                  | string
                                  | number
                                  | boolean
                                  | React.ReactFragment
                                  | React.ReactElement<
                                      any,
                                      string | React.JSXElementConstructor<any>
                                    >
                                  | React.ReactPortal
                                  | null
                                  | undefined;
                              },
                              index: number,
                            ) => (
                              <td
                                {...cell.getCellProps()}
                                className="whitespace-nowrap py-4 px-4 text-left text-sm font-light leading-[19px] text-[#202223]"
                              >
                                {cell.render("Cell")}
                              </td>
                            ),
                          )}
                        </tr>
                      );
                    },
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          gotoPage={gotoPage}
          length={data.length}
          pageSize={pageSize}
          setPageSize={setPageSize}
          nextpage={nextpage}
          prevPage={prevPage}
        />
      </div>
    </>
  );
};

export default AdminTable;
