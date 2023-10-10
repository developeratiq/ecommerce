
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
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
}


const intitalApiState = {
 Admin:{}
}



export const Admin = createSlice({
  name: 'Admin',
  initialState: intitalApiState,

  reducers: {

  },

  extraReducers: (builder) => {
    builder
    .addCase(AdminSignin.pending, (state, action) => {
      state.status = STATUS.LOADING
    }).addCase(AdminSignin.fulfilled, (state, action) => {
      state.Admin = action.payload
      state.status = STATUS.SUCCESS
    }).addCase(AdminSignin.rejected, (state, action) => {
      state.status = STATUS.ERROR
    })




  }
})


export const AdminSignin = createAsyncThunk('admin/login', async ({email,password}) => {
  try {

    // return false
    const data = await fetch('/api/admin/login',{
        "method": "POST",
      headers: {
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ email,password })
    })
    const result = await data.json()
    // console.log(result)
    localStorage.setItem('adminToken',result.token)
    localStorage.setItem('adminName',result.user.name)
    return result
  }
  catch (err) {
    return err
  }
})






// Action creators are generated for each case reducer function
// export const { add, remove, getCartTotal } = cartSlice.actions
export default Admin.reducer