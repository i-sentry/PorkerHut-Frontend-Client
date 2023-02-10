import React, { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Component: React.FC = () => {
  const [openSort, setOpenSort] = useState(false);
  const [sortType, setSortType] = useState("Newest Arrival");

  return (
    <div className=" flex justify-center items-center">
      <div className="w-full flex justify-center">
        <div className="relative">
          <button
            className="flex bg-gray-200 items-center justify-around pr-4  w-40 py-2 mt-2 text-sm font-normal  text-left bg-transparent rounded-lg"
            onClick={() => setOpenSort(!openSort)}
          >
            <span>{sortType}</span>

            {openSort ? <RxCaretDown size={24} /> : <RxCaretUp size={24} />}
          </button>
          {openSort && (
            <div className="absolute z-50 w-full origin-top-right">
              <div className="px-2 pt-2 pb-2 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                <div className="flex flex-col">
                  <a
                    className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
                    href="#"
                    onClick={() => {
                      setSortType("Price:High to Low");
                      setOpenSort(false);
                    }}
                  >
                    <div>
                      <p className="text-sm font-normal">Price:High to Low</p>
                    </div>
                  </a>

                  <a
                    className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
                    href="#"
                    onClick={() => {
                      setSortType("Price:Low to High");
                      setOpenSort(false);
                    }}
                  >
                    <div>
                      <p className="text-sm font-normal">Price:Low to high</p>
                    </div>
                  </a>
                  <a
                    className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
                    href="#"
                    onClick={() => {
                      setSortType("Product Rating");
                      setOpenSort(false);
                    }}
                  >
                    <div>
                      <p className="text-sm font-normal">Product Rating</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Component;
