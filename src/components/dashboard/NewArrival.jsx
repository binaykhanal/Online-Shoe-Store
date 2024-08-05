import React from "react";
import { newArrivals } from "../../util/Products";
import ForGender from "./ForGender";
import ArrivalReusable from "./ArrivalReusable";
import { arrivalList } from "../../util/Products";
import { useGetAllProductQuery } from "../../services/productQuery";
import RtkPagination from "../common/RtkPagination";

const NewArrival = () => {
  const { data, isLoading } = useGetAllProductQuery();
  console.log("pt:", data);
  const secondCover = arrivalList.filter((item) => item.id === 2);
  const firstCover = arrivalList.filter((item) => item.id === 1);
  return (
    <div className=" container mx-auto my-20 ">
      <div className=" flex w-full justify-between gap-x-2 md:gap-x-5">
        <div className=" space-y-3">
          <ArrivalReusable data={firstCover} />
          <ArrivalReusable data={secondCover} />
        </div>
        <div className=" relative">
          <h1 className=" text-xs md:text-2xl">NEW ARRIVALS</h1>
          <section>
            <ForGender data={newArrivals} />
            <RtkPagination data={newArrivals} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
