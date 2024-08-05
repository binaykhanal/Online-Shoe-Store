import React from "react";
import { newArrivals } from "../../util/Products";
import ForGender from "./ForGender";
import { arrivalList } from "../../util/Products";
import ArrivalReusable from "./ArrivalReusable";
import RtkPagination from "../common/RtkPagination";

const BestOffer = () => {
  const thirdCover = arrivalList.filter((item) => item.id === 3);
  const forthCover = arrivalList.filter((item) => item.id === 4);

  return (
    <div className="container mx-auto my-20  font-poppins">
      <div className=" flex justify-between gap-x-2 flex-row-reverse my-4">
        <div className=" space-y-3">
          <ArrivalReusable data={thirdCover} />
          <ArrivalReusable data={forthCover} />
        </div>
        <div>
          <section className=" flex gap-x-2.5 font-semibold justify-evenly text-[10px] md:text-lg">
            <h1>BEST OFFER</h1>
            <h1>NEW</h1>
            <h1>TOP SELLERS</h1>
            <h1>FEATURED</h1>
          </section>
          <section>
            <ForGender data={newArrivals} />
            <RtkPagination data={newArrivals} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BestOffer;
