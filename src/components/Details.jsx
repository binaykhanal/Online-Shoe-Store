import { Button } from "antd";
import React from "react";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { newArrivals } from "../util/Products";
import RelatedProducts from "./common/RelatedProducts";
import { cartData } from "../features/CartSlice";
import { detailsList } from "../util/Products";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { decrease, increase } from "../features/DetailSlice";
import { RiArrowLeftWideLine, RiArrowRightWideFill } from "react-icons/ri";
import { NextArrow, PrevArrow } from "./dashboard/Arrows";

const Details = () => {
  const { detail } = useSelector((state) => state.detailslice);
  console.log("quantity",detail[0].quantity);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  //const qty=cart.map((item)=>item.quantity)

  const [activePath, setActivePath] = React.useState();
  const location = useLocation(); // gets the current location

  React.useEffect(() => {
    setActivePath(location.pathname);
    // updates active path when the route changes
  }, [location]);

  const [selectedSize, setSelectedSize] = React.useState(null);
  const handleSize = (item) => {
    dispatch(cartData({ ...item, size: selectedSize }));
    //console.log("data", { ...item, size: selectedSize });
  };
  return (
    <div className="container mx-auto lg:my-10 my-5 ">
      {detail.map((item, idx) => {
        return (
          <div
            key={idx}
            className=" md:flex  justify-center mx-auto font-poppins gap-x-5 text-lg "
          >
            <div className=" relative">
            <Carousel className=" w-[300px] lg:w-[385px] mx-auto " swipeable showStatus={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <RiArrowLeftWideLine onClick={onClickHandler} className="absolute top-[40%] left-3 text-4xl cursor-pointer z-10 opacity-0 duration-300 hover:opacity-100" />
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <RiArrowRightWideFill onClick={onClickHandler} className=" absolute top-[40%] cursor-pointer right-3 text-4xl z-10 opacity-0 duration-300 hover:opacity-100"/>
              )
            }>
            {Object.values(item.image).map((subItem, idx) => (
              <img key={idx} src={subItem} alt={`img ${idx + 1}`} className="object-cover" />
            ))}
            </Carousel>
            </div>
            
            
            <div className=" flex-1 space-y-2">
              <h1 className=" text-lg md:text-3xl">{item.title}</h1>
              <h1 className=" text-lime-500 font-semibold text-xl">NPR, {item.price}</h1>
              <ul className=" list-disc pl-5 text-neutral-500 text-[16px]">
                <li>{item.color}</li>
                <li>{item.category}</li>
              </ul>
              <section className=" my-1 ">
                <span className=" font-semibold">SIZE:</span>
                <section className=" space-x-1.5">
                {[37, 38, 39, 40, 41, 42, 43].map((size) => (
                  <button key={size}
                    className={`px-3 py-1.5 duration-500 rounded-lg ${
                      selectedSize === size
                        ? "bg-green-500 text-white ring-2 ring-black"
                        : "bg-gray-200"
                    } backdrop-blur rounded`}
                    onClick={() => setSelectedSize(size)}>
                    {size}
                  </button>
                ))}
                </section>

              </section>
              <div className=" flex items-center font-poppins my-2">
                <section className=" flex ">
                  <button
                    className=" border-gray-300 border-2 w-8 h-10 flex items-center focus:bg-green-300 
                    justify-center" onClick={() => dispatch(increase(item))}
                  >
                    <FaPlus />
                  </button>
                  <h2 className=" border-gray-300 border-2 w-8 h-10 flex items-center justify-center">
                    {item.quantity}
                  </h2>
                  <button
                    className=" border-gray-300 border-2 w-8 h-10 flex items-center focus:bg-red-600 
                    justify-center"  onClick={() => dispatch(decrease(item))}
                  >
                    <FaMinus />
                  </button>
                </section>
                <Button
                  className={`rounded-none mx-2 h-10 font-semibold ${
                    selectedSize
                      ? "bg-black text-white"
                      : "bg-gray-300 text-black"
                  } `}
                  onClick={() => handleSize(item)}
                  disabled={!selectedSize}
                >
                  ADD TO CART
                </Button>
              </div>
              <h1 className=" flex items-center my-2">
                <FaHeart />
                Add to Wishlist
              </h1>
            </div>
          </div>
        );
      })}

      <div className=" flex text-[11px] md:text-xl font-semibold justify-evenly mx-2 my-3 md:my-5 w-full gap-x-2 cursor-pointer   ">
        {detailsList.map((item) => {
          return (
            <div key={item.id} onClick={() => navigate(item.path)}>
              <h1
                className={` py-0.5 hover:animate-pulse ${
                  activePath === item.path
                    ? " border-b-2 md:border-b-4 transition  delay-150 duration-700 border-green-600"
                    : ""
                }`}
              >
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
      <Outlet />

      <div className=" font-poppins">
        <RelatedProducts data={newArrivals} />
      </div>
    </div>
  );
};

export default Details;
