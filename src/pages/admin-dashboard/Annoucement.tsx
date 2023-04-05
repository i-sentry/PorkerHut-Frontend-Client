import { AiOutlineSound } from "react-icons/ai";


import Modal from "../../components/announcement-component/Modal";
import Select from "react-select";
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
// import mockData from "../../utils/mockData.json";
import { announcementData } from "../../utils/announcementData";
// import { column } from "../../components/Table/column";
import GlobalFilter from "../../components/Table/GlobalFilter";
import { usePaginationPages } from "../../components/Table/usePaginationPages";
import Pagination from "../../components/Table/Pagination";
import IndeterminateCheckbox from "../../components/Table/IndeterminateCheckBox";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { OrderDropDown } from "../../components/Table/OrderDropDown";
import RowModal from "../../components/announcement-component/RowModal";

interface SelectOption {
  value: string;
  label: string;
}

interface RowData {
  id: number;
  subject: string;
  content: string;
  date: string;
}



const Annoucement = () => {
  const [selectedRows, setSelectedRows] = useState(null);
  const [numOfSelectedRow, setNumOfSelectedRow] = useState(0);
  const [showModal, setShowModal] = useState(false);

  

  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
  const [rowData, setRowData] = useState<RowData[]>(announcementData);
  const [showRowModal, setShowRowModal] = useState(false);

  const handleRowClick = (rowData: RowData) => {
    setSelectedRow(rowData);
    setShowModal(true);
  };

  const column: Column<{
    id: number;
    content: string;
    subject: string;
    date: string;
  }>[] = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Subject",
      accessor: "subject",
    },
    {
      Header: "Content",
      accessor: "content",
  
      Cell: ({ value, row }: any) => {
        const handleClick = (row: any) => {
          setSelectedRow(row.original);
          setShowRowModal(true);
          console.log("do something")
        };
        
        return (
          <div>
            {value?.length > 40 ? (
              <span onClick={()=> handleClick(row)} className="hover:cursor-pointer">
                {value.substring(0, 40) + "..."}
              </span>
            ) : (
              <span>{value}</span>
            )}
          </div>
        );
      },
    },
    {
      Header: "Date",
      accessor: "date",
     
    },
  ];



  const options: SelectOption[] = [
    {
      value: "please_select_an_action",
      label: "Please select an action",
    },
    { value: "set_to_timer", label: "Set to Timer" },
    { value: "stop_timer", label: "Stop Timer" },
    { value: "delete", label: "Delete" },
  ];


  const columns = useMemo(() => column, []);

  const data = useMemo(() => announcementData, []);
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


  return (
    <div className="ml-10 mr-4 mt-4 mb-8">
      <div className="mb-2">
        <h1 className="text-xl font-medium ">Announcement</h1>
        <span className="text-[#A2A2A2] font-normal text-sm">
          This is where send out special announcement to all affiliate.
        </span>
      </div>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />

      <div>
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
                <Select<SelectOption>
                  defaultValue={options?.[0]}
                  options={options}
                  className="w-full text-sm font-light bg-amber-600 rounded-md"
                />
              </div>
              <div className="bg-[#197B30] text-[#fff] px-4 py-2 rounded-md cursor-pointer">
                Go
              </div>
            </div>
            <div className=" flex md:justify-end xxs:justify-center">
              <div className="flex items-center justify-between">
                <div
                  onClick={() => setShowModal(true)}
                  className="py-2 flex items-center justify-center gap-2 border-2 border-[#197B30] w-28 rounded-md text-[#197b30] cursor-pointer "
                >
                  <AiOutlineSound />
                  <button>Create</button>
                </div>
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
                          getHeaderGroupProps: () => {
                            [x: string]: any;
                            key: any;
                          };
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
                                      className=" text-sm text-[#202223] py-4 px-4 border-r"
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
                  {selectedRow && (
                    <RowModal
                      id={selectedRow.id}
                      subject={selectedRow.subject}
                      content={selectedRow.content}
                      date={selectedRow.date}
                      isVisib={showRowModal}
                      CloseModal={() => setShowRowModal(false)} show={false}  />
                  )}

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
      </div>
    </div>
  );
};

export default Annoucement;


