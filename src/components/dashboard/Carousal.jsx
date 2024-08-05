import React from "react";
import { Carousel } from "react-responsive-carousel";
import { cloth } from "../../util/Products";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousal = () => {
  return (
    <div className="mx-auto container text-center bg-gray-200 font-poppins my-10 relative">
      <Carousel
        autoPlay={true}
        interval={5000} // Auto slide interval in milliseconds
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <FaArrowLeft
              onClick={onClickHandler}
              title={label}
              className="absolute left-10 top-1/2"
            />
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <FaArrowRight
              onClick={onClickHandler}
              title={label}
              className="absolute right-10 top-1/2"
            />
          )
        }
      >
        {cloth.map((item, idx) => (
          <div key={idx}>
            <div className="md:flex  justify-center items-center md:w-full mx-auto ">
              <section className=" bg-[#ebeff0] py-6 w-full md:w-[15%] lg:w-[20%] mx-auto md:mx-0">
                <h1 className="text-xl md:text-4xl">{item.name}</h1>
                <img
                  src={item.img}
                  alt="clothe"
                  className="h-64 md:h-96 mx-auto object-contain"
                />
                <h1 className="font-bold">Price: {item.price}</h1>
                <button className="border-2 border-gray-800 py-2.5 px-3 mt-2">
                  GO TO SHOP
                </button>
              </section>
              <section className="hidden md:block h-full ">
                <img
                  src={item.image}
                  alt="clothe"
                  className=" h-[542px] w-full md:w-[40%] lg:w-[50%] xl:w-[75%] object-contain"
                />
              </section>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousal;
