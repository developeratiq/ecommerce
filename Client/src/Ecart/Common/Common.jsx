import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux';
import {cartSlice,getCartTotal} from '../Redux/ProductSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import Togglebar from './Togglebar';
import Navigation from '../NAVIGATION/Navigation';



function Common() {
    const dispatch = useDispatch()
    const numberOf =useSelector(state=>state.cart.cartData.result)
    const [cartLen ,setCartLen]=useState(numberOf&&numberOf.length)
    // console.log(numberOf)

    useEffect(()=>{
  numberOf&&setCartLen(numberOf.length)
    },[numberOf])
    // dispatch(getCartTotal())

    // console.log(numberOf.cart)
    const[cartLength,setCartLength]=useState()
    // console.log(cartLength.length)
    const [showPopup, setShowPopup] = useState(true);
    const showPopupFn = ()=>{
        console.log('clocked ')
        setShowPopup(true)
    }
    const closepopUp= ()=>{
        setShowPopup(false)
    }

    const navigate = useNavigate()
    // const [cart, setCart] = useState(ReadData())
    let name = localStorage.getItem('name')


    const items = useSelector((state) => state.cart)


    const logOut = () => {
        localStorage.removeItem('name')
        navigate('/products')
        toast.warn('LogOut successfully')
    }
    // useEffect(()=>{
    // setCartLength(cartLength)
    // },[cartLength])
    return (
        <>
           <Navigation/>

        </>
    )
}

export default Common