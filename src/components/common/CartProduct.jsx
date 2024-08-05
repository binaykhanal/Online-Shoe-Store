import React from "react";
import { notification } from "antd";
import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeItem,
} from "../../features/CartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LayoutContext } from "../../layout/UserLayout";

const CartProduct = () => {
  const { cart } = useSelector((state) => state.cartslice);
  const { subTotal, onClose } = React.useContext(LayoutContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIncQuantity = (itemId) => {
    dispatch(incrementQty(itemId));
  };
  const handleDecQuantity = (itemId, quantity) => {
    if (quantity > 1) {
      // Validate quantity not to go below one
      dispatch(decrementQty(itemId));
    }
  };
  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/checkout");
      onClose();
    } else {
      notification.error({
        message: <h1 className="font-poppins">No items in the Cart</h1>,
      });
    }
  };

  return (
    <>
      {cart.length > 0 ? (
        <div className=" space-y-3 mx-auto ">
          {cart.map((item) => {
            return (
              <div
                className=" font-poppins border-b-2 border-green-500 py-2"
                key={item.id}
              >
                <section className=" flex w-full gap-x-3 items-center">
                  <img
                    src={item.image.img1}
                    className=" h-10 md:h-16 rounded-xl"
                  />
                  <h1 className=" font-semibold line-clamp-2 w-2/3">
                    {item.title}
                  </h1>
                  <FiDelete
                    size={28}
                    color="red"
                    onClick={() => dispatch(removeItem(item.id))}
                  />
                </section>

                <h1 className=" text-green-500">
                  PRICE: {item.price * item.quantity} Rs
                </h1>
                <ul className=" list-disc pl-2 text-zinc-700">
                  <li>color: {item.color}</li>
                  <li>category: {item.category}</li>
                  <li>size: {item.size}</li>
                </ul>

                <div className=" flex items-center gap-x-3">
                  <h1 className=" text-indigo-500">
                    QUANTITY: {item.quantity}
                  </h1>
                  <section className=" space-y-1">
                    <FaPlus
                      className=" border-2 border-gray-300 "
                      size={18}
                      onClick={() => handleIncQuantity(item.id)}
                    />
                    <FaMinus
                      className=" border-2 border-gray-300 "
                      size={18}
                      onClick={() => handleDecQuantity(item.id, item.quantity)}
                    />
                  </section>
                </div>
              </div>
            );
          })}
          <section className=" flex justify-between font-semibold text-lg">
            <h1>SUB TOTAL: </h1>
            <h2 className=" text-lime-600">NPR{subTotal}</h2>
          </section>
          <button
            className=" bg-emerald-300 px-3 py-2 text-white w-full "
            onClick={handleCheckout}
          >
            CHECK OUT
          </button>
        </div>
      ) : (
        <p className=" font-poppins text-sm font-medium text-red-600">
          No any Items in the Cart...
        </p>
      )}
    </>
  );
};

export default CartProduct;
