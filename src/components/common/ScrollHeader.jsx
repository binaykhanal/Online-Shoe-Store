import { Header } from "antd/es/layout/layout";
import React, { useState, useEffect } from "react";
import { secondHead } from "../../util/Products";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Badge, Avatar, Space, Dropdown, Drawer, ConfigProvider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { items } from "../../util/Products";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import CartProduct from "./CartProduct";

const ScrollHeader = () => {
  const { cart } = useSelector((state) => state.cartslice);
  const { list } = useSelector((state) => state.wishlist);

  const [activePath, setActivePath] = React.useState();
  const location = useLocation(); // gets the current location

  React.useEffect(() => {
    setActivePath(location.pathname);
    // updates active path when the route changes
  }, [location]);

  const [open, setOpen] = React.useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const subTotal = cart.reduce((prev, item) => {
    return prev + item.price * item.quantity;
  }, 0);

  return (
    <Header
      className={`fixed top-0 left-0 right-0 h-16 bg-black shadow transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div
        className="container mx-auto flex font-poppins items-center justify-center md:justify-between
         bg-neutral-950  text-white gap-x-3.5 font-semibold"
      >
        <div className="  tetx-sm md:text-lg md:block hidden">
          <h1>LOGO</h1>
        </div>
        <div className=" flex gap-x-3 items-center text-[10px] md:text-lg font-poppins">
          <Link to="/">
            <h1 className={` ${activePath === "/" ? " text-violet-600" : ""}`}>
              HOME
            </h1>
          </Link>

          {secondHead.map((item, idx) => {
            return (
              <div key={idx}>
                <Link to={item.path}>
                  <Dropdown
                    menu={{ items }}
                    className={` flex items-center font-poppins text-[10px] md:text-lg ${
                      activePath === item.path ? " text-lime-500" : " "
                    }`}
                  >
                    <Space>
                      {" "}
                      <h1>{item.name}</h1> <DownOutlined />
                    </Space>
                  </Dropdown>
                </Link>
              </div>
            );
          })}
        </div>

        <div className=" flex gap-x-1 md:gap-x-4 items-center">
          <Badge count={list.length} color="#E30B5D">
            <Link to="/wishlist">
              <Avatar
                shape="square"
                icon={<FaRegHeart className=" text-[20px] md:text-2xl flex" />}
              />
            </Link>
          </Badge>
          <Badge count={cart.length} color="green">
            <Avatar
              onClick={showDrawer}
              shape="square"
              icon={
                <HiOutlineShoppingBag className=" text-[20px] md:text-2xl" />
              }
            />
          </Badge>
          <h1 className=" md:block hidden font-semibold text-green-600">
            NPR: {subTotal}
          </h1>
          {open && (
            <ConfigProvider
              theme={{
                token: {
                  // Seed Token
                  colorBgBase: "rgb(229 231 235)",
                  colorText: "black",
                },
              }}
            >
              <Drawer
                width={window.innerWidth > 640 ? 400 : "65%"}
                title="Shopping Cart"
                onClose={onClose}
                open={open}
                className=" font-poppins"
              >
                <CartProduct />
              </Drawer>
            </ConfigProvider>
          )}
        </div>
      </div>
    </Header>
  );
};

export default ScrollHeader;
