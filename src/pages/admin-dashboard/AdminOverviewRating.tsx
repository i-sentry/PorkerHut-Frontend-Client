import React from "react";

export default function AdminOverviewRating() {
  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <>
      {/*        <!-- Component: Detailed Basic --> */}
      <div className="flex h-64 flex-col items-center rounded bg-[#F4F4F4] py-3 px-3">
        {/*          <!-- Title --> */}
        <h4 className="font-bold text-slate-700">Customer Feedback</h4>
        {/*          <!-- Rating --> */}
        <span className="flex items-center gap-4 rounded text-sm text-slate-500">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-[#FE6600]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-[#FE6600]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-[#FE6600]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-[#FE6600]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
        </span>
        {/*          <!-- Helper text --> */}
        <span className="text-xs leading-6 text-slate-400">
          Total Feedback (5.0)
        </span>
        {/*          <!-- Detailed rating --> */}
        <span className="flex w-full flex-col gap-4 pt-2">
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              htmlFor="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs"
            >
              5 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="75"
              className="block h-3 w-full overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold">(112)</span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              htmlFor="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs"
            >
              4 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="28"
              className="block h-3 w-full overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[bg-[#197B30]]"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">(17) </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              htmlFor="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs"
            >
              3 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="18"
              className="block h-3 w-full overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold ">(12) </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              htmlFor="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs"
            >
              2 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="8"
              className="block h-3 w-full overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold">(2) </span>
          </span>
          <span className="flex w-full items-center gap-2">
            <label
              id="p03e-label"
              htmlFor="p03e"
              className="mb-0 w-9 shrink-0 text-center text-xs"
            >
              1 star
            </label>
            <progress
              aria-labelledby="p03e-label"
              id="p03e"
              max="100"
              value="10"
              className="block h-3 w-full overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-[#197B30] [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
            >
              75%
            </progress>
            <span className="w-9 text-xs font-bold text-slate-700">(4)</span>
          </span>
        </span>
      </div>
      {/*        <!-- End Detailed Basic --> */}
    </>
  );
}
