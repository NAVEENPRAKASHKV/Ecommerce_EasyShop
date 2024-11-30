import React, { useState } from "react";
import Ratings from "./Ratings";
import RatingTemp from "./RatingTemp";
import Pagination from "./Pagination";

const Reviews = () => {
  const [perPage, setPerPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(10);
  return (
    <div className="mt-5  ">
      {/* Rating summary */}
      <div className=" gap-10 flex md:flex-col ">
        <div className="">
          <div className="flex flex-col gap-2 justify-center items-start">
            <div>
              <span className="font-bold text-[40px]">4.5</span>
              <span className="font-bold text-[20px]">/</span>
              <span className="font-bold text-[20px]">5</span>
            </div>
            <div className="flex justify-start items-center">
              <Ratings ratings={4.5} />
            </div>
            <div>
              <span>(34 reviews)</span>
            </div>
          </div>
        </div>
        {/* Rating detials */}
        <div className="flex gap-2 flex-col py-2 ">
          {/* rightside */}
          <div className="flex flex-row items-center gap-5">
            <div className="text-md flex gap-q w-[93px]">
              <RatingTemp ratings={5} />
            </div>
            <div className="h-[14px] w-[200px] bg-slate-200">
              <div className="h-full w-[60%] bg-yellow-400"></div>
            </div>
            <p className="text-sm">10</p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-md flex gap-q w-[93px]">
              <RatingTemp ratings={4} />
            </div>
            <div className="h-[14px] w-[200px] bg-slate-200">
              <div className="h-full w-[70%] bg-yellow-400"></div>
            </div>
            <p className="text-sm">10</p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-md flex gap-q w-[93px]">
              <RatingTemp ratings={3} />
            </div>
            <div className="h-[14px] w-[200px] bg-slate-200">
              <div className="h-full w-[10%] bg-yellow-400"></div>
            </div>
            <p className="text-sm">20</p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-md flex gap-q w-[93px]">
              <RatingTemp ratings={2} />
            </div>
            <div className="h-[14px] w-[200px] bg-slate-200">
              <div className="h-full w-[20%] bg-yellow-400"></div>
            </div>
            <p className="text-sm">7</p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-md flex gap-q w-[93px]">
              <RatingTemp ratings={1} />
            </div>
            <div className="h-[14px] w-[200px] bg-slate-200">
              <div className="h-full w-[30%] bg-yellow-400"></div>
            </div>
            <p className="text-sm">14</p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="text-md flex gap-q w-[93px]">
              <RatingTemp ratings={0} />
            </div>
            <div className="h-[14px] w-[200px] bg-slate-200">
              <div className="h-full w-[40%] bg-yellow-400"></div>
            </div>
            <p className="text-sm">1</p>
          </div>
        </div>
      </div>
      {/* reviews */}
      <div className="mt-5">
        <h2 className="font-bold text-lg ">Product Reviews (23)</h2>
        <div className="flex flex-col gap-8 pb-10 pt-4">
          {[1, 2, 3, 4, 5].map((rev, index) => {
            return (
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-1 ">
                    <Ratings ratings={4} />
                  </div>
                  <span className="text-slate-600">8 jan 2024</span>
                </div>
                <div className="pb-3 pt-1">
                  <h4 className="font-semibold pb-1">UserName</h4>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end">
          {
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalItem={10}
              perPage={perPage}
              showItem={Math.floor(10 / 3)}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Reviews;
