
import React from "react";
import Services from "../components/agro-services/Services";
import Blog from "../components/blog-component/Blog";
import Category from "../components/category-component/Category";
import Header from "../components/header-component/Header";
import Slider from "../components/slider-component/Slider";
import Story from "../components/story-components/Story";
import FeaturedProduct from "../components/featured-product-component/best-selling-product/FeaturedProduct";
import Product from "../components/featured-product-component/best-selling-product/Product";
import AppLayout from "../components/utility/AppLayout";
import toast, { Toaster } from "react-hot-toast";

const Home: React.FC = () => {
  const notify = () => toast("Here is your toast.");
  return (
    <AppLayout>
      <div className="mb-20 overflow-hidden"></div>
      <div className="bg-slate-400 gg">
        <Slider sliderImages={[]} />
      </div>
      <div >
        <Category />
        <Services />
        <Header />
        {/* <Product notify={notify} /> */}
   
        <Story />
        <Blog />
      </div>
    </AppLayout>
  );
};

export default Home;
