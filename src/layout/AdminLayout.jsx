import React, { createContext, useState } from "react";
import { Layout } from "antd";
import { AdminSidebar, adminHeads, menuItems } from "../util/Products";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineExitToApp } from "react-icons/md";
import { IoIosSearch, IoIosSettings } from "react-icons/io";
import "./AdminLayout.css";
import SidebarLayout from "./SidebarLayout";
import { FaMoon } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
const { Content } = Layout;

export const AdminContext = createContext();
const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTitle = () => {
    for (const item of AdminSidebar) {
      //run a loop
      if (item.path === location.pathname) return item.title.toUpperCase();
      if (item.submenu) {
        const subItem = item.submenu.find(
          (sub) => sub.path === location.pathname
        );
        if (subItem) return subItem.specificPath.toUpperCase();
      }
    }
    return "DASHBOARD";
  };

  const activeTitle = getActiveTitle();

  const [theme,setTheme]=useState("light");
  React.useEffect(() => {
    if(theme==='dark'){
    document.documentElement.classList.add("dark");
    }
    else{
    document.documentElement.classList.remove("dark");

    }
   
  }, [theme])
  
  const handleTheme=()=>{
    setTheme(theme==='dark'?'light':'dark')
  }

  return (
    <AdminContext.Provider value={{}}>
      <Layout className=" dark:text-gray-300">
        <div className=" flex w-full">
          <div className="font-poppins px-1 md:px-3 text-lg h-screen w-[15%] md:w-[9%] lg:w-[17%] text-violet-700  space-y-5 rounded-sm dark:bg-black ">
            <h1 className=" my-4 font-semibold text-sm md:text-lg">LOGO</h1>
            <div className=" bg-neutral-200 dark:bg-black font-poppins rounded-xl h-fit md:h-[75%] text-black dark:text-violet-600">
              <SidebarLayout />
            </div>
            <div className=" space-y-2 dark:bg-black">
              <section className=" flex items-center justify-center md:justify-start gap-x-1 hover:transition hover:translate-x-3 hover:duration-500 duration-700">
                <IoIosSettings className=" text-neutral-500 text-[30px] md:text-lg" />
                <h1 className=" lg:block hidden">Settings</h1>
              </section>
              <section
                className=" flex items-center gap-x-1 hover:transition hover:translate-x-3
             justify-center md:justify-start hover:duration-500
             duration-700"
                onClick={() => navigate("/")}
              >
                <MdOutlineExitToApp className=" text-red-800 text-[30px] md:text-lg" />
                <h1 className=" lg:block hidden">Logout</h1>
              </section>
            </div>
          </div>

          <div className=" w-[86%] dark:bg-black md:w-[91%] lg:w-[83%] ">
            <Layout className=" font-poppins font-semibold dark:bg-black">
              <div
                className=" flex items-center py-3 px-1 md:px-6 justify-between gap-x-2
             bg-zinc-300 rounded-xl mx-1 md:mx-2.5 my-2 font-poppins bg-opacity-50 backdrop-blur  dark:bg-neutral-900"
              >
                <h1 className=" text-violet-600 text-[10px] md:text-xl font-semibold">
                  {activeTitle}
                </h1>

                <div className=" flex gap-x-2 items-center md:gap-x-4">
                 <button onClick={handleTheme}>
                 { theme==='dark'?
                  <FaMoon className=" text-[20px] ld:text-2xl" />:<LuSun className=" text-[20px] lg:text-2xl  "/>}
                  </button>
                  <div className="relative">
                    <input type="text"
                      className="pl-10 pr-4 py-2 bg-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur w-24 md:w-56 dark:border-gray-400 dark:border-2"
                      placeholder="Search..." />
                    <section className="absolute inset-y-0 flex items-center pl-2">
                      <IoIosSearch className=" lg:text-2xl text-lg" />
                    </section>
                  </div>

                  {adminHeads.map((item, idx) => (
                    <h2
                      className=" md:text-2xl text-[17px] flex items-center gap-x-0.5 md:gap-x-3"
                      key={idx}>
                      {item.icon}
                    </h2>
                  ))}
                </div>
              </div>
              <Content className=" mx-1.5 md:mx-2.5 rounded-t-xl bg-gray-100   
               bg-opacity-50 p-3 z-0  dark:bg-black">
                <div className="admin-layout">
                  <Outlet />
                </div>
              </Content>
            </Layout>
          </div>
        </div>
      </Layout>
    </AdminContext.Provider>
  );
};
export default AdminLayout;
