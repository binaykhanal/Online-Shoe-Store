import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
const initialState={
    list:[],
};

export const wishSlice=createSlice({
    name:"wishlist",
    initialState,
    reducers:{
        listData:(state,action)=>{
            const newList = action.payload;
            // Check if an item with the same id already exists in the cart
            const existingListIdx = state.list.findIndex(item => item.id === newList.id);
            if (existingListIdx === -1) {
                // If it doesn't exist, push the new item into the cart
                state.list.push(newList);
                notification.success({
                    message: <h1 className=" font-poppins"> ADDED TO WISHLIST</h1>,
                  });
            }        
        },
        removeList:(state,action)=>{
            state.list=state.list.filter((item)=>item.id!==action.payload)
        },
       
    },
})

export const{listData,removeList }=wishSlice.actions;
export default wishSlice.reducer;