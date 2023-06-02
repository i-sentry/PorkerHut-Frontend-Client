import React, { useState } from "react";
import LogisticPartnerMobileFormA from "./LogisticPartnerMobileFormA";
import LogisticPartnerMobileFormB from "./LogisticPartnerMobileFormB";

function VerPartnerFormMobile() {
  const [page, setPage] = useState(0);

  const PageNum = ["First", "Second"];

  const PageDisplay = () => {
    if (page === 0) {
      return <LogisticPartnerMobileFormA />;
    } else {
      return <LogisticPartnerMobileFormB />;
    }
  };

  return (
    <div className="mb-20">
      <div className="">
        <div className="">{PageDisplay()}</div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center mt-4">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className={`h-3 w-3 rounded-full focus:outline-none ${
                page === 0 ? " bg-[#197b30]" : "bg-[#197b30]"
              }`}
            ></button>

            <button
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
              className={`h-3 w-3 rounded-full  focus:outline-none ${
                page === 1
              } ? 'bg-[#197b30]' : 'bg-[#197b30]'`}
            ></button>
          </div>

          <div className="flex items-center justify-center mt-4">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className={`h-3 w-3 rounded-full  focus:outline-none ${
                page === 0 ? "bg-gray-300" : "bg-[#197b30]"
              }`}
            ></button>

            <button
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
              className={`h-3 w-3 rounded-full  focus:outline-none ${
                page === 1
              } ? 'bg-[#197b30]' : 'bg-[#197b30]'`}
            ></button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 gap-10">
          <button
            disabled={page === 0}
            
            className="bg-white text-[#197b30] border border-[#197] w-[132px] h-[48px] rounded text-[14px] leading-[24px] font-semibold"
          >
            Back
          </button>
          <button
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
            className="bg-[#197b30] text-white w-[132px] h-[48px] rounded text-[14px] leading-[24px] font-semibold"
          >
            {page === PageNum.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerPartnerFormMobile;
