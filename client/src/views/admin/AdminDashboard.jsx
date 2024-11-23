import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineSell } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

const AdminDashboard = () => {
  return (
    <div className="flex justify-center">
      <div className="px-2 sm:px-7">
        {/* total summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 ">
          {/* Total sales */}
          <div className="w-[300px] xl:w-[200px] h-[70px] rounded-md bg-white flex justify-between  items-center px-3">
            <div>
              <div className="flex justify-start items-center gap-1">
                <FaRupeeSign />
                <h3 className="font-bold text-xl">56637</h3>
              </div>
              <h6>Total Sales</h6>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-700 flex justify-center items-center">
              <FaRupeeSign className="text-2xl" color="#fff" />
            </div>
          </div>
          {/* Total Products */}
          <div className="w-[300px] xl:w-[200px] h-[70px] rounded-md bg-white flex justify-between  items-center px-3">
            <div>
              <div className="flex justify-start items-center gap-1">
                <h3 className="font-bold text-xl">56</h3>
              </div>
              <h6>Products</h6>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-700 flex justify-center items-center">
              <MdOutlineProductionQuantityLimits
                className="text-2xl"
                color="#fff"
              />
            </div>
          </div>
          {/* Total sellers */}
          <div className="w-[300px] xl:w-[200px] h-[70px] rounded-md bg-white flex justify-between  items-center px-3">
            <div>
              <div className="flex justify-start items-center gap-1">
                <h3 className="font-bold text-xl">56</h3>
              </div>
              <h6>Sellers</h6>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-700 flex justify-center items-center">
              <MdOutlineSell className="text-2xl" color="#fff" />
            </div>
          </div>
          {/* Orders */}
          <div className="w-[300px] xl:w-[200px]  h-[70px] rounded-md bg-white flex justify-between  items-center px-3">
            <div>
              <div className="flex justify-start items-center gap-1">
                <FaRupeeSign />
                <h3 className="font-bold text-xl">56637</h3>
              </div>
              <h6>Orders</h6>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-700 flex justify-center items-center">
              <GiShoppingCart className="text-2xl" color="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
