import React from "react";
import { shoeContainer } from "../../util/Products";
import { ShopButton } from "../common/utilities";
import { useNavigate } from "react-router-dom";
import { showData } from "../../features/DetailSlice";
import { useDispatch } from "react-redux";

const Skate = () => {
  const [isHovering, setIsHovering] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDetail = (item) => {
    dispatch(showData([item]));
    navigate("/details");
    console.log("tt", item.id);
  };

  return (
    <div className="">
      <div className="mx-5 flex justify-evenly my-10 font-poppins gap-x-2 ">
        {shoeContainer.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => handleDetail(item)}
              className=" bg-cover bg-center w-[220px] h-[150px] md:w-[450px]
              lg:w-[600px] overflow-hidden md:h-[400px] flex items-center justify-center "
              onMouseEnter={() => setIsHovering(item.id)}
              onMouseLeave={() => setIsHovering(null)}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {isHovering === item.id && <ShopButton />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skate;
