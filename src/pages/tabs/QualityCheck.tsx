import React from "react";
import { BiShieldQuarter } from "react-icons/bi";
import { HiOutlineArrowNarrowLeft, HiOutlineChevronLeft } from "react-icons/hi";

interface IAccount {
  setShowTab: React.Dispatch<React.SetStateAction<boolean>>;
}

const QualityCheck = ({ setShowTab }: IAccount) => {
  return (
    <div className=" mb-10">
      <div className="flex items-center gap-2 py-4 ">
        <div onClick={() => setShowTab((prev) => !prev)} className=" text-[]">
          <HiOutlineChevronLeft size={20} />
        </div>
        <span className="flex gap-1 items-center text-[#197b30] text-[16px] md:leading-[19px]">
          <BiShieldQuarter size={24} />
          Quality Control
        </span>
      </div>

      <div className="bg-[#F4F4F4] py-8 px-6 rounded-sm ">
        <h3
          className="text-[20px] leading-[23px] font-normal flex items-center justify-center"
          style={{ transition: "opacity 0.5s ease-in" }}
        >
          What is Quality Check?
        </h3>
        <div className="flex items-center justify-center mt-1">
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
