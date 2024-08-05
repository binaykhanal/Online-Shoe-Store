import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrder } from "../../features/OrderSlice";

const UserOrder = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.orderlist);
  console.log("orders:",order);
  return (
    <div>
    <h2 className=" text-xl text-center font-poppins mt-2 font-semibold"> MY ORDERS</h2>
      {order.length >0 ? (
        <div className=" space-y-4 my-8">
          {order.map((item, idx) => {
            return (
              <div key={idx} className=" flex justify-center font-poppins ">
                <div className=" border-2 border-teal-500 rounded-lg p-3  w-[50%] flex items-center justify-between">
                  <div className="space-y-3.5">
                  <section className=" flex gap-2 items-center">
                    <p className=" bg-red-100 rounded-2xl px-3.5 py-0.5 text-orange-700 flex items-center gap-x-1">
                      <span className=" text-xl">•</span> pending
                    </p>
                    <p className=" border-l border-gray-500 px-2">Date</p>
                  </section>
                  <div className=" flex gap-2 items-center">
                    <img
                      src={item.image.img1}
                      alt="shoes"
                      className=" h-16 rounded-xl"
                    />
                    <section className="text-lg">
                      <h1 className=" font-semibold text-amber-900">
                        Order ID:
                      </h1> 
                      <h2>{item.title}</h2>
                      <h2 className=" text-green-500 font-medium">
                        NPR, {item.price}
                      </h2>
                    </section>
                  </div>
                  </div>
                  <div>
                  <button 
                    className=" bg-red-600 px-3 py-1.5 rounded-sm text-white"
                    onClick={() => dispatch(cancelOrder(item.id))}
                  >
                    Cancel
                  </button>
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <p className=" text-xl text-center font-poppins text-red-700 font-semibold my-3">No any Orders..</p>
      )}
    </div>
  );
};

export default UserOrder;
