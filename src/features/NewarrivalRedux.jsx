import { createSlice } from "@reduxjs/toolkit";

const ArrivalRedux=createSlice({
    name:'arrivalsliec',
    initialState:{
        shoes:[],
        shoesPerPage:8,
        currentPage:1,
    },

    reducers:{
        onNavigateNext:(state)=>{
            state.currentPage++;
        },
        onNavigatePrev:(state)=>{
            state.currentPage--;
        },
        onClickCurrentPage:(state,action)=>{
            state.currentPage=action.payload;
        },
        onChangeShoesPerpage:(state,action)=>{
            state.shoesPerPage=action.payload;
        },
    }
})

export const {onChangeShoesPerpage,onClickCurrentPage,onNavigateNext,onNavigatePrev}=ArrivalRedux.actions;
export const arrivalReducer=ArrivalRedux.reducer;