import { title } from "process";
import React, { FC } from "react";
import Services from "../components/agro-services/Services";
import Blog from "../components/blog-component/Blog";

import Category from "../components/category-component/Category";


import Header from "../components/header-component/Header";
import Slider from "../components/slider-component/Slider";
import Story from "../components/story-components/Story";

import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";
import BestSellingProduct from "../components/featured-product-component/best-selling-product/FeaturedProduct";
import FeaturedProduct from "../components/featured-product-component/best-selling-product/FeaturedProduct";
import Product from "../components/featured-product-component/best-selling-product/Product";
import AppLayout from "../components/utility/AppLayout";


const Home: React.FC = () => {
  return (
    <AppLayout >
      <div className="mb-20">

      {/* <NavBar/> */}
      </div>
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
     {/* <Footer/> */}
    </AppLayout>
  );
};

export default Home;
