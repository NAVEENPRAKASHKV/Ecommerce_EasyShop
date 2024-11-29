import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Ratings from "../Ratings";
const ShopProducts = ({ styles }) => {
  return (
    <div
      className={`w-full grid gap-3 ${
        styles === "grid"
          ? "grid-cols-3 md-lg:grid-cols-2 sm:grid-cols-1"
          : "grid-cols-1 "
      }`}
    >
      {[1, 2, 3, 4, 5, 6].map((prod, index) => {
        return (
          <div key={index} className="p-2">
            <div
              className={`flex transition-all group rounded-md bg-white m-2 sm:w-[60%] xs:w-[70%]  duration-1000 shadow-lg hover:-translate-y-3 ${
                styles === "grid" ? "flex-col " : ""
              }`}
            >
              <div className={`overflow-hidden p-3   `}>
                <img
                  className={`object-fill  w-full rounded-lg ${
                    styles === "grid" ? "h-[200px]" : "h-[120px]"
                  } `}
                  src={`http://localhost:3000/images/products/${
                    index + 1
                  }.webp`}
                  alt=""
                />
                {/* Hover Action Icons */}
                <div className="absolute w-full flex justify-center items-center gap-2 -bottom-10 group-hover:bottom-20 transition-all opacity-0 group-hover:opacity-100">
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
              <div className=" text-black font-semibold  px-3 my-2">
                <h2>Product Name</h2>
                <span>$656</span>
                <div className="flex">
                  <Ratings ratings={2} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopProducts;
