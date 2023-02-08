import React, { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Component: React.FC = () => {
  const [openSort, setOpenSort] = useState(false);
  const [sortType, setSortType] = useState("Best Selling");

  return (
    <div className=" flex justify-center items-center">
      <div className="w-full flex justify-center">
        <div className="relative">
          <button
            className="flex bg-gray-200 items-center justify-start w-40 py-2 mt-2 text-l font-medium text-left bg-transparent rounded-lg"
            onClick={() => setOpenSort(!openSort)}
          >
            <span>{sortType}</span>
            
            {openSort ? <RxCaretDown size={24}/> : <RxCaretUp size={24} />}
          </button>
          {openSort && (
            <div className="absolute z-50 w-full origin-top-right">
              <div className="px-2 pt-2 pb-2 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                <div className="flex flex-col">
                  <a
                    className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
                    href="#"
                    onClick={() => {
                      setSortType("Most discussed");
                      setOpenSort(false);
                    }}
                  >
                    <div>
                      <p className="font-semibold">Most discussed</p>
                    </div>
                  </a>

                  <a
                    className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200"
                    href="#"
                    onClick={() => {
                      setSortType("Most popular");
                      setOpenSort(false);
                    }}
                  >
                    <div>
                      <p className="font-semibold">Most popular</p>
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
