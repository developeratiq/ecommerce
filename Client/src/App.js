import React from 'react'
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


function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <StyledComp/>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/products' element={<Products></Products>}></Route>
    <Route path='/products/:productId' element={<SIngleProduct></SIngleProduct>}></Route>
      
       {/* outlet  starts here */}
      
      <Route element={<Protected></Protected>}>    
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
    <Route path='/cart' element={<AddToCart></AddToCart>}></Route>
      <Route path='/buynow' element={<BuyNow></BuyNow>}></Route>
      <Route path='/payment' element={<Payment></Payment>}></Route>
        
      </Route>

      {/* outlet ends here  */}
    </Routes>
    </BrowserRouter>
    </Provider>
    
   </>  
  )
}

export default App