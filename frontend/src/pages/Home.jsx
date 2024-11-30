import React, { useEffect } from "react";
import Header from "../componets/Header";
import Banner from "./../componets/Banner";
import Categories from "../componets/Categories";
import FeaturedProducts from "../componets/products/FeaturedProducts";
import Products from "../componets/products/Products";
import Footer from "./../componets/Footer";
import { useDispatch, useSelector } from "react-redux";
import { get_categories, get_products } from "../store/reducers/homeReducer";

const Home = () => {
  const dispatch = useDispatch();
  const {
    categories,
    products,
    latest_product,
    topRated_product,
    discounted_product,
  } = useSelector((store) => store.home);
  useEffect(() => {
    dispatch(get_categories());
    dispatch(get_products());
  }, []);
  return (
    <div className="">
      <Header categories={categories} />
      <Banner />
      <Categories categories={categories} />
      <div className="py-[45px]">
        <FeaturedProducts products={products} />
      </div>
      <div className="py-10  ">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="w-full grid grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7 ">
            <div className="overflow-hidden">
              <Products title="Latest Products" products={latest_product} />
            </div>
            <div className="overflow-hidden">
              <Products
                title="Top Rated Products"
                products={topRated_product}
              />
            </div>
            <div className="overflow-hidden">
              <Products
                title="Discounted Products"
                products={discounted_product}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
