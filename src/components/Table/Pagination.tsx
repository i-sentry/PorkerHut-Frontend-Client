import { useState, useEffect, memo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePaginationPages } from "./usePaginationPages";

const Pagination = ({
  gotoPage,
  length,
  pageSize,
  setPageSize,
}: {
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  length: number;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}) => {
  const [perPage, setPerPage] = useState(pageSize);

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
        onClick={goPrev}
        disabled={!canGo.previous}
        className="m-1 px-2 py-1 border rounded-md"
      >
        <ChevronLeftIcon className="h-6 w-4 text-blue-500" />
      </button>
      {pages.map((page, i) => (
        <button
          onClick={() => goTo(page)}
          key={i}
          style={{
            background: currentPage === page ? "blue" : "none",
            color: currentPage === page ? "white" : "black",
          }}
          className="m-1 px-3 py-1 border rounded-md"
        >
          {page}
        </button>
      ))}
      <button
        onClick={goNext}
        disabled={!canGo.next}
        className="m-1 px-2 py-1 border rounded-md"
      >
        <ChevronRightIcon className="h-6 w-4 text-blue-500" />
      </button>
      <select
        className="px-2 py-[6px] border rounded-md w-30 bg-white"
        value={pageSize}
        onChange={(e) => setPerPage(+e.target.value)}
      >
        {[10, 50, 100].map((pgSize) => (
          <option className="py-2" value={pgSize} key={pgSize}>
            {pgSize} / page
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Pagination);
