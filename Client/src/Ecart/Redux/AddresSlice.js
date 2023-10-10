
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'









let myEmail = localStorage.getItem('email')
let myToken = localStorage.getItem('token')







// -----------for api-----------------

const STATUS = {
  IDLE: "ïdle",
  ERROR: "error",
  LOADING: "loading",
}


const intitalApiState = {
  address: [],
  status: STATUS.IDLE
}




export const addressSlice = createSlice({
  name: 'cartData',
  initialState: intitalApiState,

  reducers: {

  },

  extraReducers: (builder) => {
    builder

      .addCase(addToAddress.pending, (state, action) => {
        state.status = STATUS.LOADING
      }).addCase(addToAddress.fulfilled, (state, action) => {
        state.address = action.payload
        state.status = STATUS.IDLE
      }).addCase(addToAddress.rejected, (state, action) => {
        state.status = STATUS.ERROR
      })
      
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = STATUS.LOADING
      }).addCase(fetchAddress.fulfilled, (state, action) => {
        state.address = action.payload
        state.status = STATUS.IDLE
      }).addCase(fetchAddress.rejected, (state, action) => {
        state.status = STATUS.ERROR
      })
  


  }
})


export const addToAddress = createAsyncThunk('addto/address', async ( address) => {
  try {

    const {adres,city,name,phone,pincode,state}=address
   console.log(address)
    // return false
    const data = await fetch('/address', {
      "method": "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `bearer ${myToken}`
      },
      body: JSON.stringify({ email: myEmail,adres,city,name,phone,pincode,state})
    })
    const result = data.json()
    return result
  } catch (err) {
    return err
  }
})
export const fetchAddress = createAsyncThunk('fetch/address', async () => {

    try {
  
      const data = await fetch('/getaddress', {
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






export default addressSlice.reducer
