import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css"; // Ensure you import the carousel styles

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
    <div className="w-[85%] mx-auto">
      <div className="my-8">
        <Carousel
          autoPlay={true} // Automatically cycles through images
          infinite={true} // Loops the carousel
          arrows={true} // Shows navigation arrows
          transitionDuration={500}
          responsive={responsive}
        >
          {categoriesList.map((img, index) => (
            <Link key={index} to="#">
              <div className="h-[150px] w-[150px]  relative rounded-full flex justify-center">
                <img
                  src={`http://localhost:3000/images/products/${
                    index + 1
                  }.webp`}
                  alt="images"
                  className="  object-cover h-[150px] w-[150px] md:h-[100px]  md:w-[100px] relative rounded-full"
                />
                <div className="absolute bottom-7 bg-slate-100 px-2 rounded-sm text-sm md:bottom-14 md:text-[10px] md:px-1">
                  {img}
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
