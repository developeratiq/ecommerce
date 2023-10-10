import React, { useEffect, useState } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Route, Routes} from 'react-router-dom';
import StyledComp from './Ecart/StyledComp';
import Login from './Ecart/Components/Login';
import SignUp from './Ecart/Components/SignUp';
import Home from './Ecart/Home';
import Products from './Ecart/Components/Products';
import AddToCart from './Ecart/Components/AddToCart';
import { Provider } from 'react-redux';
import store from './Ecart/Redux/Store'
import SIngleProduct from './Ecart/Components/SIngleProduct';
import BuyNow from './Ecart/Components/BuyNow';
import Protected from './Ecart/Components/Protected';
import Payment from './Ecart/Components/Payment';
import AdminHome from './Ecart/Seller/AdminHome';
import AdminLogin from './Ecart/Seller/Comp/AdminLogin';
import AdminSignup from './Ecart/Seller/Comp/AdminSignup';
import {appContext} from './Ecart/Context/Context'

const readData =()=>{
  const cartData = localStorage.getItem('cart')
  if(cartData){
    return JSON.parse(cartData)
  }
  else{
    return {}
  }
}

const readDetails = ()=>{
  const cartData = localStorage.getItem('cartdetails')
  if(cartData){
    return JSON.parse(cartData)
  }
  else{
    return []
  }
}

// const readData =()=>{
//   return {}
// }
function App() {
const[project,setProject]=useState(readData())
const[cartDetails,setCartDetails]=useState(readDetails())

console.log(cartDetails)
useEffect(()=>{
const cart =window.localStorage.getItem('cart')
const cartDetail =window.localStorage.getItem('cartdetails')
// console.log(cartDetail)
},[])

useEffect(()=>{
window.localStorage.setItem('cart',JSON.stringify(project))
},[project])
 useEffect(()=>{
  window.localStorage.setItem('cartdetails',JSON.stringify(cartDetails))
 },[cartDetails])
  return (
    <>
    <Provider store={store}>
      <appContext.Provider value={{project,setProject , cartDetails,setCartDetails}}>
    <BrowserRouter basename='/'>
    {/* <StyledComp/> */}
   
    <Routes>
      
    <Route index path='/' element={<Home></Home>}></Route>
       {/* outlet  starts here */}
      
      <Route element={<Protected></Protected>}>    
    <Route path='/products' element={<Products></Products>}></Route>
    <Route path='/products/:productId' element={<SIngleProduct></SIngleProduct>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    <Route path='/cart' element={<AddToCart></AddToCart>}></Route>
      <Route path='/buynow' element={<BuyNow></BuyNow>}></Route>
      <Route path='/payment' element={<Payment></Payment>}></Route>
        
      </Route>

      {/* outlet ends here  */}


    <Route path='/admin' element={<AdminHome/>}>
     <Route path='login' element={<AdminLogin/>} />
     <Route path='signup' element={<AdminSignup/>} />


    </Route>


    </Routes>
    </BrowserRouter>
    </appContext.Provider>
    </Provider>
    
   </>  
  )
}

export default App