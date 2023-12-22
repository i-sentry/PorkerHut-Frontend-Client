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
      <div className="relative bg-slate-400 h-[100%]">
        <div>
          <div className="hidden md:block banner w-full px-4 lg:pl-[80px] lg:pr-[40px] py-[40px] lg:w-7/12 absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-zinc-100 bg-opacity-10 rounded backdrop-blur-3xl">
            <h1 className="text-white text-[40px] mb-8 font-bold after:w-20 after:h-1.5 after:bg-green-700 after:absolute after:left-[80px] after:block">
              Porker Hut Naija
            </h1>
            <p className="text-white text-sm font-normal leading-[150%]">
              Porker Hut is dedicated to ethical and responsible animal rearing,
              sourcing only the freshest, high-quality pigs from local farms.
              Our selection of premium pork products includes succulent chops,
              savory bacon, and mouth-watering sausages to satisfy every taste.
              Experience the difference of our farm-to-table approach with
              convenient online ordering and delivery options. Choose Porker Hut
              for unparalleled quality in every bite.
            </p>
            <Link
              to="/"
              className="w-[141px] h-12 pl-[42px] pr-9 py-3 mt-6 inline-block bg-green-700 rounded text-white text-sm font-semibold"
            >
              Shop now
            </Link>
          </div>
        </div>
        <Slider sliderImages={[]} />
      </div>
      <div className="lg:mt-24 xxs:mt-16 ">
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
