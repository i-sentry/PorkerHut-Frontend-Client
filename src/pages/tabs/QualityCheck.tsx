import React from "react";
import { BiShieldQuarter } from "react-icons/bi";
import { HiOutlineChevronLeft } from "react-icons/hi";

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
          className="flex items-center justify-center text-[20px] font-normal leading-[23px]"
          style={{ transition: "opacity 0.5s ease-in" }}
        >
          What is Quality Check?
        </h3>
        <div className="mt-1 flex items-center justify-center">
          <div className=" block h-1 w-20 bg-[#197B30]"></div>
        </div>
        <div className="mt-6">
          <p className=" text-justify text-[16px] leading-[19px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            magnam quam beatae quo recusandae optio commodi totam doloribus,
            nihil, laudantium itaque error reiciendis quidem. Provident optio
            excepturi laborum quis quidem, rem maiores accusamus voluptas amet
            sequi itaque culpa enim consequuntur architecto cupiditate nesciunt
            reiciendis eum, veniam laudantium, minus quaerat quod? Excepturi,
            aut nisi consequuntur vel ut consequatur natus accusamus magni.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            impedit nostrum, obcaecati accusantium dicta deserunt perspiciatis,
            quas cupiditate corrupti veritatis maiores culpa commodi ab cum
            debitis hic? Corporis sint harum .
          </p>
        </div>
      </div>
    </div>
  );
};

export default QualityCheck;
