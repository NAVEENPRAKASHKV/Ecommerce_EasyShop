import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation";
import { BiLogOutCircle } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [allNav, setAllNav] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const navs = getNav("seller");
    setAllNav(navs);
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } bg-zinc-500 bg-opacity-50 w-screen h-screen z-10 top-0 left-0`}
      ></div>
      <div
        className={`w-[230px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        } `}
      >
        {/* logo image */}
        <div className="h-[50px] flex justify-center items-center mb-6">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
              className="h-[50px]"
              src="http://localhost:3000/images/logo.png"
              alt="logo"
            />
          </Link>
          <span
            onClick={() => setShowSidebar(false)}
            className={`${
              showSidebar ? "visible cursor-pointer text-2xl " : "invisible"
            } `}
          >
            <IoCloseCircleSharp />
          </span>
        </div>
        {/* sidebar menu */}
        <div>
          {/* sidebar option menu */}
          <ul>
            {allNav.map((nav, index) => {
              return (
                <li key={nav.id} className="shadow-sm mb-3 mx-3 rounded-sm ">
                  <Link
                    to={nav.path}
                    className={`${
                      pathname === nav.path
                        ? "flex justify-start gap-3 items-center bg-lime-600 text-white px-1 py-1 "
                        : "flex justify-start items-center gap-3 px-2 py-1 hover:bg-lime-300"
                    }`}
                  >
                    <span>{nav.icon}</span>
                    <span>{nav.title}</span>
                  </Link>
                </li>
              );
            })}
            <li>
              {/* logout button */}
              <button className="text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1">
                <span>
                  <BiLogOutCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
