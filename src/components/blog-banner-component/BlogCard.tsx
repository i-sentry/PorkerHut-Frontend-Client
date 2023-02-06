import React from "react";
import { AiOutlineRight } from "react-icons/ai";
let blog_img1 = require("../../assets/images/Blog_frame_1.png");
let blog_img2 = require("../../assets/images/Blog_frame-2.jpg");

const Blog = () => {
  return (
    <section className="w-full md:h-[450px] xxs:h-[900px]">
      <div className="w-full max-h-[1000px] md:grid md:grid-cols-2 md:px-10  xxs:grid-cols-1 xxs:px-3 ">
        <div className="flex flex-col items-center w-full xxs:mb-10">
          <div className="md:w-[80%]">
            <img
              src={blog_img1}
              alt=""
              className="object-cover w-full max-h-[1000px]"
            />
          </div>

          <div className="bottom md:w-[70%] bg-white md:h-[200px] px-8 mt-[-100px] md:border-2 xxs:border md:pt-4 xxs:w-[90%] xxs:h-[260px] xxs:pt-6">
            <div className="md:flex md:items-center md:justify-between">
              <h1 className=" font-semibold">
                The monetary aspect of Pig farm
              </h1>
              <span className="text-xs text-[#B4B4B4]">Jan 20, 2022</span>
            </div>
            <div className=" text-xs text-[#B4B4B4] pt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              quas enim voluptates at adipisci. Accusantium, molestias.
              Voluptas, rem corrupti sit quia ipsum facilis, nemo deleniti
              eaque, aperiam
            </div>
            <div className="">
              <button className="bg-[#197B30] py-2 px-6 my-5 rounded text-[#FFFFFF]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="md:w-[80%]">
            <img
              src={blog_img2}
              alt=""
              className="object-cover w-full max-h-[1000px]"
            />
          </div>

          <div className="bottom md:w-[70%] bg-white md:h-[200px] px-8 mt-[-100px] md:border-2 xxs:border md:pt-4 xxs:w-[90%] xxs:h-[260px] xxs:pt-6">
            <div className="md:flex md:items-center md:justify-between">
              <h1 className="font-semibold">The monetary aspect of Pig farm</h1>
              <span className="text-xs text-[#B4B4B4]">Jan 20, 2022</span>
            </div>
            <div className="pt-4 text-xs text-[#B4B4B4]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              quas enim voluptates at adipisci. Accusantium, molestias.
              Voluptas, rem corrupti sit quia ipsum facilis, nemo deleniti
              eaque, aperiam
            </div>
            <div className="">
              <button className="bg-[#197B30] xxs:py-2 xxs:px-6 my-5 rounded text-[#FFFFFF]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
