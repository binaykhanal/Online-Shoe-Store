import React from "react";
import Slider from "react-slick";
import { FiHeart } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { cartData } from "../../features/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showData } from "../../features/DetailSlice";

const RelatedProducts = ({ data }) => {
  const [isHovered, setIsHovered] = React.useState(null);
  const navigate = useNavigate();
  const handleDetail = (item) => {
    dispatch(showData([item]));
    navigate("/details");
  };
  const dispatch = useDispatch();
  
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className=" container mx-auto w-11/12">
      <h1 className=" font-semibold text-xs md:text-xl">RELATED PRODUCTS</h1>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div
              onClick={() => handleDetail(item)}
              className={` relative flex text-center md:text-lg text-[10px]`}
              key={item.id}
              onMouseEnter={() => setIsHovered(item.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className=" relative">
                <img
                  src={item.image.img1}
                  className={` w-3/4 h-auto 
                    ${isHovered === item.id ? "scale-105 duration-700" : ""}`}
                />
                <section className=" w-3/4 text-[10px] md:text-lg">
                  <h1 className=" line-clamp-2 ">{item.title}</h1>
                  <h2 className=" text-lime-500">NPR {item.price}</h2>
                </section>
              </div>
              <div
                className={` absolute top-0 mt-1 md:mt-4 w-2 md:w-10 bg-gray-300 opacity-90 backdrop-blur 
                     rounded-2xl flex justify-center 
                    ${
                      isHovered === item.id
                        ? " scale-105 duration-500 transition ease-in-out translate-x-4	py-2 px-4"
                        : ""
                    }`}
              >
                {isHovered === item.id && (
                  <div className="space-y-1.5 md:space-y-2">
                    <FiHeart className="text-xl md:text-2xl" />
                    <PiShoppingCartSimpleBold
                      className="text-xl md:text-2xl"
                      onClick={() => dispatch(cartData(item))}
                    />
                    <IoSearch className="text-xl md:text-2xl" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default RelatedProducts;
