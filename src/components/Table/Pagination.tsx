import { useState, useEffect, memo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePaginationPages } from "./usePaginationPages";

const Pagination = ({
  gotoPage,
  length,
  pageSize,
  setPageSize,
  nextpage,
  prevPage,
}: {
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  length: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  nextpage?: () => void;
  prevPage?: () => void;
}) => {
  const [perPage] = useState(pageSize);

  const { canGo, currentPage, pages, goTo, goNext, goPrev } =
    usePaginationPages({
      gotoPage,
      length,
      pageSize,
    });

  useEffect(() => {
    setPageSize(perPage);
  }, [perPage, setPageSize]);

  return (
    <div className="m-4 flex items-center justify-center">
      <button
        onClick={prevPage ? prevPage : goPrev}
        disabled={!canGo.previous}
        className="m-1 rounded-md border border-[#197B30] px-2 py-1"
      >
        <ChevronLeftIcon className="h-4 w-3 text-[#197B30]" />
      </button>
      {pages.map((page, i) => (
        <button
          onClick={() => goTo(page)}
          key={i}
          style={{
            background: currentPage === page ? "#197B30" : "none",
            color: currentPage === page ? "white" : "#A2A2A2",
            borderColor: currentPage === page ? "#197B30" : "#A2A2A2",
          }}
          className="m-1 rounded-md border px-2  py-[1px]"
        >
          {page}
        </button>
      ))}
      <button
        onClick={nextpage ? nextpage : goNext}
        disabled={!canGo.next}
        className="m-1 rounded-md border border-[#197B30] px-2 py-1"
      >
        <ChevronRightIcon className="h-4 w-3 text-[#197B30]" />
      </button>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default memo(Pagination);
