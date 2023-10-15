import { useState, useEffect, memo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePaginationPages } from "./usePaginationPages";

const CustomPagination = ({
  gotoPage,
  length,
  pageSize,
  setPageSize,
  pageIndex,
  pageOptions,
  pageCount,
}: {
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  length: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  pageIndex: any;
  pageOptions: any;
  pageCount: any;
}) => {
  const [perPage] = useState(pageSize);

  const { canGo,  goNext, goPrev } =
    usePaginationPages({
      gotoPage,
      length,
      pageSize,
    });

  useEffect(() => {
    setPageSize(perPage);
  }, [perPage, setPageSize]);

  return (
    <div className="m-4 flex items-center gap-2 justify-end">
      <span className="font-light text-xs">
        {pageIndex + 1} - {pageCount} Of {length}
      </span>
      <button
        onClick={goPrev}
        disabled={!canGo.previous}
        className="m-1 p-1 border border-[#333333] rounded-md"
      >
        <ChevronLeftIcon className="h-3 w-3 text-[#333333]" />
      </button>

      <button
        onClick={goNext}
        disabled={!canGo.next}
        className="m-1 p-1 border rounded-md border-[#333333]"
      >
        <ChevronRightIcon className="h-3 w-3 text-[#333333]" />
      </button>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default memo(CustomPagination);
