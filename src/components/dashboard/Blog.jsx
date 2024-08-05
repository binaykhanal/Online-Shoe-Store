import React from "react";
import Slider from "react-slick";
import { blogItems } from "../../util/Products";
import { NextArrow, PrevArrow } from "./Arrows";
const Blog = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-20 font-poppins group relative">
      <h1 className=" text-xl md:text-3xl font-semibold text-center py-3 ">
        Blog
      </h1>
      <div className=" text-center font-poppins ">
        <Slider {...settings}>
          {blogItems.map((item, idx) => {
            return (
              <div key={idx}>
                <div
                  className="bg-cover bg-no-repeat bg-top w-4/5 h-[220px] md:w-[295px] md:h-[290px] flex 
                  flex-col items-start hover:brightness-50 hover:scale-105 hover:transition hover:duration-700"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                >
                  <h1 className=" text-[15px] bg-slate-200 w-10 text-black ml-2 mt-2">
                    {item.date}
                  </h1>

                  <section className=" text-white mx-auto mt-6">
                    <button
                      className="bg-green-400 py-1.5 md:py-2.5 md:px-3 px-1.5 mt-2 w-3/4 
                    text-[10px] md:text-lg "
                    >
                      {item.btn}
                    </button>
                    <h1 className=" font-semibold text-sm md:text-xl">
                      {item.desc}
                    </h1>
                  </section>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
