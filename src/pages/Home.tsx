import { title } from "process";
import React, { FC } from "react";
import Services from "../components/agro-services/Services";
import Blog from "../components/blog-component/Blog";

import Category from "../components/category-component/Category";

import FeaturedProduct from "../components/featured-product-component/best-selling-product/BestSellingProduct";
import LivestockProduct from "../components/featured-product-component/livestock-product/LivestockProduct";
import MeatProduct from "../components/featured-product-component/meat-product/MeatProduct";
import Header from "../components/header-component/Header";
import Slider from "../components/slider-component/Slider";
import Story from "../components/story-components/Story";
import AnimalFeedProduct from "../components/featured-product-component/animal-feed-product/AnimalFeedProduct";
import NavBar from "../components/nav-component/NavBar";
import Footer from "../components/footer-component/Footer";


const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="mb-20">

      <NavBar/>
      </div>
      <Slider images={[]} />
      <Category />
      <Services />
      <Header />
      <FeaturedProduct />
      <LivestockProduct />
      <AnimalFeedProduct />
      <MeatProduct />
      <Story />
      <Blog />
     <Footer/>
    </div>
  );
};

export default Home;
