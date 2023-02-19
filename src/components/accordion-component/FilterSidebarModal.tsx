import React from "react";
import MultiRangeSlider from "./MultiSlider";

interface FilterSidebarProps {
  open: boolean
  onClose: () => void
}

const FilterSidebar = ({ open, onClose }: FilterSidebarProps) => {
    if (!open) return null
  return (
    <div className="md:hidden xxs:block bg-white w-full min-h-screen z-50 top-30 fixed overflow-hidden">
      <h1 className="mt-10 px-8 font-medium text-lg">Filter</h1>
      <div className="px-8 mt-4">
        <h2 className="py-2 font-medium text-base">Location</h2>
        <div>
          <div className="mb-2">
            <input type="checkbox" id="1" value={1} />
            <label className="ml-2  text-base font-normal" htmlFor="1">
              Abuja
            </label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="2" value={2} />
            <label className="ml-2 text-base font-normal" htmlFor="2">
              Lagos
            </label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="3" value={3} />
            <label className="ml-2 text-base font-normal" htmlFor="3">
              Osun
            </label>
          </div>
          <div className="mb-2">
            <input type="checkbox" id="" value={4} />
            <label className="ml-2 text-base font-normal" htmlFor="4">
              Ekiti
            </label>
          </div>
          <div>
            <input type="checkbox" id="1" value={5} />
            <label className="ml-2 text-base font-normal" htmlFor="5">
              Port Harcourt
            </label>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="py-2 font-medium text-base px-8">Price</h2>
        <MultiRangeSlider min={0} max={2000} />
      </div>

      <div className="px-8 mt-20">
        <h2 className="py-2 font-medium text-base">Type</h2>
        <div>
          <div className="mt-2">
            <input type="checkbox" id="1" value={1} />
            <label className="ml-2 text-base font-normal" htmlFor="1">
              Pork loin
            </label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="2" value={2} />
            <label className="ml-2 text-base font-normal" htmlFor="2">
              Spare ribs
            </label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="3" value={3} />
            <label className="ml-2 text-base font-normal" htmlFor="3">
              Ham
            </label>
          </div>
          <div className="mt-2">
            <input type="checkbox" id="" value={4} />
            <label className="ml-2 text-base font-normal" htmlFor="4">
              Pork Steak
            </label>
          </div>
        </div>
      </div>

      <div className="px-8 flex items-center justify-between py-8 mt-20">
        <button className="text-[#197B30]" onClick={onClose}>Cancel</button>
        <button className="bg-[#197B30] text-white py-3 px-6 rounded">Show result</button>
      </div>
    </div>
  );
};

export default FilterSidebar;
