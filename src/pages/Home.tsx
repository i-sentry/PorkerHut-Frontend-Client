import React from "react";
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

const Home: React.FC = () => {
    const dispatch = useAppDispatch();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scrolls to top-left corner of the page
      dispatch(fetchProduct());
  }, [dispatch]);

  // useEffect(() => {

  // });
  return (
    <AppLayout>

      <div className="bg-slate-400 h-[100%]">
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

