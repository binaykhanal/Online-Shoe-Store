import React from "react";

const ProductEnquiry = () => {
  return (
    <div className=" py-10 w-3/4 font-poppins ">
      <section className=" flex justify-evenly w-full gap-x-2">
        <input
          type="text"
          placeholder="Your Name"
          className=" border-2 border-gray-600 w-1/2 h-9 px-1"
        ></input>
        <input
          type="email"
          placeholder="Your Email"
          className=" border-2 border-gray-600 w-1/2 h-9 px-1"
        ></input>
      </section>
      <textarea
        placeholder="Details about your Enquiry"
        className=" w-full my-1 h-44"
      ></textarea>
      <button className=" bg-red-500 px-3 py-2 text-white">
        SUBMIT ENQUIRY
      </button>
    </div>
  );
};

export default ProductEnquiry;
