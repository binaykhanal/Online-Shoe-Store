import { createSlice } from "@reduxjs/toolkit";
const initialState={
    detail:[],
};

export const detailSlice=createSlice({
    name:"detailslice",
    initialState,
    reducers:{
        showData:(state,action)=>{
            state.detail=action.payload;
        },
        increase: (state, action) => {  
            if (
              state.detail[0].quantity < 10
            ) {
              state.detail[0].quantity += 1;
            }
          },
        decrease: (state, action) => {  
            if (
              state.detail[0].quantity > 1
            ) {
              state.detail[0].quantity -= 1;
            }
          },
    },
})

export const{showData,increase,decrease}=detailSlice.actions;
export default detailSlice.reducer;