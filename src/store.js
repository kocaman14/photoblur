import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./features/photo"
export const store = configureStore({
reducer:{
photo:photoReducer    
}


})