import React from "react";
import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import Pagination from "./../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 md:pr-7">
      <div className="w-full p-4">
        {/* header of order list */}
        <div className=" h-12 bg-slate-600 rounded-sm flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="mx-5 px-3 py-1 rounded-sm font-bold"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <input
            className=" hidden md:block bg-white outline-none overflow-hidden h-7 px-2 py-1 rounded-md focus:border-2 focus:border-blue-500 mx-5"
            type="text"
            name="search"
            placeholder="Search"
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
              <div className="font-bold uppercase text-white text-lg w-[8%]  ">
                <CiCircleChevDown />
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
                <div className=" text-black text-sm w-[18%] ">Action</div>
                <div
                  className=" text-black text-lg w-[8%] cursor-pointer  "
                  onClick={() => setShow(!show)}
                >
                  <CiCircleChevDown />
                </div>
              </div>
              {/* other orders along with main order */}
              <div
                className={`${
                  show ? "block" : "hidden"
                }  p-2 my-2 flex bg-zinc-200`}
              >
                <div className=" text-black text-sm w-[25%] ">Order Id</div>
                <div className=" text-black text-sm w-[13%]  ">Price</div>
                <div className="  text-black text-sm w-[18%]  ">
                  Payment Status
                </div>
                <div className=" text-black text-sm w-[18%] ">order status</div>
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

export default Orders;
