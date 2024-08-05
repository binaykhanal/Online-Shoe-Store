import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "antd";
import { FiHeart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { removeList } from "../../features/WishlistReducer";
import MyContext from "../../context/ContextApi";

const WishlistItem = () => {
  const { list } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = React.useState(null);
  const { value, updateValue,handleValue } = React.useContext(MyContext);

  return (
    <>
      <div className=" text-red-500 text-lg text-center py-2 font-poppins">
        {list.length < 1 ? (
          <>
            <h1>No any Items in the wishlist</h1>
            <Button onClick={() => updateValue("shirish")}>CHANGE</Button>
            <Button onClick={handleValue}>INC</Button>
            <p>{value}</p>
          </>
        ) : (
          ""
        )}
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 font-poppins">
        {list.map((item, idx) => {
          return (
            <div key={idx} className=" mx-auto">
              <Card
                className=" w-[145px] md:w-[300px] relative my-1"
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
                cover={
                  <img
                    alt="example"
                    src={item.image.img1}
                    className=" h-36 md:h-72"
                  />
                }
              >
                <h1 className=" line-clamp-2">{item.title}</h1>
                <h2 className=" text-green-500 ">NPR: {item.price}</h2>
                <RxCross2
                  color="black"
                  className={`absolute top-0 right-0 md:text-lg text-sm transition-opacity duration-500 ${isHovered === item.id ? 'opacity-100' : 'opacity-0'}`}
                  onClick={() => dispatch(removeList(item.id))}
                />
                {isHovered === item.id && (
                  <div
                    className="flex justify-evenly items-center w-full absolute left-0
                 rounded-b bg-gray-100 mt-2 pb-3 font-poppins z-10"
                  >
                    <FiHeart className=" md:text-lg  text-sm" />
                    <button className=" md:px-3 md:py-2 px-2 py-1 bg-lime-400 text-[10px] md:text-lg">
                      SELECT OPTIONS
                    </button>
                    <IoSearch className=" md:text-lg  text-sm" />
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishlistItem;
