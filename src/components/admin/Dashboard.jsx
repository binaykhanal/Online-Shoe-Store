import React from "react";
import { dashboardStats } from "../../util/Products";
import BarGraph from "./charts/BarGraph";
import PieCharts from "./charts/PieCharts";
import LineCharts from "./charts/LineCharts";
import "./Dashboard.css";
import RecentOrders from "./dashboarditems/RecentOrders";
import PopularProducts from "./dashboarditems/PopularProducts";

const Dashboard = () => {
  const getColorById = (id) => {
    const colorMap = {
      1: "bg-blue",
      2: "bg-green",
      3: "bg-red",
      4: "bg-purple",
    };
    return colorMap[id] || "bg-gray-500"; // Default color if id not found
  };

  return (
    <div>
      <div className=" grid grid-cols-2 w-full md:w-[95%] px-0 lg:px-20 xl:px-0 lg:w-full mx-auto xl:flex items-center md:justify-between gap-1 my-2.5 gap-x-1 xl:gap-x-0">
        {dashboardStats.map((item, idx) => {
          // Determine the color based on the change value
          const changeValue = parseInt(item.change);
          const changeColorClass =
            changeValue > 0 ? "text-green-500" : "text-red-400";
          const backgroundColor = getColorById(item.id);
          return (
            <div
              className={`rounded-2xl flex ${backgroundColor} px-2 lg:px-4 py-2.5 lg:py-5 items-center shadow-md shadow-gray-300 dark:shadow-neutral-500 hover:scale-105 hover:duration-500 duration-300`}
              key={idx}
            >
              <div>
                <button className=" bg-white rounded-full p-2 lg:p-3">
                  {item.icon}
                </button>
              </div>
              <div className=" ml-1 md:ml-2 lg:ml-2.5">
                <h2 className="text-[11px] md:text-[18px] lg:text-[24px] flex items-center px-1 lg:px-1.5">
                  {item.price}
                  <span
                    className={`text-[8px] lg:text-[13px] bg-white rounded-2xl px-1 lg:px-2 py-0.5 mx-1.5 lg:mx-4 ml-1 ${changeColorClass} `}
                  >
                    {item.change}%
                  </span>
                </h2>
                <h1 className=" text-[10px] md:text-[16px] text-gray-800 font-medium mt-0.5 lg:mt-1.5 px-0.5 lg:px-1.5 ">
                  {item.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" xl:flex w-full gap-4 mt-3">
        <BarGraph />
        <PieCharts />
      </div>
      <LineCharts />
      <div className=" lg:flex w-full gap-4 my-2">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;
