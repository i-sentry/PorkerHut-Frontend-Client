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
  Column,
  useExpanded,
} from "react-table";
// import mockData from "../../utils/mockData.json";
import { announcementData } from "../../utils/announcementData";
import IndeterminateCheckbox from "../../components/Table/IndeterminateCheckBox";
import RowModal from "../../components/announcement-component/RowModal";
import CustomPagination from "../../components/Table/CustomPagination";
import {
  useCreateAnnoucement,
  useGetAllAnnoucement,
} from "../../services/hooks/Vendor";
import { ToastContainer } from "react-toastify";
import logo from "../../assets/images/porkerlogo.png";

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

const Announcement = () => {
  // const [selectedRows, setSelectedRows] = useState(null);
  const [numOfSelectedRow] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);
  const [showRowModal, setShowRowModal] = useState(false);

  const { data: annouce, isLoading } = useGetAllAnnoucement();
  console.log(annouce, "announce");

  // const handleRowClick = (rowData: RowData) => {
  //   setSelectedRow(rowData);
  //   setShowModal(true);
  // };

  // const column: Column<{
  //   content: string;
  //   subject: string;
  //   date: string;
  // }>[] = [
  //   {
  //     Header: "Subject",
  //     accessor: "subject",
  //   },
  //   {
  //     Header: "Content",
  //     accessor: "content",

  //     Cell: ({ value, row }: any) => {
  //       const handleClick = (row: any) => {
  //         setSelectedRow(row.original);
  //         setShowRowModal(true);
  //         console.log("do something");
  //       };

  //       return (
  //         <div>
  //           {value?.length > 40 ? (
  //             <span
  //               onClick={() => handleClick(row)}
  //               className="hover:cursor-pointer  hover:underline text-[#197b30]"
  //             >
  //               {value.substring(0, 150) + "..."}
  //             </span>
  //           ) : (
  //             <span className="hover:cursor-pointer text-[#197B30] hover:underline">
  //               {value}
  //             </span>
  //           )}
  //         </div>
  //       );
  //     },
  //   },
  //   {
  //     Header: "Date",
  //     accessor: "date",
  //   },
  // ];

  const columns: Column<{
    id: number;
    subject: string;
    content: string;
    date: string;
  }>[] = useMemo(
    () => [
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
            console.log("do something");
          };

          return (
            <div>
              {value?.length > 40 ? (
                <span
                  onClick={() => handleClick(row)}
                  className="text-[#197b30] hover:cursor-pointer hover:underline"
                >
                  {value.substring(0, 150) + " ..."}
                </span>
              ) : (
                <span className="text-[#197B30] hover:cursor-pointer hover:underline">
                  {value}
                </span>
              )}
            </div>
          );
        },
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    [],
  );

  const options: SelectOption[] = [
    {
      value: "please_select_an_action",
      label: "Please select an action",
    },
    { value: "set_to_timer", label: "Set to Timer" },
    { value: "stop_timer", label: "Stop Timer" },
    { value: "delete", label: "Delete" },
  ];

  // const columns = useMemo(() => column, [column]);

  const data = useMemo(
    () => (isLoading ? [] : annouce?.data?.data),
    [isLoading, annouce?.data?.data],
  );
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
    gotoPage,
    pageCount,
    setPageSize,
    pageOptions,
  } = table;
  const { pageIndex, pageSize } = state;

  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="py-6 pl-8 pr-5">
      <div className="mt-5">
        <ToastContainer />
        <h1 className="text-2xl font-medium ">Announcement</h1>
        <span className="text-sm font-light text-[#A2A2A2]">
          This is where send out special announcement to all affiliate.
        </span>
      </div>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />

      <div>
        <>
          <div className="my-5 flex w-full  items-center justify-between ">
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
                <Select<SelectOption>
                  defaultValue={options?.[0]}
                  options={options}
                  className="w-full rounded-md bg-amber-600 text-sm font-light"
                />
              </div>
              <div className="cursor-pointer rounded-sm bg-[#197B30] px-4 py-[0.4rem] text-[#fff] shadow-inner ease-in-out active:scale-90 active:transition-all">
                Go
              </div>
            </div>
            <div className=" flex xxs:justify-center md:justify-end">
              <div className="flex items-center justify-between">
                <div
                  onClick={() => setShowModal(true)}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-[#197B30]  py-1.5 px-3 text-[#197b30] shadow-md "
                >
                  <AiOutlineSound />
                  <span>Create</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 flex flex-col bg-white">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                {isLoading && (
                  <>
                    <div className="flex h-[50vh] w-full flex-col items-center justify-center bg-white py-10">
                      <div className="flex flex-col items-center">
                        <img
                          src={logo}
                          alt="loaderLogo"
                          className="h-20 w-20 animate-pulse"
                        />
                        <p className="text-[14px] leading-[24px] text-[#333333]">
                          Fetching Data...
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {!isLoading && (
                  <div className="overflow-x-auto">
                    <table
                      {...getTableProps()}
                      className="mb-6 min-w-full appearance-none  bg-white "
                      id="my-table"
                    >
                      <thead className="appearance-none bg-[#F4F4F4] ">
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
                                    className="text-primary whitespace-nowrap py-4 px-4 text-left text-sm font-normal "
                                    {...column.getHeaderProps(
                                      column.getSortByToggleProps(),
                                    )}
                                    key={column.id}
                                  >
                                    <div className="flex items-center">
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
                        className="mt-3 w-full space-y-8 pt-3 "
                      >
                        {page.map(
                          (
                            row: {
                              subRows: any;
                              getRowProps: () => JSX.IntrinsicAttributes &
                                React.ClassAttributes<HTMLTableRowElement> &
                                React.HTMLAttributes<HTMLTableRowElement>;
                              cells: any[];
                            },
                            index: number,
                          ) => {
                            prepareRow(row);

                            return (
                              <>
                                <tr
                                  key={index}
                                  {...row.getRowProps()}
                                  className="my-4 appearance-none border "
                                >
                                  {row.cells.map((cell, cellIndex) => {
                                    return (
                                      <td
                                        key={cellIndex}
                                        {...cell.getCellProps()}
                                        className=" py-4 px-4 text-sm text-[#202223] "
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
                    {selectedRow && (
                      <RowModal
                        id={selectedRow.id}
                        subject={selectedRow.subject}
                        content={selectedRow.content}
                        date={selectedRow.date}
                        isVisib={showRowModal}
                        CloseModal={() => setShowRowModal(false)}
                        show={false}
                      />
                    )}

                    <CustomPagination
                      gotoPage={gotoPage}
                      length={data.length}
                      pageSize={pageSize}
                      pageOptions={pageOptions}
                      pageIndex={pageIndex}
                      pageCount={pageCount}
                      setPageSize={setPageSize}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Announcement;
