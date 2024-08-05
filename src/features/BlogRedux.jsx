import { createSlice } from "@reduxjs/toolkit";

const BlogRedux=createSlice({
    name:'blogslice',
    initialState:{
        blogs:[],
        blogsPerPage:8,
        currentPage:2,
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
        onChangeBlogPerpage:(state,action)=>{
            state.blogsPerPage=action.payload;
        },
    }
})

export const {onChangeBlogPerpage,onClickCurrentPage,onNavigateNext,onNavigatePrev}=BlogRedux.actions;
export const blogReducer=BlogRedux.reducer;