import React, { useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const user = true;
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const wishlist_count = 5;
  return (
    <div className="w-full bg-white relative">
      {/* first header */}
      <div className="header-top bg-green-300 md-lg:hidden ">
        <div className="w-[85%] lg:w-[90%] mx-auto flex">
          <div className="flex w-full justify-between items-center h-[50px]   ">
            <ul className="flex justify-center gap-8 font-semibold after:absolute after:h-[18px] after:w-[1px] after:bg-slate-500 ">
              <li className="flex flex-row justify-center items-center gap-2 text-sm">
                <span>
                  <MdOutlineMarkEmailRead />
                </span>
                <span>support@gmail.com</span>
              </li>

              <li className="flex relative justify-center items-center gap-2 text-sm ">
                <FaMobileScreen />
                <span>(+91)96654543354</span>
              </li>
            </ul>
          </div>
          <div className="flex  gap-8 items-center">
            <div className="flex  w-full justify-between items-center h-[50px]">
              <ul className="flex gap-4 justify-center items-center text-md">
                <li>
                  <CiFacebook />
                </li>
                <li>
                  <FaGithub />
                </li>
                <li>
                  <FaInstagram />
                </li>
              </ul>
            </div>
            <div className="flex flex-row">
              {user ? (
                <Link className="flex flex-row justify-center items-center gap-2 font-semibold">
                  <span>
                    <FaUser />
                  </span>
                  <span>Naveen</span>
                </Link>
              ) : (
                <Link className="flex flex-row justify-center items-center gap-2 font-semibold">
                  <span>
                    <FaLock />
                  </span>
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* second header */}
      <div className="">
        <div className=" w-[85%] lg:w-[90%] mx-auto  ">
          <div className="h-[80px] md-lg:[100px] flex justify-between items-center ">
            {/* logo */}
            <div className="flex justify-between items-center w-3/12 md-lg:w-full  ">
              <Link>
                <img
                  className="h-[60px]"
                  src="http://localhost:3000/images/logo.png"
                  alt=""
                />
              </Link>
              {/* menu icon for small to lg-md screen*/}
              <div
                onClick={() => setShowSidebar(!showSidebar)}
                className="hidden md-lg:flex cursor-pointer text-2xl hover:bg-black w-10 h-10 rounded-full justify-center items-center hover:text-white"
              >
                <FaList />
              </div>
            </div>
            {/* nav bar */}
            <div className="w-9/12 md-lg:w-full md-lg:hidden  ">
              <div className="">
                <ul className="flex justify-center items-center gap-10 font-bold">
                  <li
                    className={`cursor-pointer px-3 py-2 rounded-md ${
                      pathname === "/" ? "bg-blue-700 text-white" : ""
                    } `}
                  >
                    Home
                  </li>
                  <li
                    className={`cursor-pointer px-3 py-2 rounded-md ${
                      pathname === "/shop" ? "bg-blue-700 text-white" : ""
                    } `}
                  >
                    Shop
                  </li>
                  <li
                    className={`cursor-pointer px-3 py-2 rounded-md ${
                      pathname === "/blog" ? "bg-blue-700 text-white" : ""
                    } `}
                  >
                    Blog
                  </li>
                  <li
                    className={`cursor-pointer px-3 py-2 rounded-md ${
                      pathname === "/contact" ? "bg-blue-700 text-white" : ""
                    } `}
                  >
                    Contact Us
                  </li>
                </ul>
              </div>
            </div>
            {/* cart */}
            <div className="md-lg:hidden flex justify-center items-center gap-6 ">
              <div className="relative">
                <span className="text-green-600 w-[30px] h-[30px] rounded-full bg-slate-200 flex justify-center items-center text-lg ">
                  <FaHeart />
                </span>
                <div className="text-white text-[10px]  absolute w-[17px] h-[17px] -top-[5px] -right-[5px] bg-red-600 rounded-full flex justify-center items-center">
                  {wishlist_count}
                </div>
              </div>
              <div className="relative">
                <span className="text-green-600 w-[30px] h-[30px] rounded-full bg-slate-200 flex justify-center items-center text-xl ">
                  <MdShoppingCart />
                </span>
                <div className="text-white text-[10px]  absolute w-[17px] h-[17px] -top-[5px] -right-[5px] bg-red-600 rounded-full flex justify-center items-center">
                  {wishlist_count}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* responsive side bar */}
      <div className="hidden md-lg:block">
        {/* sidebar background */}
        <div
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
          className={`bg-black absolute top-0 left-0 transition-all duration-200  w-screen h-screen opacity-30 z-20 ${
            showSidebar ? "visible" : "invisible"
          } `}
        ></div>
        {/* sidebar */}
        <div
          className={`fixed transition-all z-[500] duration-200 py-8 px-6  w-[270px] h-screen top-0  bg-white ${
            showSidebar ? "left-0" : "-left-[350px]"
          }`}
        >
          {/* logo */}
          <div className="flex flex-col justify-start  gap 6">
            <div className="mb-5">
              <div className="w-9/12">
                <Link>
                  <img
                    className="h-[60px]"
                    src="http://localhost:3000/images/logo.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex flex-col w-9/12 justify-center items-center">
                {user ? (
                  <Link className="flex flex-col justify-center items-center  font-semibold">
                    <span className="w-[30px] h-[30px] bg-slate-200 flex justify-center items-center rounded-full hover:bg-slate-400">
                      <FaUser />
                    </span>
                    <span>Naveen</span>
                  </Link>
                ) : (
                  <Link className="w-[30px] h-[30px] bg-slate-200 flex justify-center items-center rounded-full hover:bg-slate-400">
                    <span>
                      <FaLock />
                    </span>
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>

            <div className="">
              <ul className="flex flex-col justify-start gap-3 font-bold">
                <li
                  className={`cursor-pointer px-3 py-2 rounded-md ${
                    pathname === "/" ? "bg-blue-700 text-white" : ""
                  } `}
                >
                  Home
                </li>
                <li
                  className={`cursor-pointer px-3 py-2 rounded-md ${
                    pathname === "/shop" ? "bg-blue-700 text-white" : ""
                  } `}
                >
                  Shop
                </li>
                <li
                  className={`cursor-pointer px-3 py-2 rounded-md ${
                    pathname === "/blog" ? "bg-blue-700 text-white" : ""
                  } `}
                >
                  Blog
                </li>
                <li
                  className={`cursor-pointer px-3 py-2 rounded-md ${
                    pathname === "/contact" ? "bg-blue-700 text-white" : ""
                  } `}
                >
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
