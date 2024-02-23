import React from "react";
import { BiShieldQuarter } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { standards } from "../sellers-dashboard/SellersSetting";

interface IAccount {
  setShowTab: React.Dispatch<React.SetStateAction<boolean>>;
}

const QualityCheck = ({ setShowTab }: IAccount) => {
  return (
    <div className=" mb-10">
      <div className="flex items-center gap-2 py-4 ">
        <div
          onClick={() => setShowTab((prev) => !prev)}
          className="flex cursor-pointer items-center"
        >
          <HiOutlineChevronLeft size={20} color="#197b30" />
          <span className="flex items-center gap-1 text-[16px] text-[#197b30] md:leading-[19px]">
            <BiShieldQuarter size={24} />
            Quality Control
          </span>
        </div>
      </div>

      <div className="rounded-sm bg-[#F4F4F4] py-8 px-6 ">
        <h3
          className="flex items-center justify-center text-[24px] font-bold"
          style={{ transition: "opacity 0.5s ease-in" }}
        >
          Vendor Quality Assurance Guidelines
        </h3>
        <div className="mt-1 flex items-center justify-center">
          <div className=" block h-1 w-20 bg-[#197B30]"></div>
        </div>
        <div className="mt-6">
          <p className="text-[16px]">
            Welcome to Porker Hut Vendor Partnership Program. We are excited to
            collaborate with you to offer premium pork, pig, and feed products
            to our discerning customers across Nigeria. Our success is built on
            a foundation of quality, and we are committed to ensuring that every
            product listed on our platform meets the highest standards. Here's
            what you need to know about our quality assurance process:
          </p>

          <div className="mt-3 space-y-4">
            {standards.map((policy: any) => (
              <div className="font-bold">
                <span>{policy.title}:</span>
                <div className="font-normal">
                  {policy.points.map((point: any) => (
                    <div className=" flex items-start gap-2 font-normal">
                      <span className="mt-1">
                        <IoIosCheckmarkCircle className="text-green-700" />
                      </span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5">
            Thank you for choosing to partner with Porker-Hut. By upholding the
            highest standards of quality and excellence, we can create value for
            our customers and drive success for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityCheck;
