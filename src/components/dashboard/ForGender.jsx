//ReusableComponent
import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FiCheck, FiHeart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showData } from "../../features/DetailSlice";
import { cartData } from "../../features/CartSlice";
import { listData } from "../../features/WishlistReducer";
import { useGetAllProductQuery } from "../../services/productQuery";

const ForGender = ({data}) => {
  const navigate = useNavigate();
  const handleDetail = (item) => {
    dispatch(showData([item]));
    navigate("/details");
  };

  const [isClicked, setIsClicked] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState(null);
  const handleSize = (item) => {
    setIsClicked(null);
    dispatch(cartData({ ...item, size: selectedSize }));
    //console.log("data", { ...item, size: selectedSize });
  };

  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = React.useState(null);

  const { list } = useSelector((state) => state.wishlist);
  const isItemInList = (item) => {
    return list.some((listItem) => listItem.id === item.id);
  };

  const { currentPage, blogsPerPage } = useSelector((state) => state.blogslice);
  //this is for no.of shoes to show in a page
  const lastIndex = currentPage * blogsPerPage;
  const firstIndex = lastIndex - blogsPerPage;
  const shoes = data?.slice(firstIndex, lastIndex);
  console.log("shoe img:",shoes.map((item)=>item.image));

  return (
    <div> 
    <div className=" flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-poppins gap-x-2 md:gap-x-3 mx-2 font-medium">
      {shoes?.map((item) => {
        return (
          <div
            className={` mt-4 text-[10px] md:text-lg ${
              isHovered === item.id
                ? "shadow shadow-gray-500 transition-transform duration-500 scale-125 md:scale-110 z-10 overflow-hidden backdrop-blur-lg"
                : " duration-500"
            }`}
            key={item.id}
            onMouseEnter={() => setIsHovered(item.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img src={item.image.img1} className="w-full h-[55%]" onClick={() => handleDetail(item)}/>
            <h1 className="max-w-48 line-clamp-2 text-center">{item.title}</h1>
            <h2 className="text-lime-500 text-center font-semibold">NPR, {item.price}</h2>

            <div className={`flex items-center justify-evenly duration-300 fade-in-block opacity-${
             isHovered === item.id ? "100" : "0" } 
             ${isHovered === item.id ? "visible" : "invisible"} 
             transition-opacity duration-300 ease-in-out`}>
              <div className=" w-full">
                <section className="flex justify-evenly py-4">
                  {isItemInList(item) ? (
                    <FiCheck className="text-sm md:text-2xl" />
                  ) : (
                    <FiHeart
                      className="text-sm md:text-2xl"
                      onClick={() => dispatch(listData(item))}
                    />
                  )}
                  <section className=" border-l border-r border-black px-2 md:px-3">
                    <PiShoppingCartSimpleBold onClick={() => setIsClicked(item.id)}
                      className="text-sm md:text-2xl "/>
                  </section>
                  {isClicked === item.id && (
                    <div
                      className=" absolute top-0 bg-neutral-300 bg-opacity-40 
                       font-poppins w-full h-1/3 md:h-1/2 md:text-sm text-[10px] font-light"
                      onMouseLeave={() => setIsClicked(null)}
                    >
                      <h1 className=" bg-opacity-15 text-center my-1">
                        Select Size
                      </h1>
                      <div className="flex justify-center space-x-0.5 md:space-x-2 flex-wrap gap-y-1">
                        {[37, 38, 39, 40, 41, 42, 43].map((size) => (
                          <button key={size}
                            className={`px-2 py-1.5 ${
                              selectedSize === size
                                ? "bg-indigo-500 text-white"
                                : "bg-gray-200"
                            } backdrop-blur rounded`}
                            onClick={() => setSelectedSize(size)}>
                            {size}
                          </button>
                        ))}
                      </div>
                      <button className={`mt-1 md:mt-2 px-2 py-1 md:py-1.5 md:text-sm text-[10px] 
                        ${selectedSize
                            ? "bg-black text-white"
                            : "bg-neutral-300"
                        } justify-center w-[95%] md:w-4/5 flex mx-auto rounded`}
                        onClick={() => handleSize(item)}
                        disabled={!selectedSize}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  )}

                  <IoSearch className="text-sm md:text-2xl" />
                </section>
              </div>
            </div>
          </div>
        );
      })}
    </div> 
    
    </div>
  );
};

export default ForGender;
