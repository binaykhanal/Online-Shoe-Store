import React from "react";
import logo from "../assets/videos/shoe.png";
import { Link } from "react-router-dom";

const Animation = () => {
  return (
    <div className=" container mx-auto ">
      <div className=" md:flex  bg-neutral-900
     text-white p-8 md:p-14 gap-x-7 justify-center mt-16 md:mt-40">
        <div className=" font-poppins md:w-[32%]">
          <p>SPORTS SNEAKERS</p>
          <h1 className=" text-lg lg:text-2xl py-1">
            Your ticket to sporty glory with <span className=" text-red-600">S</span>OLE 23
          </h1>
          <h1 className=" line-clamp-3 md:line-clamp-none">
            Be a showstopper & show ‘em how it’s done!Go on, flaunt your swag
            with the all-new LENNOX 725 & get ready to become the pioneer of
            unrivaled style.Crafted for a comfortable move & a confident
            lifestyle, it’s time to slay with your best foot forward!
          </h1>
          <Link to="/men">
            <button className=" bg-lime-500 px-10 py-3.5 mt-5">Shop Now</button>
          </Link>
        </div>
        <div className=" md:flex-1 flex justify-center">
          {/* <iframe
            width="640"
            height="482"
            // src="https://www.youtube.com/embed/65YdCqwB_90?autoplay=1&loop=1&playlist=65YdCqwB_90&mute=1"
            title="Caliber Shoes - Lennox 725"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
          <img src="https://th.bing.com/th/id/R.d693752cd9b5ee472b917220eebff36d?rik=z6pymKcgq03OoA&riu=http%3a%2f%2fwallpaperim.net%2f_data%2fi%2fupload%2f2014%2f09%2f29%2f20140929591682-f3efe04c-me.jpg&ehk=4BbrBKICAAiti3gOSFiDEiDybtfc9X%2fh0ZP0lmQQTlU%3d&risl=&pid=ImgRaw&r=0" alt="shoe"/>
        </div>
      </div>
    </div>
  );
};

export default Animation;
