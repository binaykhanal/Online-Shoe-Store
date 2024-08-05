import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className=" absolute right-[-10px] top-1/2 transform -translate-y-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      onClick={onClick}
    >
      <GrNext size={24} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className=" absolute left-[-30px] top-1/2 transform -translate-y-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      onClick={onClick}
    >
      <GrPrevious size={24} />
    </div>
  );
};

export { NextArrow, PrevArrow };
