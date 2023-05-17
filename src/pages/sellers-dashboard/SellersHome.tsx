import React, { useState, useEffect, useMemo } from "react";
import logo from "../../assets/images/SellerHomeBanner.png";

import Modal from "../../components/announcement-component/Modal";
import Select from "react-select";
import { AiOutlineSound } from "react-icons/ai";
import RowModal from "../../components/announcement-component/RowModal";
import { announcementData } from "../../utils/announcementData";

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
import CustomPagination from "../../components/Table/CustomPagination";
import { RiMessage2Line } from "react-icons/ri";

interface SliderProps {
  sliderImages: never[];
}

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

const SellersHome: React.FC<SliderProps> = ({ sliderImages }: SliderProps) => {
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
    content: string;
    subject: string;
    date: string;
  }>[] = [
    {
      Header: "Announcement",
      accessor: "subject",
    },
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
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);
  const dataSlider = [
    {
      id: 1,
      src: "../../assets/images/SellerHomeBanner.png",
      name: "banner_img",
    },
    {
      id: 2,
      src: "./images/Banner1.jpg",
      name: "banner_img",
    },
    {
      id: 3,
      src: "./images/Banner2.jpg",
      name: "banner_img",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(id);
  }, [slideIndex, sliderImages]);

  const moveDot = (index: any) => {
    setSlideIndex(index);
  };

  return (
    <div className="pb-40">
      <div className="relative">
        <div className=" w-full h-[200px] ">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={index}
                className={`w-full h-full absolute opacity-0 transition-opacity duration-400 ${
                  slideIndex === index + 1 ? "active-anim opacity-100" : ""
                }`}
              >
                <img src={logo} alt="" className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>
        <div className=" absolute mx-auto left-[50%] transform -translate-x-1/2 flex mt-4">
          {dataSlider.map((_, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={`w-[6px] h-[6px]  border-3 rounded-full mr-2 ${
                slideIndex === index + 1
                  ? "bg-[#197B30] border-[#197B30]"
                  : "bg-gray-300 border-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-10 ">
        <div className="border-r border-l">
          <div className="flex items-center justify-between bg-[#F4F4F4] py-4 px-4">
            <span className="text-[24px] leading-[24px] font-normal text-[#A2A2A2]">
              Announcements
            </span>
            <RiMessage2Line size={20
            } className="text-[#F91919]" />
          </div>

          <div className="flex gap-10 px-4 py-4 border-b">
            <span className=" whitespace-nowrap text-[16px] leading-[24px] font-normal">
              Dec 3
            </span>

            <div className="flex gap-1 flex-col ">
              <span className="block text-[20px] leading-[24px] font-medium">
                December Sales!!!
              </span>
              <span className="text-[16px] font-normal leading-[24px]">
                Prepare for the December sales and stock up your products
                because we will be experiencing high traffic on our site. It...
              </span>
            </div>
          </div>
          <div className="flex gap-10 px-4 py-4 border-b">
            <span className=" whitespace-nowrap text-[16px] leading-[24px] font-normal">
              Dec 3
            </span>

            <div className="flex gap-1 flex-col">
              <span className="block text-[20px] leading-[24px] font-medium">
                December Sales!!!
              </span>
              <span className="text-[16px] font-normal leading-[24px]">
                Prepare for the December sales and stock up your products
                because we will be experiencing high traffic on our site. It...
              </span>
            </div>
          </div>
          <div className="flex gap-10 px-4 py-4 border-b">
            <span className=" whitespace-nowrap text-[16px] leading-[24px] font-normal">
              Dec 3
            </span>

            <div className="flex gap-1 flex-col">
              <span className="block text-[20px] leading-[24px] font-medium">
                December Sales!!!
              </span>
              <span className="text-[16px] font-normal leading-[24px]">
                Prepare for the December sales and stock up your products
                because we will be experiencing high traffic on our site. It...
              </span>
            </div>
          </div>
         

          
        </div>

        <div className="flex flex-col gap-10">
          <div className="border-r border-l ">
            <div className=" bg-[#F4F4F4] py-4 px-4">
              <span className="text-[24px] leading-[24px] font-normal text-[#A2A2A2]">
                Total Pending Orders
              </span>
            </div>

            <div className="">
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="text-[24px] leading-[24px] font-normal">
                  Today
                </span>
                <span className="text-[24px] leading-[24px] font-normal">
                  12
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="text-[24px] leading-[24px] font-normal">
                Yesterday
                </span>
                <span className="text-[24px] leading-[24px] font-normal">
                  12
                </span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="text-[24px] leading-[24px] font-normal">
                  Other
                </span>
                <span className="text-[24px] leading-[24px] font-normal">
                  12
                </span>
              </div>
            </div>
          </div>
          <div className="border-r border-l ">
            <div className=" bg-[#F4F4F4] py-4 px-4">
              <span className="text-[24px] leading-[24px] font-normal text-[#A2A2A2]">
              Your Rating
              </span>
            </div>

            <div className="">
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="text-[24px] leading-[24px] font-normal">
                  
                Average Customer Rating
                </span>
                <span className="text-[24px] leading-[24px] font-normal">
                  12
                </span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersHome;
