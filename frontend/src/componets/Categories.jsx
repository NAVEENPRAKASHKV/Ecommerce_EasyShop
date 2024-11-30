import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css"; // Import carousel styles

const Categories = ({ categories }) => {
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
    <div className="w-[85%]  mx-auto bg-white p-5">
      <div className="text-center w-full flex flex-col justify-center items-center ">
        <h2 className="text-2xl font-bold">Top Categories</h2>
        <div className="w-[70px] h-[2px] bg-green-700 text-center items-center mt-3 "></div>
      </div>
      <div className="my-8 border  ">
        <Carousel
          autoPlay={true}
          infinite={true}
          arrows={true}
          showDots={false}
          transitionDuration={500}
          responsive={responsive}
        >
          {categories.map((category, index) => (
            <Link key={category._id}>
              <div className="h-[200px] w-[200px] relative flex justify-center items-center  ">
                <img
                  src={category.image}
                  alt={category.categoryName}
                  className="h-[150px] w-[150px] md:h-[100px] md:w-[100px] object-scale-down p-2 border rounded-full"
                />
                <div className="absolute bottom-4 bg-slate-100 px-3 py-1 rounded text-sm text-center md:bottom-2 md:text-xs md:px-2">
                  {category.categoryName}
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
