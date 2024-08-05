import React from "react";
import { ShopButton } from "../common/utilities";

const ArrivalReusable = ({ data }) => {
  const pic = data.map((item) => item.image);
  return (
    <div
      className=" bg-cover bg-center w-[100px] h-[230px] md:w-[270px] overflow-hidden
            md:h-[400px] flex items-center justify-center "
      style={{
        backgroundImage: `url(${pic})`,
      }}
    >
      <ShopButton />
    </div>
  );
};

export default ArrivalReusable;
