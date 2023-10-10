
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type } from '@testing-library/user-event/dist/type';
import { toast } from 'react-toastify';
// import type { PayloadAction } from '@reduxjs/toolkit'








let myEmail = localStorage.getItem('email')
let myToken = localStorage.getItem('token')



const _cartData = localStorage.getItem('cartItems') !== null ? JSON.parse
  (localStorage.getItem('cartItems')) : []

const _totalQuantity = localStorage.getItem('totalQuantity') !== null ? JSON.parse
  (localStorage.getItem('totalQuantity')) : 0
const _totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse
  (localStorage.getItem('totalAmount')) : 0



// -----------for api-----------------

const STATUS = {
  IDLE: "ïdle",
  ERROR: "error",
  LOADING: "loading",
}


const intitalApiState = {
  cartData: [],
  allProducts:[],
  status: STATUS.IDLE
}

const initialState = {
  cart: {},
  totalQuantity: _totalQuantity,
  totalPrice: _totalAmount
};


export const cartSlice = createSlice({
  name: 'cartData',
  initialState: {},
  // reducers: {
  //   add: (state, action) => {
  //     let find = state.cart.findIndex((item) => item.id === action.payload.id);
  //     if (find >= 0) {
  //       state.cart[find].quantity +=1;
  //     } else {
  //       state.cart.push(action.payload)

  //     }
  //   },

  // getCartTotal: (state) => {
  //   let { totalQuantity, totalPrice } = state.cart.reduce(
  //     (cartTotal, cartItem) => {
  //       const { price, quantity } = cartItem;
  //       const totaItems = price * quantity;

  //       console.log(totaItems)
  //       cartTotal.totalPrice += totaItems;
  //       cartTotal.totalQuantity += quantity;
  //       return cartTotal

  //     },
  //     {
  //       totalPrice: 0,
  //       totalQuantity: 0
  //     },


  //   );
  //   state.totalPrice = parseInt(totalPrice.toFixed(2));
  //   state.totalQuantity = totalQuantity


  // localStorage.setItem('cartItems',JSON.stringify(state.cart.map(item=>item)))
  // localStorage.setItem('totalAmount',JSON.stringify(state.totalPrice))
  // localStorage.setItem('totalQuantity',JSON.stringify(state.totalQuantity))

  // },

  // remove: (state, action) => {
  //   state.cart= state.cart.filter(item => item.id !== action.payload)
  // },
  reducers: {
add:(state,action)=>{
    console.log(action.payload)
 
  },

},
extraReducers:(builder)=>{

}}
)


export const getAllData = createAsyncThunk('all/data', async () => {
  try {

    // return false
    const data = await fetch('/https://api.pujakaitem.com/api/products`')
    const result = data.json()
    return result
  }
  catch (err) {
    return err
  }
})



export const addToCart = createAsyncThunk('addto/cart', async ({ productId, name, category, price, _image, quantity }) => {
  try {

    // return false
    const data = await fetch('/addCart', {
      "method": "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `bearer ${myToken}`
      },
      body: JSON.stringify({ email: myEmail, productId, name, category, price, _image, quantity })
    })
    const result = data.json()
    return result
  } catch (err) {
    return err
  }
})
export const removeFromCart = createAsyncThunk('remove/cart', async (id) => {
  try {

    // return false
    const data = await fetch('/removecart', {
      "method": "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `bearer ${myToken}`
      },
      body: JSON.stringify({ email: myEmail, id })
    })
    const result = data.json()
    return result
  } catch (err) {
    return err
  }
})


export const fetchCart = createAsyncThunk('fetch/cart', async () => {

  try {

    const data = await fetch('/getcart', {
      "method": "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `bearer ${myToken}`
      },
      body: JSON.stringify({ email: myEmail })
    })
    const result = data.json()
    return result
  } catch (err) {
    return err
  }
}

)

// Action creators are generated for each case reducer function
export const { add} = cartSlice.actions

export default cartSlice.reducer
