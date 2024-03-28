import React from "react";
import Img from "../../assets/images/Pig.png";

const AdminOverviewTopProduct = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top-left corner of the page
  }, []);

  return (
    <div className="hide-scroll-bar h-64 overflow-hidden overflow-y-scroll rounded bg-[#F4F4F4] py-3 px-3">
      <div className="flex items-center justify-between ">
        <h4 className="text-sm font-bold text-slate-700 ">Top Product</h4>
        <form>
          <div className="flex items-center gap-4">
            <label className="" htmlFor="week"></label>
            <input
              type="week"
              className="h-10 w-36 rounded border px-2 focus:outline-none "
            />
          </div>
        </form>
      </div>
      <div className="flex w-full flex-col gap-4 pt-2">
        <div className="flex w-full items-center">
          <div className="">
            <img
              src={Img}
              alt=""
              className="h-10 w-10 rounded-full border bg-white"
            />
          </div>

          <div className="pl-2">
            <div className="flex items-center justify-between">
              <span className="whitespace-nowrap text-xs font-bold">
                100% Healthy-Fed Pork Lap
              </span>
              <span className="text-xs">350 Sold</span>
            </div>

            <div className="">
              <label
                id="p03e-label"
                htmlFor="p03e"
                className="mb-0 shrink-0 text-center text-xs text-slate-500 "
              ></label>
              <progress
                aria-labelledby="p03e-label"
                id="p03e"
                max="100"
                value="75"
                className="block h-3 w-[250px] overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
              ></progress>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="">
            <img
              src={Img}
              alt=""
              className="h-10 w-10 rounded-full border bg-white"
            />
          </div>

          <div className="pl-2">
            <div className="flex items-center justify-between">
              <span className="whitespace-nowrap text-xs font-bold">
                100% Healthy-Fed Pork Lap
              </span>
              <span className="text-xs">350 Sold</span>
            </div>

            <div className="">
              <label
                id="p03e-label"
                htmlFor="p03e"
                className="mb-0 shrink-0 text-center text-xs text-slate-500 "
              ></label>
              <progress
                aria-labelledby="p03e-label"
                id="p03e"
                max="100"
                value="75"
                className="block h-3 w-[250px] overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
              ></progress>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="">
            <img
              src={Img}
              alt=""
              className="h-10 w-10 rounded-full border bg-white"
            />
          </div>

          <div className="pl-2">
            <div className="flex items-center justify-between">
              <span className="whitespace-nowrap text-xs font-bold">
                100% Healthy-Fed Pork Lap
              </span>
              <span className="text-xs">350 Sold</span>
            </div>

            <div className="">
              <label
                id="p03e-label"
                htmlFor="p03e"
                className="mb-0 shrink-0 text-center text-xs text-slate-500 "
              ></label>
              <progress
                aria-labelledby="p03e-label"
                id="p03e"
                max="100"
                value="75"
                className="block h-3 w-[250px] overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
              ></progress>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="">
            <img
              src={Img}
              alt=""
              className="h-10 w-10 rounded-full border bg-white"
            />
          </div>

          <div className="pl-2">
            <div className="flex items-center justify-between">
              <span className="whitespace-nowrap text-xs font-bold">
                100% Healthy-Fed Pork Lap
              </span>
              <span className="text-xs">350 Sold</span>
            </div>

            <div className="">
              <label
                id="p03e-label"
                htmlFor="p03e"
                className="mb-0 shrink-0 text-center text-xs text-slate-500 "
              ></label>
              <progress
                aria-labelledby="p03e-label"
                id="p03e"
                max="100"
                value="75"
                className="block h-3 w-[250px] overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
              ></progress>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="">
            <img
              src={Img}
              alt=""
              className="h-10 w-10 rounded-full border bg-white"
            />
          </div>

          <div className="pl-2">
            <div className="flex items-center justify-between">
              <span className="whitespace-nowrap text-xs font-bold">
                100% Healthy-Fed Pork Lap
              </span>
              <span className="text-xs">350 Sold</span>
            </div>

            <div className="">
              <label
                id="p03e-label"
                htmlFor="p03e"
                className="mb-0 shrink-0 text-center text-xs text-slate-500 "
              ></label>
              <progress
                aria-labelledby="p03e-label"
                id="p03e"
                max="100"
                value="75"
                className="block h-3 w-[250px] overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
              ></progress>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="">
            <img
              src={Img}
              alt=""
              className="h-10 w-10 rounded-full border bg-white"
            />
          </div>

          <div className="pl-2">
            <div className="flex items-center justify-between">
              <span className="whitespace-nowrap text-xs font-bold">
                100% Healthy-Fed Pork Lap
              </span>
              <span className="text-xs">350 Sold</span>
            </div>

            <div className="">
              <label
                id="p03e-label"
                htmlFor="p03e"
                className="mb-0 shrink-0 text-center text-xs text-slate-500 "
              ></label>
              <progress
                aria-labelledby="p03e-label"
                id="p03e"
                max="100"
                value="75"
                className="block h-3 w-[250px] overflow-hidden rounded bg-[#333333] [&::-moz-progress-bar]:bg-amber-400 [&::-webkit-progress-bar]:bg-[#333333] [&::-webkit-progress-value]:bg-[#197B30]"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewTopProduct;
