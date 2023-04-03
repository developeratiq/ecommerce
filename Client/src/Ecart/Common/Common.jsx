import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link,useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';


// const ReadData = () => {
//     const cartData = localStorage.getItem('cart')
//     if (cartData) {

//         return JSON.parse(cartData)
//     } else {
//         return []
//     }
// }
function Common() {

    const navigate = useNavigate()
    // const [cart, setCart] = useState(ReadData())
    let name = localStorage.getItem('name')
 

    const items = useSelector((state) => state.cart)


    const logOut = () => {
      localStorage.removeItem('name')
      navigate('/products')
        toast.warn('LogOut successfully')
    }
    return (
        <>
            <ToastContainer />
            <div className="mainbody">
                <Nav className="justify-content-end">
                    {/* {name && <h4>{name}</h4>} */}

                    <Nav.Item className='nav-items'>
                        <Nav.Link className='nav-links' ><Link to='/'>Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-items'>
                        <Nav.Link className='nav-links' ><NavLink to='/products'>Products</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='nav-items'>
                        <Nav.Link className='nav-links' ><NavLink to='/cart'><AiOutlineShoppingCart /><span>{items.length}</span></NavLink></Nav.Link>
                    </Nav.Item>

                    <Nav.Item className='nav-items'>
                        {!name ?
                        <Nav.Link className='nav-links'><NavLink to='/login'>< CgProfile /></NavLink></Nav.Link>:

                        <Nav.Link className='nav-links' onClick={logOut}><AiOutlineLogout /></Nav.Link>
                        }
                    </Nav.Item>
                    


                </Nav>

            </div>


        </>
    )
}

export default Common