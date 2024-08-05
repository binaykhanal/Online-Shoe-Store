import React, { createContext, useEffect, useMemo, useState } from "react";
import { Avatar, Badge, Layout, Drawer, Input, ConfigProvider } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { FaRegHeart, FaSearch, FaSpinner } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Foot } from "../components/Foot";
import { Dropdown, Space } from "antd";
import { items, shoes } from "../util/Products";
import Login from "../components/Login";
import Profile from "../components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/authSlice";
import CartProduct from "../components/common/CartProduct";
import debounce from "lodash.debounce";
import SingleProduct from "../components/SIngleProduct";
import { FaChevronDown, FaUserClock } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { secondHead } from "../util/Products";
import ScrollHeader from "../components/common/ScrollHeader";
import SignUp from "../components/SignUp";

export const LayoutContext = createContext(); //context API

const UserLayout = () => {
  const [activePath, setActivePath] = React.useState();
  const location = useLocation(); // gets the current location
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cartslice);
  const { list } = useSelector((state) => state.wishlist);

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
    // updates active path when the route changes
  }, [location]);

  // Check if user is already logged in upon component mount
  useEffect(() => {
    const accessToken = localStorage.getItem("accesstoken");
    if (accessToken) {
      dispatch(login());
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("accesstoken");
    dispatch(logout());
  };

  const handleLoginSuccess = () => {
    dispatch(login());
  };

  const handleSignUpSuccess = () => {
    setIsSignedUp(true);
    setIsLoginView(true);
  };

  const switchToSignUp = () => {
    setIsLoginView(false);
  };

  const switchToLogin = () => {
    setIsLoginView(true);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showDrawerb = () => {
    setIsOpen(true);
  };

  const onCloseb = () => {
    setIsOpen(false);
  };

  const handleSearchChange = debounce((value) => {
    setSearchQuery(value);
  }, 300);

  useMemo(() => {
    if (searchQuery.length >= 3) {
      setLoading(true);
      setTimeout(() => {
        const filteredProducts = shoes.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResult(filteredProducts);
        setLoading(false);
      }, 500);
    } else {
      setSearchResult([]);
    }
  }, [searchQuery]);

  const subTotal = cart.reduce((prev, item) => {
    return prev + item.price * item.quantity;
  }, 0);

  const categories = ["All Categories", "Books", "Electronics", "Clothing"];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <LayoutContext.Provider
      value={{
        onClose,
        subTotal,
        handleSignUpSuccess,
        switchToLogin,
        onCloseb,
        handleLoginSuccess,
        switchToSignUp,
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorBgBase: "rgb(243 244 246)",
            colorText: "black",
          },
        }}
      >
        <Layout>
          <div
            className=" flex   bg-neutral-950 
         px-4 text-white w-full space-x-1 font-poppins"
          >
            <div className="flex container mx-auto py-8 font-poppins justify-between items-center gap-x-2">
              <div>
                <h1 className=" font-poppins  text-[10px] md:text-[15px] lg:text-lg font-bold">
                  LOGO
                </h1>
              </div>
              <div className="relative">
                <Input
                  className="lg:w-[600px] md:w-[380px] w-[160px]  rounded-none flex item-center"
                  placeholder="input search text"
                  allowClear
                  onChange={(e) => {
                    handleSearchChange(e.target.value);
                  }}
                  suffix={
                    loading ? (
                      <FaSpinner className="animate-spin text-gray-500" />
                    ) : (
                      <FaSearch className="text-gray-500" />
                    )
                  }
                />
                {searchQuery.length >= 3 && (
                  <div className="absolute top-full left-0 w-full bg-white border border-gray-200 mt-1 z-10 cursor-pointer">
                    {loading ? (
                      <div className="p-2 text-center">Loading...</div>
                    ) : searchResult.length > 0 ? (
                      <div className="max-h-[40vh] overflow-y-auto">
                        <SingleProduct searchResult={searchResult} />
                      </div>
                    ) : (
                      <div className=" py-4 font-poppins  text-sm  text-black">
                        No products found
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className=" cursor-pointer">
                <h1
                  onClick={showDrawerb}
                  className="font-bold md:text-lg pl-2 flex items-center" // Common classes for all screen sizes
                >
                  {isLoggedIn ? (
                    <span className="hidden md:inline text-[13px] lg:text-[15px]">
                      MY ACCOUNT
                    </span> // Text shown for medium & above screen
                  ) : (
                    <span className="hidden md:inline text-[13px] lg:text-[15px]">
                      LOGIN/REGISTER
                    </span> // Text shown for medium and above
                  )}
                  {/* Icon shown for small screens */}
                  {isLoggedIn ? (
                    <FaUserCheck className="inline md:hidden ml-2" size={22} />
                  ) : (
                    <FaUserClock className="inline md:hidden ml-2" size={23} />
                  )}
                </h1>

                {isOpen && (
                  <Drawer
                    width={window.innerWidth > 640 ? 400 : "65%"}
                    title={isLoggedIn ? "PROFILE" : "LOGIN/REGISTER"}
                    onClose={onCloseb}
                    open={isOpen}
                    className=" font-poppins"
                  >
                    {isLoggedIn ? (
                      <Profile handleLogout={handleLogout} />
                    ) : isLoginView ? (
                      <Login />
                    ) : (
                      <SignUp />
                    )}
                  </Drawer>
                )}
              </div>

              <div className=" flex gap-x-2 md:gap-x-4 items-center">
                <Badge count={list.length} color="#E30B5D">
                  <Link to="/wishlist">
                    <Avatar shape="square" icon={<FaRegHeart size={23} />} />
                  </Link>
                </Badge>
                <Badge count={cart.length} color="green">
                  <Avatar
                    onClick={showDrawer}
                    shape="square"
                    icon={<HiOutlineShoppingBag size={23} />}
                  />
                </Badge>
                <h1 className=" md:block hidden text-green-500 text-[15px] lg:text-lg font-semibold">
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
          </div>

          <div
            className="   text-black py-5 border-b-2 border-gray-300 font-poppins
         text-lg font-semibold "
          >
            <div className="container mx-auto   flex gap-x-4 justify-center md:justify-start ">
              {/* <h1 className=" hidden md:block">Made in Nepal</h1> */}
              <Link to="/">
                <h1
                  className={`text-sm md:text-lg ${
                    activePath === "/" ? " text-violet-600" : ""
                  }`}
                >
                  HOME
                </h1>
              </Link>

              {secondHead.map((item, idx) => {
                return (
                  <div key={idx}>
                    <Link to={item.path}>
                      <Dropdown
                        menu={{ items }}
                        className={` flex items-center text-sm md:text-lg font-poppins ${
                          activePath === item.path ? " text-lime-500" : ""
                        }`}
                      >
                        <Space>
                          <h1>{item.name}</h1> <FaChevronDown />
                        </Space>
                      </Dropdown>
                    </Link>
                  </div>
                );
              })}
              <ScrollHeader />
            </div>
          </div>

          <div className="   ">
            <Outlet />
          </div>

          <div className=" mt-6">
            <Foot />
          </div>
        </Layout>
      </ConfigProvider>
    </LayoutContext.Provider>
  );
};

export default UserLayout;
