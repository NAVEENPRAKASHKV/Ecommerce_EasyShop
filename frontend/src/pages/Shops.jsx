import React, { useState, useEffect } from "react";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import { Range } from "react-range";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import Products from "../componets/products/Products";
import { BsGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import ShopProducts from "../componets/products/ShopProducts";
import Pagination from "../componets/Pagination";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { get_products, get_categories } from "../store/reducers/homeReducer";

const Shops = () => {
  const [filter, setFilter] = useState(true);
  const [state, setState] = useState({
    values: [50, 50000],
  });
  const [rating, setRating] = useState("");
  const [styles, setStyles] = useState("grid");
  const [perPage, setPerPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const { categories, products, latest_product } = useSelector(
    (store) => store.home
  );
  useEffect(() => {
    dispatch(get_products());
    dispatch(get_categories());
  }, []);

  return (
    <div>
      <Header categories={categories} />
      {/* Breadcrumbs  */}
      {/* <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[180px] my-5  bg-cover bg-left w-full  '>
        <div className="bg-[#2422228a] w-full h-full ">
          <div className="flex flex-col justify-center items-center text-white h-full w-full gap-2 text-xl ">
            <h1 className="font-extrabold">Shop Your Dream Products</h1>
            <div className="flex flex-row justify-center items-center text-base gap-2">
              <Link to="/">Home</Link>
              <span>
                <FaAngleRight />
              </span>
              <Link>Product</Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* filter layout and product side layout */}
      <section className="py-16 ">
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          {/* button for filter in the medium screen responsive */}
          <div className={` md:block hidden ${!filter ? "mb-6" : "mb-0"} `}>
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2 px-3 bg-indigo-500 text-white"
            >
              Filter Product
            </button>
          </div>
          {/* shop page sidebar and product layout*/}
          <div className="w-full flex flex-wrap ">
            {/* responsive hidden sidebar layout */}
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
                  {categories.map((c, i) => (
                    <div
                      key={c._id}
                      className="flex justify-start items-center gap-2 py-1"
                    >
                      <input type="checkbox" id={c.categoryName} />
                      <label
                        className="text-slate-600 block cursor-pointer"
                        htmlFor={c.categoryName}
                      >
                        {c.categoryName}
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
                <Products title="Latest Products" products={latest_product} />
              </div>
            </div>
            {/* product side layout */}
            <div className="w-9/12 md-lg:w-8/12 md:w-full  ">
              {/* sorting and view change feature */}
              <div className="mb-7">
                <div className="border-[1px] border-slate-500 flex justify-between items-center px-3 py-2 ">
                  <div>15 Products Available</div>
                  <div className="flex justify-center items-center gap-4">
                    {/* sort option */}
                    <div>
                      <select className="outline-none border-2 px-2">
                        <option>--Sort By--</option>
                        <option value="high-to-low">Higher to Lower</option>
                        <option value="low-to-high">Lower to Higher</option>
                      </select>
                    </div>
                    {/* grid view */}
                    <div
                      onClick={() => setStyles("grid")}
                      className={`cursor-pointer text-xl ${
                        styles === "grid" ? "bg-slate-800 text-white" : ""
                      } h-[35px] w-[35px] rounded-full flex justify-center items-center`}
                    >
                      <BsGridFill />
                    </div>
                    {/* list view */}
                    <div
                      onClick={() => setStyles("list")}
                      className={`cursor-pointer text-xl ${
                        styles === "list" ? "bg-slate-800 text-white" : ""
                      } h-[35px] w-[35px] rounded-full flex justify-center items-center`}
                    >
                      <FaListUl />
                    </div>
                  </div>
                </div>
              </div>
              {/* product list */}
              <div className="">
                <ShopProducts styles={styles} products={products} />
              </div>
              <div className="w-full flex justify-end mt-4 pr-7">
                <Pagination
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  totalItem={10}
                  perPage={perPage}
                  showItem={Math.floor(10 / 3)}
                />
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
