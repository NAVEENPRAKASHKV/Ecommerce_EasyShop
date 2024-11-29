import React from "react";
import Header from "./../componets/Header";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../componets/Footer";

const Details = () => {
  return (
    <div>
      <Header />
      {/* page heading with image */}
      <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[180px] my-5  bg-cover bg-left'>
        <div className="bg-[#2422228a] w-full h-full ">
          <div className="flex flex-col justify-center items-center text-white h-full w-full gap-2 text-xl ">
            <h1 className="font-extrabold">Product Details Page</h1>
            <div className="flex flex-row justify-center items-center text-base gap-2">
              <Link to="/">Home</Link>
              <span>
                <FaAngleRight />
              </span>
              <Link>Product</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumbs  */}
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className="flex justify-start items-center gap-2 m-2 font-semibold ">
            <Link to="/">Home</Link>
            <span>
              <FaAngleRight />
            </span>
            <Link to="/">Category</Link>
            <span>
              <FaAngleRight />
            </span>
            <span>Product Name </span>
          </div>
        </div>
      </section>
      {/* product details with product image and product details */}
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Details;
