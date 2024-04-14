import React, { useEffect } from "react";
import Services from "../components/agro-services/Services";
import Blog from "../components/blog-component/Blog";
import Category from "../components/category-component/Category";
import Header from "../components/header-component/Header";
import Slider from "../components/slider-component/Slider";
import Story from "../components/story-components/Story";
import AppLayout from "../components/utility/AppLayout";
import "aos/dist/aos.css";
import { useAppDispatch } from "../redux/hook";
import { fetchProduct } from "../redux/features/product/productSlice";
import { Link } from "react-router-dom";
//@ts-ignore
import ScrollReveal from "scrollreveal";
import { convertFromRaw, EditorState } from "draft-js";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    // Initialize scroll-reveal
    ScrollReveal().reveal(".banner", {
      distance: "500px",
      origin: "left",
      duration: 1500,
      delay: 500,
    });
  }, []);



  return (
    <AppLayout>
      <div className="relative h-[100%] bg-slate-400">
        <div className="banner absolute left-0 top-1/2 z-10 block w-full -translate-y-1/2 rounded bg-zinc-100 bg-opacity-10 px-4 py-5 backdrop-blur-3xl sm:w-10/12 md:py-10 lg:w-7/12 lg:py-[40px] lg:pl-[80px] lg:pr-[40px]">
          <h1 className="relative mb-4 text-2xl font-bold text-white after:absolute after:left-0 after:-bottom-1 after:block after:h-1 after:w-20 after:bg-green-700 sm:mb-8 md:text-[40px] md:after:-bottom-4">
            Porker Hut Naija
          </h1>
          <p className="text-xs font-normal leading-[150%] text-white sm:text-sm">
            Porker Hut is dedicated to ethical and responsible animal rearing,
            sourcing only the freshest, high-quality pigs from local farms. Our
            selection of premium pork products includes succulent chops, savory
            bacon, and mouth-watering sausages to satisfy every taste.
            Experience the difference of our farm-to-table approach with
            convenient online ordering and delivery options. Choose Porker Hut
            for unparalleled quality in every bite.
          </p>
          <Link
            to="/products"
            className="mt-6 inline-block rounded bg-green-700 px-9 py-3 text-sm font-semibold text-white"
          >
            Shop now
          </Link>
        </div>
        <Slider sliderImages={[]} />
      </div>
      <div className="xxs:mt-16 lg:mt-24 ">
        <Category data-aos="fade-up" />
        <Services />
        <Header />
        <Story />
        <Blog />
      </div>
    </AppLayout>
  );
};

export default Home;
