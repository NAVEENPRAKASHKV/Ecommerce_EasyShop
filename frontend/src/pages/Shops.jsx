import React, { useState } from "react";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { Range } from "react-range";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import Products from "../componets/products/Products";

const Shops = () => {
  const [filter, setFilter] = useState(true);
  const [state, setState] = useState({
    values: [50, 50000],
  });
  const [rating, setRating] = useState("");
  const categorys = [
    "Mobiles",
    "Laptops",
    "Speakers",
    "Top wear",
    "Footwear",
    "Watches",
    "Home Decor",
    "Smart Watches",
  ];

  return (
    <div>
      <Header />
      {/* filter */}
      <section className="py-16">
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          {/* button for filter in the medium range screen responsive */}
          <div className={` md:block hidden ${!filter ? "mb-6" : "mb-0"} `}>
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2 px-3 bg-indigo-500 text-white"
            >
              Filter Product
            </button>
          </div>
          {/* category list */}
          <div className="w-full flex flex-wrap ">
            {/* responsive hidden sidebar */}
            <div
              className={`w-3/12 md-lg:w-4/12 md:w-full pr-8  ${
                filter
                  ? "md:h-0 md:overflow-hidden md:mb-6"
                  : "md:h-auto md:overflow-auto md:mb-0"
              } `}
            >
              {/* category */}
              <div>
                <h2 className="text-3xl font-bold mb-3 text-slate-600">
                  Category
                </h2>
                <div className="py-2">
                  {categorys.map((c, i) => (
                    <div
                      key={i}
                      className="flex justify-start items-center gap-2 py-1"
                    >
                      <input type="checkbox" id={c} />
                      <label
                        className="text-slate-600 block cursor-pointer"
                        htmlFor={c}
                      >
                        {c}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {/* price range */}
              <div>
                <div className="py-2 flex flex-col gap-5 md:w-6/12 px-2  ">
                  <h2 className="text-3xl font-bold mb-3 text-slate-600">
                    Price
                  </h2>

                  <Range
                    step={50}
                    min={50}
                    max={50000}
                    values={state.values}
                    onChange={(values) => setState({ values })}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="w-full h-[6px] bg-slate-200 rounded-full cursor-pointer"
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        className="w-[15px] h-[15px] bg-[#059473] rounded-full"
                        {...props}
                      />
                    )}
                  />
                </div>
                <span className="text-slate-800 font-bold text-lg">
                  ₹{Math.floor(state.values[0])} - ₹
                  {Math.floor(state.values[1])}
                </span>
              </div>
              {/* rating */}
              <div className="my-4">
                <h2 className="text-3xl font-bold mb-3 text-slate-600">
                  Rating
                </h2>
                {/* 5 star */}
                <div
                  onClick={() => setRating(5)}
                  className="text-orange-500 flex  justify-evenly gap-3 items-center hover:shadow-md w-8/12 hover:bg-slate-100 py-2 "
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                </div>
                {/* 4 star */}
                <div
                  onClick={() => setRating(4)}
                  className="text-orange-500 flex  justify-evenly gap-3 items-center hover:shadow-md w-8/12 hover:bg-slate-100 py-2 "
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>
                {/* 3 star */}
                <div
                  onClick={() => setRating(3)}
                  className="text-orange-500 flex  justify-evenly gap-3 items-center hover:shadow-md w-8/12 hover:bg-slate-100 py-2 "
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>
                {/* 2 star */}
                <div
                  onClick={() => setRating(2)}
                  className="text-orange-500 flex  justify-evenly gap-3 items-center hover:shadow-md w-8/12 hover:bg-slate-100 py-2 "
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>
                {/* 1 star */}
                <div
                  onClick={() => setRating(1)}
                  className="text-orange-500 flex  justify-evenly gap-3 items-center hover:shadow-md w-8/12 hover:bg-slate-100 py-2 "
                >
                  <span>
                    <AiFillStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                  <span>
                    <CiStar />
                  </span>
                </div>
              </div>
              {/* latest product  */}
              <div>
                <Products title="Latest Products" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shops;
