import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './ProductSlice'

const store =configureStore({
    reducer:{
        cart:cartReducer
       
    },
})
export default store;