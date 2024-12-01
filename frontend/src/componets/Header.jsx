import React, { useEffect, useState } from "react";
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
import { IoIosCall } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = ({ categories }) => {
  const { pathname } = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const wishlist_count = 5;
  const user = false;
  const { userInfo } = useSelector((store) => store.authUser);

  return (
    <div className="w-full bg-white relative">
      {/* first header */}
      <div className="header-top bg-green-300 md-lg:hidden ">
        <div className="w-[85%] lg:w-[90%] mx-auto flex">
          {/* mobile number and email  */}
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
          {/* social media and user login */}
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
              {userInfo ? (
                <Link className="flex flex-row justify-center items-center gap-2 font-semibold">
                  <span>
                    <FaUser />
                  </span>
                  <span>{userInfo.name}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex flex-row justify-center items-center gap-2 font-semibold"
                >
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
      {/* second layer of header */}
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
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={`cursor-pointer px-3 py-2 rounded-md ${
                      pathname === "/shops" ? "bg-blue-700 text-white" : ""
                    } `}
                  >
                    <Link to="/shops">Shop</Link>
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
      {/* responsive side bar for screen md-lg */}
      <div className="hidden md-lg:block">
        {/* sidebar screen bluer background */}
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
          <div className="flex flex-col justify-start  gap 6">
            {/* logo and user */}
            <div className="mb-5">
              <div className="w-full flex justify-between items-center">
                <Link className="w-9/12">
                  <img
                    className="h-[60px]"
                    src="http://localhost:3000/images/logo.png"
                    alt=""
                  />
                </Link>
                {/* close button in sidebar */}
                <span
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="text-2xl hover:bg-red-700 w-[30px] h-[30px] hover:text-white cursor-pointer flex justify-center rounded-full items-center"
                >
                  <IoMdCloseCircle />
                </span>
              </div>
              <div className="flex flex-col w-9/12 justify-center items-center">
                {userInfo ? (
                  <Link className="flex flex-col justify-center items-center  font-semibold">
                    <span className="w-[30px] h-[30px] bg-slate-200 flex justify-center items-center rounded-full hover:bg-slate-400">
                      <FaUser />
                    </span>
                    <span>{userInfo.name}</span>
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
            {/* navigation bar */}
            <div className="">
              <ul className="flex flex-col justify-start gap-3 font-bold">
                <li
                  className={`cursor-pointer px-3 py-2 rounded-md ${
                    pathname === "/" ? "bg-blue-700 text-white" : ""
                  } `}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`cursor-pointer px-3 py-2 rounded-md ${
                    pathname === "/shop" ? "bg-blue-700 text-white" : ""
                  } `}
                >
                  <Link to="/shops">Shop</Link>
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
            {/* social media */}
            <div>
              <div className="flex  w-full justify-between items-center h-[50px] mt-9 px-3">
                <ul className="flex gap-7 justify-center items-center text-2xl">
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
            </div>
            {/* mobile */}
            <div className="flex justify-start items-center gap-2 mt-3 ">
              <span className="w-[30px] h-[30px] bg-slate-200 rounded-full flex items-center justify-center">
                <IoIosCall />
              </span>
              <span>(+91)96654543354</span>
            </div>
            {/* Email  */}
            <div className="flex justify-start items-center gap-2 mt-3 ">
              <span className="w-[30px] h-[30px] bg-slate-200 rounded-full flex items-center justify-center">
                <MdOutlineMarkEmailRead />
              </span>
              <span>support@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      {/* third layer of header */}
      <div className="w-[85%] lg:w-[90%] mx-auto  ">
        <div className="flex flex-wrap md-lg:gap-8 justify-center">
          {/* category list icon */}
          <div className="w-3/12 md-lg:w-full">
            <div className="bg-white relative">
              {/* category button */}
              <div
                onClick={() => setShowCategory(!showCategory)}
                className={`h-[50px] bg-green-700  flex justify-center items-center cursor-pointer ${
                  showCategory ? `rounded-t-md` : `rounded-md`
                }`}
              >
                <div className="flex justify-center items-center text-white gap-5 font-semibold ">
                  <span>
                    <FaList />
                  </span>
                  <span>All Category</span>
                  <span>
                    <FaChevronDown />
                  </span>
                </div>
              </div>
              {/* hidden category list  */}
              <div
                className={`bg-green-300 absolute w-full  md-lg:relative transition-all duration-500 overflow-hidden z-[9999]  ${
                  showCategory ? "h-auto rounded-b-md" : "h-0"
                }`}
              >
                <ul className="flex flex-col justify-center items-center gap-4 mt-3 mx-3  ">
                  {categories.map((item) => {
                    return (
                      <li
                        key={item._id}
                        className="font-semibold hover:bg-white w-full py-2 flex justify-start cursor-pointer"
                      >
                        <img
                          src={item.image}
                          className="w-[30px] h-[30px] rounded-full overflow-hidden mx-5"
                          alt=""
                        />
                        <Link>{item.categoryName}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* search feature */}
          <div className="w-6/12 md-lg:w-full mx-3 ">
            <div className="flex  border-2 py-2 h-[50px] justify-start items-center gap-2">
              {/* select category */}
              <div className="px-2 w-3/12 md:hidden">
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  name=""
                  id=""
                  className="px-2 py-1"
                >
                  <option value="">Select Category</option>
                  {categories.map((item) => (
                    <option key={item._id} value={item.categoryName}>
                      {item.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              {/* search input */}
              <div className="pl-4 w-9/12 flex  justify-between items-center md:w-full">
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full px-5 outline-none"
                  type="text"
                  placeholder="What do you need?"
                />
                {/* search button */}
                <button className="bg-green-700 py-3 px-3 text-white font-semibold uppercase">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
