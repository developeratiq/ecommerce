import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './ProductSlice'
import AddressReducer from "./AddresSlice";
import AdminReducer from './AdminSlice'
import newCart from './cart'

const store =configureStore({
    reducer:{
        admin:AdminReducer,
        cart:cartReducer,
        address:AddressReducer,
        newcart:newCart
       
    },
})
export default store;