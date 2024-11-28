import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-green-100 w-full">
      <div className="w-[85%] mx-auto flex flex-wrap  py-7">
        <div className=" w-full mb-5 flex flex-wrap">
          {/* section 1 */}
          <div className="w-3/12 md-lg:w-6/12 sm:w-full ">
            <img
              className="w-[150px] mb-3"
              src="http://localhost:3000/images/logo.png"
              alt=""
            />
            <div className="flex flex-col gap-2 text-sm">
              <span>Address:TechnoPark,kochi,Kerala</span>
              <span>Phone:987676687688</span>
              <span>Email:easyshop@gmail.com</span>
            </div>
          </div>
          {/* section 2 */}
          <div className="w-3/12 md-lg:w-6/12  sm:w-full my-2 flex flex-col text-sm gap-2 ">
            <h2 className="text-lg font-bold">Make Money with Us</h2>
            <span>Sell on Easy Shop</span>
            <span>Sell Your Services on Easy Shop</span>
            <span>Supply to Easy Shop</span>
            <span>Sell Your Apps on Grogin</span>
            <span>Become an Affilate</span>
            <span>Advertise Your Products</span>
          </div>

          {/* section 3 */}
          <div className="w-3/12 md-lg:w-6/12 sm:w-full  my-2 flex flex-col text-sm gap-2 ">
            <h2 className="text-lg font-bold">Let Us Help You</h2>
            <span>Accessibility Statement</span>
            <span>Returns & Replacements</span>
            <span>Shipping Rates & Policies</span>
            <span>Refund and Returns Policy</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
          {/* section 4 */}
          <div className="w-3/12 md-lg:w-6/12 sm:w-full  my-2 flex flex-col text-sm gap-2 ">
            <h2 className="text-lg font-bold">Join Our Team</h2>
            <input
              className="h-8 mt-5 px-4 w-[250px]"
              placeholder="Enter your email address"
              type="text"
            />
            <button className="bg-slate-600 px-3 py-1 text-white w-[250px]">
              Subscribe
            </button>
            <p className="text-[10px] text-blue-700">
              By subscribing you agree to our Terms & Conditions and Privacy &
              Cookies Policy.
            </p>
          </div>
        </div>
        {/* copy right */}
        <div className="w-full text-center ">
          <div className="h-[1px] w-full bg-slate-200"></div>
          <p className="flex justify-center items-center gap-2 text-sm">
            Copyrighy <FaRegCopyright /> 2024 All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
