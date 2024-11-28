import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css"; // Import carousel styles

const Categories = () => {
  const categoriesList = [
    "Mobiles",
    "Laptops",
    "Speakers",
    "Top wear",
    "Footwear",
    "Watches",
    "Home Decor",
    "Smart Watches",
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 5,
    },
    mdtablet: {
      breakpoint: { max: 800, min: 750 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 750, min: 600 },
      items: 3,
    },
    xsmobile: {
      breakpoint: { max: 610, min: 460 },
      items: 3,
    },
    xxsmobile: {
      breakpoint: { max: 460, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-[85%]  mx-auto">
      <div className="text-center w-full flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-bold">Top Categories</h2>
        <div className="w-[70px] h-[2px] bg-green-700 text-center items-center mt-3 "></div>
      </div>
      <div className="my-8">
        <Carousel
          autoPlay={true}
          infinite={true}
          arrows={true}
          showDots={false}
          transitionDuration={500}
          responsive={responsive}
        >
          {categoriesList.map((category, index) => (
            <Link key={index} to={`#category-${index}`}>
              <div className="h-[150px] w-[150px] relative flex justify-center items-center rounded-full">
                <img
                  src={`http://localhost:3000/images/products/${
                    index + 1
                  }.webp`}
                  alt={category}
                  className="h-[150px] w-[150px] md:h-[100px] md:w-[100px] object-cover rounded-full"
                />
                <div className="absolute bottom-4 bg-slate-100 px-3 py-1 rounded text-sm text-center md:bottom-2 md:text-xs md:px-2">
                  {category}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Categories;
