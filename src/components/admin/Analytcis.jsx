import React from "react";
import { adminBlogs } from "../../util/Products";
import BlogPagination from "./BlogPagination";
import AddBlogs from "./AddBlogs";

const Analytcis = () => { 
  return (
    <div>
      <div className=" lg:flex gap-x-5  lg:space-y-0 space-y-1">
        <div className=" bg-cover bg-center flex-1 h-[300px] 
          lg:h-[400px] rounded-xl text-white flex items-end"
          style={{
            backgroundImage: `url("https://th.bing.com/th/id/R.fdb5db72c0e4a76f331ac4007fe7244e?rik=GFFFef3twoaUyA&pid=ImgRaw&r=0")`,
          }}
        >
          <section className=" bg-gray-500 p-5 rounded-b-xl w-full bg-opacity-25 backdrop-blur-sm">
            <button className=" ring-2 ring-orange-400 rounded-xl font-light px-1.5 py-0.5">
              business
            </button>
            <p className="  text-2xl py-1">
              Unlocking Business <br/> Efficiency with SaaS Solutions
            </p>
          </section>
        </div>

        <div className="px-4 lg:w-[36%] bg-gray-200 dark:bg-neutral-800 text-violet-700 py-3 rounded-lg">
          <h3 className=" text-sm lg:text-lg pb-6 text-center">Add a Blog</h3>
         <AddBlogs/>
        </div>
      </div>
      <div className=" my-8">
       <BlogPagination/>
      </div>
    </div>
  );
};

export default Analytcis;
