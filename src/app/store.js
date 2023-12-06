import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../redux/homeReducer";
export const store = configureStore({
    reducer:{
        homeReducer,
    }
})