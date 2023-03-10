
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

const Home: React.FC = () => {
  return (
    <AppLayout>
      <div className="mb-20"></div>
      <div className="bg-slate-400">
        <Slider sliderImages={[]} />
      </div>
      <Category />
      <Services />
      <Header />
      <Product />
      <FeaturedProduct />
      <Story />
      <Blog />
    </AppLayout>
  );
};

export default Home;
