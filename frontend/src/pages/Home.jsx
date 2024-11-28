import React from "react";
import Header from "../componets/Header";
import Banner from "./../componets/Banner";
import Categories from "../componets/Categories";
import FeaturedProducts from "../componets/products/FeaturedProducts";
import Products from "../componets/products/Products";
import Footer from "./../componets/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <div className="py-[45px]">
        <FeaturedProducts />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="w-full grid grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7 ">
            <div className="overflow-hidden">
              <Products title="Latest Products" />
            </div>
            <div className="overflow-hidden">
              <Products title="Top Rated Products" />
            </div>
            <div className="overflow-hidden">
              <Products title="Discounted Products" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
