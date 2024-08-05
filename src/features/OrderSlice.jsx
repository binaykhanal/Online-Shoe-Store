import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd"; 

const initialState = {
  order: [],
};

export const orderSlice = createSlice({
  name: "orderlist",
  initialState,
  reducers: {
    orderData: (state, action) => {
      // Ensure state.order is always an array
      if (!Array.isArray(state.order)) {
        state.order = [];
      }
      const newItem = action.payload;
      // Check if an item with the same id already exists in the order
      const existingItemIndex = state.order.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex === -1) {
        // If it doesn't exist, push the new item into the order
        state.order.push(newItem);
        notification.success({
          message: <h1 className="font-poppins"> ORDER RECIEVED</h1>,
        });
      } else {
        notification.warning({
          message: <h1 className="font-poppins">Item is already in the order</h1>,
        });
      }
    },
    cancelOrder: (state, action) => {
      state.order = state.order.filter(item => item.id !== action.payload);
      notification.success({
        message: <h1 className="font-poppins">Order Canceled</h1>,
      });
    },
  },
});

export const { orderData, cancelOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
