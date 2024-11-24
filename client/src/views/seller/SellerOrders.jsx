import React from "react";
import { useState } from "react";
import Pagination from "./../Pagination";
import Search from "../../components/Search";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const SellerOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-2 md:pr-7">
      <div className="w-full p-4">
        {/* header of order list */}
        <div>
          {/* Table Header */}
          <Search
            setPerPage={setPerPage}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        {/* content of order table*/}
        <div className="relative overflow-x-auto">
          <div>
            {/* table heading */}
            <div className=" bg-slate-600 p-2 flex">
              <div className="font-bold uppercase text-white text-sm w-[25%] ">
                Order Id
              </div>
              <div className="font-bold uppercase text-white text-sm w-[13%]  ">
                Price
              </div>
              <div className="font-bold uppercase text-white text-sm w-[18%]  ">
                Payment Status
              </div>
              <div className="font-bold uppercase text-white text-sm w-[18%] ">
                order status
              </div>
              <div className="font-bold uppercase text-white text-sm w-[18%] ">
                Action
              </div>
            </div>
            {/* table content */}
            <div className="bg-white">
              <div className="  p-2 my-2 flex">
                <div className=" text-black text-sm w-[25%] ">Order Id</div>
                <div className=" text-black text-sm w-[13%]  ">Price</div>
                <div className="  text-black text-sm w-[18%]  ">
                  Payment Status
                </div>
                <div className=" text-black text-sm w-[18%] ">order status</div>

                <div className=" text-black text-lg w-[8%] cursor-pointer  ">
                  <Link to={`/seller/dashboard/order/details/${4}`}>
                    <FaRegEdit />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perPage={perPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default SellerOrders;
