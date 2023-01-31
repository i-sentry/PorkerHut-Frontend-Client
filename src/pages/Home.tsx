import { title } from "process";
import React, { FC } from "react";
import Services from "../components/agro-services/Services";
import Blog from "../components/blog-component/Blog";

import Category from "../components/category-component/Category";
import FeaturedProduct from "../components/featured-product-component/FeaturedProduct";
import Header from "../components/header-component/Header";
import Slider from "../components/slider-component/Slider";
import Story from "../components/story-components/Story";

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Slider images={[]} />
      <Category  />
      <Services />
      <Header />
      <FeaturedProduct type="Best Selling"/>
      <FeaturedProduct type="Pork"/>
      <FeaturedProduct type="Feeds"/>
      <FeaturedProduct type="Livestocks"/>
      <Story />
      <Blog/>
    </div>
  );
};

export default Home;
