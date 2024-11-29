/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Header from "./../componets/Header";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../componets/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ratings from "../componets/Ratings";
import { FaHeart } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Reviews from "../componets/Reviews";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Details = () => {
  const images = [1, 2, 3, 4, 5, 6];
  const [image, setImage] = useState("");
  const [state, setState] = useState("reviews");
  const discount = 5;
  const stock = 3;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 800, min: 750 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 750, min: 600 },
      items: 3,
    },
    xsmobile: {
      breakpoint: { max: 610, min: 460 },
      items: 2,
    },
    xxsmobile: {
      breakpoint: { max: 460, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      <Header />
      {/* page heading with image */}
      <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[180px] my-5  bg-cover bg-left'>
        <div className="bg-[#2422228a] w-full h-full ">
          <div className="flex flex-col justify-center items-center text-white h-full w-full gap-2 text-xl ">
            <h1 className="font-extrabold">Product Details Page</h1>
            <div className="flex flex-row justify-center items-center text-base gap-2">
              <Link to="/">Home</Link>
              <span>
                <FaAngleRight />
              </span>
              <Link>Product</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumbs  */}
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className="flex justify-start items-center gap-2 m-2 font-semibold ">
            <Link to="/">Home</Link>
            <span>
              <FaAngleRight />
            </span>
            <Link to="/">Category</Link>
            <span>
              <FaAngleRight />
            </span>
            <span>Product Name </span>
          </div>
        </div>
      </section>
      {/* product details with product image and product details */}
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className="grid grid-cols-2 md-lg:grid-cols-1 gap-8">
            {/* product image layout */}
            <div>
              <div>
                <img
                  className="h-[400px] w-full"
                  src={
                    image
                      ? `http://localhost:3000/images/products/${image}.webp`
                      : `http://localhost:3000/images/products/${images[2]}.webp`
                  }
                  alt="images"
                />
                {/* carousel */}
                <div className="my-8">
                  {images && (
                    <Carousel
                      autoPlay={true}
                      infinite={true}
                      arrows={true}
                      showDots={false}
                      transitionDuration={500}
                      responsive={responsive}
                    >
                      {images.map((img, index) => (
                        <div key={index} onClick={() => setImage(img)}>
                          <div className=" relative flex justify-center items-center ">
                            <img
                              src={`http://localhost:3000/images/products/${
                                index + 1
                              }.webp`}
                              alt="images"
                              className="h-[120px]   object-cover cursor-pointer "
                            />
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  )}
                </div>
              </div>
            </div>
            {/* product details layout */}
            <div className="flex flex-col justify-start">
              <div>
                <div className="flex flex-col justify-start gap-4">
                  <h1 className="text-2xl font-bold ">Product Name</h1>
                  {/* rating */}
                  <div className="flex justify-start items-center gap-5">
                    <div className="flex ">
                      <Ratings ratings={4.5} />
                    </div>

                    <span>(32 reviews)</span>
                  </div>
                  {/* discount and price */}
                  <div>
                    {discount !== 0 ? (
                      <div className="flex justify-start gap-3">
                        <h2 className=" text-red-600 text-xl font-bold">
                          Price
                        </h2>
                        <h2 className="line-through text-red-600 text-xl font-bold">
                          ₹500
                        </h2>
                        <h2 className=" text-red-600 text-xl font-bold">
                          ₹{500 - Math.floor((discount * 500) / 100)} (-
                          {discount}%)
                        </h2>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <h2 className=" text-red-600 text-xl font-bold">
                          Price :
                        </h2>
                        <h2 className=" text-red-600 text-xl font-bold">
                          ₹500
                        </h2>
                      </div>
                    )}
                  </div>
                  {/* description */}
                  <div className="text-slate-600">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley
                    </p>
                  </div>
                  {/* count product & cart &  wishlist  */}
                  <div className="flex justify-start items-center gap-4 mt-5">
                    {stock ? (
                      <div className="flex gap-4 ">
                        <div className="w-[120px] bg-zinc-300 flex justify-center items-center gap-5 px-2 py-2 font-bold rounded-md text-xl">
                          <button className="cursor-pointer w-[20px] h-[20px] flex justify-center rounded-full items-center hover:bg-zinc-600 hover:text-white">
                            -
                          </button>
                          <div className="text-lg font-semibold">{2}</div>
                          <button className="cursor-pointer w-[20px] h-[20px] flex justify-center rounded-full items-center hover:bg-zinc-600 hover:text-white">
                            +
                          </button>
                        </div>
                        <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40 bg-[#059473] text-white">
                          Add To Cart
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="h-[50px] w-[50px] flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white">
                      <FaHeart />
                    </div>
                  </div>
                  {/* chat & buy & share and avilability */}
                  <div className="flex flex-row  py-5 gap-5">
                    {/* left side */}
                    <div className="w-[150px] text-black font-bold text-base flex flex-col gap-5">
                      <span>Availability</span>
                      <span>Share On</span>
                    </div>
                    {/* right side */}
                    <div className="flex  gap-5 flex-col">
                      <span
                        className={`${
                          stock ? "text-green-800" : "text-red-500"
                        } font-bold`}
                      >
                        {stock ? `In Stock(${stock})` : "Out Of Stock"}
                      </span>
                      <ul className="flex justify-start items-center gap-3">
                        <li>
                          <a
                            className="w-[30px] h-[30px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-indigo-500 rounded-full text-white"
                            href="#"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            className="w-[30px] h-[30px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-cyan-500 rounded-full text-white"
                            href="#"
                          >
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            className="w-[30px] h-[30px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-purple-500 rounded-full text-white"
                            href="#"
                          >
                            <FaLinkedin />
                          </a>
                        </li>
                        <li>
                          <a
                            className="w-[30px] h-[30px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-blue-500 rounded-full text-white"
                            href="#"
                          >
                            <FaGithub />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* buy now and chat  */}
                  <div className="flex gap-3">
                    {stock ? (
                      <button className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40 bg-[#247462] text-white">
                        Buy Now
                      </button>
                    ) : (
                      ""
                    )}
                    <Link
                      to="#"
                      className="px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-red-500/40 bg-red-500 text-white"
                    >
                      Chat Seller
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* reviews & description & related products */}
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto pb-16">
          <div className="flex flex-wrap">
            {/*  Description and Reviews */}
            <div className="w-[72%] md-lg:w-full">
              {/* button for description and reviews */}
              <div className="grid grid-cols-2">
                <button
                  onClick={() => setState("reviews")}
                  className={`bg-slate-500 text-white py-2  ${
                    state === "reviews" ? "bg-green-800" : ""
                  } `}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setState("description")}
                  className={`bg-slate-500 text-white py-2  ${
                    state === "description" ? "bg-green-800" : ""
                  } `}
                >
                  Description
                </button>
              </div>
              {/* reviews and description content */}
              <div>
                {state === "reviews" ? (
                  <Reviews />
                ) : (
                  <p className="mt-10">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galleyLorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s, when an unknown printer took a galleyLorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galleyLorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley
                  </p>
                )}
              </div>
            </div>
            {/* Related Products */}
            <div className="w-[28%] md-lg:w-full">
              <div className="pl-4 md-lg:pl-0">
                <div className="bg-slate-500 py-2 text-white pl-4">
                  <h2>From Easy Shop</h2>
                </div>
                <div className="flex flex-col gap-5 mt-3 border p-3">
                  {[1, 2, 3].map((p, i) => {
                    return (
                      <div key={i} className="p-2 shadow-xl">
                        <Link className="block">
                          <div className="relative h-[200px] ">
                            <img
                              className="w-full h-full"
                              src={`http://localhost:3000/images/products/${p}.webp`}
                              alt=""
                            />
                            {discount !== 0 && (
                              <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                                {discount}%
                              </div>
                            )}
                          </div>

                          <h2 className="text-slate-600 py-1 font-bold">
                            Product Name
                          </h2>
                          <div className="flex gap-2">
                            <h2 className="text-lg font-bold text-slate-600">
                              $434
                            </h2>
                            <div className="flex items-center gap-2">
                              <Ratings ratings={4.5} />
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Proudcts */}
      <section>
        <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto mb-10">
          <h2 className="text-2xl py-8 text-slate-600">Related Products </h2>
          <div>
            <Swiper
              slidesPerView="auto"
              breakpoints={{
                1280: {
                  slidesPerView: 4,
                },
                565: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={25}
              loop={true}
              pagination={{
                clickable: true,
                el: ".custom_bullet",
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {[1, 2, 3, 4, 5, 6].map((p, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Link className="block shadow-2xl">
                      <div className="relative h-[270px] flex flex-col ">
                        {/* image */}
                        <div className="w-full h-[270px]">
                          <img
                            className="h-[270px] w-full"
                            src={`http://localhost:3000/images/products/${p}.webp`}
                            alt=""
                          />
                          <div className="absolute h-full w-full top-0 left-0 bg-[#000] opacity-25 hover:opacity-50 transition-all duration-500"></div>
                        </div>
                        {/* discount */}
                        {discount !== 0 && (
                          <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                            {discount}%
                          </div>
                        )}
                      </div>
                      <div>
                        {/* product details */}
                        <div className="p-4 flex flex-col gap-1 text-black ">
                          <h2 className="text-slate-600 text-lg font-bold">
                            Product Name
                          </h2>
                          <div className="flex justify-start items-center gap-3 ">
                            <h2 className="text-lg font-bold text-slate-600">
                              $434
                            </h2>
                            <div className="flex">
                              <Ratings ratings={4.5} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="w-full flex justify-center items-center py-8">
            <div className="custom_bullet justify-center gap-3 !w-auto"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Details;
