import { createSlice } from "@reduxjs/toolkit";

const initialState={
    url:{},
    genres:{}
}


export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers:{
        getApiConfiguration:(state, action)=>{
            // console.log(action.payload)
           state.url = action.payload
        },
        getGenres:(state, action)=>{
            console.log("genres",action.payload)
            state.genres = action.payload
        }
    }
})

export const homeActions = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
export const homeSelector = (state)=> state.homeReducer;