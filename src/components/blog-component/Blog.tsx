import React from "react";
import { AiOutlineRight } from "react-icons/ai";
let blog_img1 = require("../../assets/images/Blog_frame_1.png");
let blog_img2 = require("../../assets/images/Blog_frame-2.jpg");

const Blog = () => {
  return (
    <section className="w-full md:h-[650px] xxs:h-[1000px]">
      <div>
        <div className="flex justify-center items-center md:mx-10 xxs:mt-4">
          <h1 className="font-semibold text-2xl">Latest Blogs & Articles</h1>
        </div>
        <div className="flex items-center justify-center mb-5">
          <div className=" block h-1 w-20 bg-[#197B30]"></div>
        </div>
      </div>
      <div className="w-full max-h-[1000px] md:grid md:grid-cols-2 md:gap-10 md:px-10  xxs:grid-cols-1 xxs:px-3 ">
        <div className="flex flex-col items-center w-full xxs:mb-10">
          <div className="w-full">
            <img
              src={blog_img1}
              alt=""
              className="object-cover w-full max-h-[1000px]"
            />
          </div>

          <div className="bottom w-[90%] bg-white max-h-[400px] p-8 mt-[-100px] md:border-2 xxs:border">
            <div className="md:flex md:items-center md:justify-between">
              <h1 className=" font-semibold">
                The monetary aspect of Pig farm
              </h1>
              <span className="text-xs text-[#B4B4B4]">Jan 20, 2022</span>
            </div>
            <div className="my-4  text-xs text-[#B4B4B4] ">
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
          <div className="w-full">
            <img
              src={blog_img2}
              alt=""
              className="object-cover w-full max-h-[1000px]"
            />
          </div>

          <div className="bottom w-[90%] bg-white max-h-[500px] p-8 mt-[-100px] md:border-2 xxs:border">
            <div className="md:flex md:items-center md:justify-between">
              <h1 className="font-semibold">The monetary aspect of Pig farm</h1>
              <span className="text-xs text-[#B4B4B4]">Jan 20, 2022</span>
            </div>
            <div className="my-4 text-xs text-[#B4B4B4]">
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

      <div className="mt-5 flex items-center justify-center ">
        <a href="" className="text-sm pr-4 underline font-medium">
          VIEW ALL
        </a>
        <AiOutlineRight />
      </div>
    </section>
  );
};

export default Blog;
