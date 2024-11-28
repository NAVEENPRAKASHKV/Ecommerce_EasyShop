import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Ratings from "../Ratings";

const FeaturedProducts = () => {
  const products = [
    { id: 1, discount: "10%" },
    { id: 2, discount: "15%" },
    { id: 3, discount: "5%" },
    { id: 4, discount: "20%" },
    { id: 5, discount: "12%" },
    { id: 6, discount: "8%" },
  ];

  return (
    <div className="w-[85%] mx-auto">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center w-full flex flex-col justify-center items-center mb-7">
          <h2 className="text-2xl font-bold">Featured Product</h2>
          <div className="w-[70px] h-[2px] bg-green-700 text-center items-center mt-3"></div>
        </div>

        {/* Content of Featured Products */}
        <div className="w-full grid grid-cols-4 xs:grid-cols-1  sm:grid-cols-2  md:grid-cols-2 md-lg:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border group relative transition-all duration-500 hover:-mt-2 hover:shadow-lg bg-slate-500 rounded-md"
            >
              {/* Discount & Images & icons for cart view and wishlist*/}
              <div className="relative">
                {/* Discount Badge */}
                <div className="w-[38px] h-[38px] absolute bg-red-700 rounded-full text-white flex justify-center items-center top-4 left-4">
                  {product.discount}
                </div>

                {/* Product Image */}
                <div className="p-2">
                  <img
                    className="w-full h-[240px] rounded-md"
                    src={`http://localhost:3000/images/products/${product.id}.webp`}
                    alt={`Product ${product.id}`}
                  />
                </div>

                {/* Hover Action Icons */}
                <div className="absolute w-full flex justify-center items-center gap-2 -bottom-10 group-hover:bottom-4 transition-all opacity-0 group-hover:opacity-100">
                  <button className="h-[38px] w-[38px] bg-white rounded-full flex justify-center items-center shadow-md hover:bg-green-500 hover:text-white text-xl">
                    <CiHeart />
                  </button>
                  <button className="h-[38px] w-[38px] bg-white rounded-full flex justify-center items-center shadow-md hover:bg-green-500 hover:text-white text-xl">
                    <IoCartOutline />
                  </button>
                  <button className="h-[38px] w-[38px] bg-white rounded-full flex justify-center items-center shadow-md hover:bg-green-500 hover:text-white text-xl">
                    <IoEyeOutline />
                  </button>
                </div>
              </div>
              {/* details */}
              <div className="px-3 text-white font-semibold m-3">
                <h2>Product Name</h2>
                <span>$656</span>
                <div className="flex">
                  <Ratings ratings={2} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
