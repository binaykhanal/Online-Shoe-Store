import { useState } from "react";
import { FiCheck, FiHeart } from "react-icons/fi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../features/CartSlice";
import { listData } from "../features/WishlistReducer";
import { Modal } from "antd";

const MenReusable = ({ data }) => {
  const [sortedProducts, setSortedProducts] = useState(data);
  const [sortBy, setSortBy] = useState("");
  const [filterByColor, setFilterByColor] = useState("");
  const [isHovered, setIsHovered] = useState(null);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log("dt", data);

  const { list } = useSelector((state) => state.wishlist);
  const isItemInList = (item) => {
    return list.some((listItem) => listItem.id === item.id);
  };

  const sortProducts = (sortBy) => {
    let sorted = [];
    switch (sortBy) {
      case "latest":
        sorted = [...data].sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );
        break;
      case "popularity":
        sorted = [...data].sort((a, b) => b.popularity - a.popularity);
        break;
      case "price":
        sorted = [...data].sort((a, b) => a.price - b.price);
        break;
      default:
        sorted = data;
        break;
    }
    setSortBy(sortBy);
    setSortedProducts(sorted);
  };

  const filterProductsByColor = (color) => {
    if (color === "all") {
      setFilterByColor("");
      setSortedProducts(data);
    } else {
      const filtered = data.filter((product) => product.color === color);
      setFilterByColor(color);
      setSortedProducts(filtered);
    }
  };

  const showModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-6 mt-5">
          <div className="col-span-1">
            <div>
              <label
                htmlFor="colorSelect"
                className="block mb-2 text-[12px] md:text-lg"
              >
                Filter By Color:
              </label>
              <select
                id="colorSelect"
                onChange={(e) => filterProductsByColor(e.target.value)}
                className="border border-gray-400 rounded py-2 md:px-4 px-1"
              >
                <option value="all">All</option>
                <option value="black">black</option>
                <option value="brown">brown</option>
                <option value="white">white</option>
                <option value="grey">grey</option>
              </select>
            </div>

            <div className="my-10 font-poppins">
              <div className="border border-gray text-[11px] md:text-lg">
                <h1 className="font-bold">STOCK STATUS</h1>

                <div className="md:mt-5 mt-3">
                  <input type="checkbox" />{" "}
                  <span className="md:text-lg text-[10px]">On Sale</span> <br />
                  <input type="checkbox" />{" "}
                  <span className="md:text-lg text-[10px]">In Stock</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 text-xs md:text-lg font-poppins">
            <h4>Home/ Fashion/Men</h4>
            <p>show: 8 / 4 /6</p>
            <div className="my-2 md:my-5 mx-10 md:mx-3">
              <label className="block mb-2 font-bold" htmlFor="sortSelect">
                Sort By:
              </label>
              <select
                id="sortSelect"
                onChange={(e) => sortProducts(e.target.value)}
                className="border border-gray-400 rounded py-2 md:px-4 px-1.5"
              >
                <option value="" disabled hidden>
                  Select an option
                </option>
                <option value="latest">Latest</option>
                <option value="popularity">Popularity</option>
                <option value="price">Price Range</option>
              </select>
            </div>
            <div
              id="productList"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {sortBy === ""
                ? data.map((data, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setIsHovered(data.id)}
                      onMouseLeave={() => setIsHovered(null)}
                      className="productItem font-bold border border-gray-300 rounded overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 relative md:w-full w-4/5"
                    >
                      <img
                        src={data.image}
                        alt="img"
                        className="md:w-full w-[180px] md:h-auto h-[150px] mx-auto"
                      />
                      <div className="p-4 text-center">
                        <p className="text-lg font-semibold mb-2 font-poppins">
                          {data.name}
                        </p>

                        <p className="text-sm mb-2 text-lime-500">
                          Price: NPR.{data.price}
                        </p>
                        <div
                          className={`absolute top-0 mt-4 w-10 bg-gray-300 opacity-90 backdrop-blur rounded-2xl flex justify-center ${
                            isHovered === data.id
                              ? "scale-105 duration-500 transition ease-in-out translate-x-4 py-2 px-4"
                              : ""
                          }`}
                        >
                          {isHovered === data.id && (
                            <div className="space-y-2">
                              {isItemInList(data) ? (
                                <FiCheck size={26} />
                              ) : (
                                <FiHeart
                                  size={26}
                                  onClick={() => dispatch(listData(data))}
                                />
                              )}
                              <PiShoppingCartSimpleBold
                                size={26}
                                onClick={() => dispatch(cartData(data))}
                              />
                              <IoSearch
                                size={25}
                                onClick={() => showModal(data)}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                : sortedProducts.map((data, index) => {
                    if (filterByColor === "" || data.color === filterByColor) {
                      return (
                        <div
                          key={index}
                          onMouseEnter={() => setIsHovered(data.id)}
                          onMouseLeave={() => setIsHovered(null)}
                          className="productItem font-bold border border-gray-300 rounded overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 relative"
                        >
                          <img
                            src={data.image}
                            alt="img"
                            className="w-full h-auto"
                          />
                          <div className="p-4">
                            <p className="text-lg font-semibold mb-2 font-poppins">
                              {data.name}
                            </p>

                            <p className="text-sm mb-2 text-lime-500">
                              Price: NPR.{data.price}
                            </p>
                            <div
                              className={`absolute top-0 mt-4 w-10 bg-gray-300 opacity-90 backdrop-blur rounded-2xl flex justify-center ${
                                isHovered === data.id
                                  ? "scale-105 duration-500 transition ease-in-out translate-x-4 py-2 px-4"
                                  : ""
                              }`}
                            >
                              {isHovered === data.id && (
                                <div className="space-y-2">
                                  <FiHeart size={25} />
                                  <PiShoppingCartSimpleBold
                                    size={25}
                                    onClick={() => dispatch(cartData(data))}
                                  />
                                  <IoSearch
                                    size={25}
                                    onClick={() => showModal(data)}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
            </div>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
        >
          <div className="text-center">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-auto mx-auto mb-4"
            />
            <p className="text-lg font-semibold mb-2 font-poppins">
              {selectedProduct.name}
            </p>
            <p className="text-sm mb-2 text-lime-500">
              Price: NPR.{selectedProduct.price}
            </p>
            <p className="text-sm mb-2">{selectedProduct.description}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MenReusable;
