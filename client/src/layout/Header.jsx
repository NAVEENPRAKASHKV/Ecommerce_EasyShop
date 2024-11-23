import React from "react";
import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="bg-white  h-[65px] ml-0 lg:ml-[240px] rounded-md flex  justify-between items-center px-5 transition-all">
        {/* toggle button for side bar */}
        <div
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
          className="w-[135px] flex lg:hidden cursor-pointer "
        >
          <span>
            <FaList color="#000" />
          </span>
        </div>
        {/* header content */}
        <div>
          <input
            className=" hidden md:block bg-slate-300 outline-none overflow-hidden h-7 px-2 py-1 rounded-md focus:border-2 focus:border-blue-500 "
            type="text"
            name="search"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-end items-center gap-3">
          <div>
            <div className="font-bold text-base">Naveen Praksh K V</div>
            <div className=" text-sm text-right">Admin</div>
          </div>
          <div className="w-10 h-10 ">
            <img
              className="rounded-full"
              src="http://localhost:3000/images/admin.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
