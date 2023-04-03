import React, { useEffect, useState } from 'react'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { toast } from 'react-toastify';
import pincode from './Pincode'
import Quantity from './Quantity';
import  {add}from '../Redux/ProductSlice'
import { useDispatch } from 'react-redux';
import { CgLayoutGrid } from 'react-icons/cg';
import { json, Navigate, useNavigate } from 'react-router-dom';

const readData = ()=>{
  const cartData = localStorage.getItem('cart')
  if(cartData){
    return JSON.parse(cartData)
  }
  else{
    return []
  }
}

function Desc({desc,items}) {
  // console.log(items)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [pin ,setPinCode]=useState()
  const[avail,setAvail]=useState(true)
  const[deliverable,setDeliverable] = useState(false);
  const[nonDeliverable,setnonDeliverable] = useState(false);
  const[quantity,setQuantity] =useState(1)
  const[cartData,setCartData]=useState(readData())

  useEffect(()=>{
    const strigified = JSON.stringify(cartData)
    localStorage.setItem('cart',strigified)
  },[cartData])

  useEffect(()=>{ 
    const pincode =localStorage.getItem('pincode')
      if(pincode){
         setPinCode(pin)
         setAvail(true)
        //  console.log(pincode)
      } else{
         setAvail(false)
      }
  },[])

  const checkPin = (e)=>{
   e.preventDefault();
   if(!pin) {
    toast.warn('please enter pincode')
   }else{
    let changeType = parseFloat(pin)  // changing string to number
    if(pincode.includes(changeType)){
    //  console.log('yes available')
    const mypincode= localStorage.setItem('pincode',pin)
     setnonDeliverable(false)
     setDeliverable(true)
    } else{
    //  console.log('not Available')
     setDeliverable(false)
     setnonDeliverable(true)
    }
   }
   
  }

    const increase = ()=>{
      if(quantity<=4){

        setQuantity(quantity+1)
      }else{
      }
    }

    const decrease = ()=>{
       if(quantity<=1){

       }else(
        setQuantity(quantity-1)
       )
    }

    

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let numbers = index + 0.5;
        return <span style={{ color: "goldenrod" }} key={index}>
    
          {
            desc.stars >= index + 1
              ? <FaStar />
              : desc.stars >= numbers
                ? <FaStarHalfAlt />
                : <AiOutlineStar />
          }
    
        </span>
    
      })

      const user = localStorage.getItem('name')
      const addtocart = ()=>{
        
          if(!user){
            toast.warn('please login to add')
            navigate('/login')
          } else{
    
            dispatch(add(items))
            const newitems = items

         setCartData([...cartData,newitems]);

            
          }
        }
      
  return (
    <>
    <div className="container">
    <div className='desc-style'>


{/* { openLoginBox == true && <Loign open={openLoginBox} close={closeModalBox}></Loign>
            } */}
      <h3 style={{ textTransform: "capitalize" }}>{desc.name}</h3>
      {/* <h5>{desc.company}</h5> */}
      {/* Stars: {desc.stars} */}
      {ratingStar} ({desc.reviews} customer reviews)
      <div className="description">
        <p>{desc.description}</p>
      </div>

      <div className="service" >
        <div className="servicelist">
          <TbTruckDelivery></TbTruckDelivery>
          <p>free delivery</p>
        </div>
        <div className="servicelist">
          <TbReplace></TbReplace>
          <p>7 days replacement</p>
        </div>
        <div className="servicelist">
          <TbTruckDelivery></TbTruckDelivery>
          <p>atiq delivery co</p>
        </div>
        <div className="servicelist">

          <MdSecurity></MdSecurity>
          <p>2 year waranty</p>
        </div>

      </div>
      <hr />
      <div className="details">
        <p> Id :{desc.id}</p>
        <p> Brand :{desc.company}</p>
        {
          desc.stock <= 5 ? (<p style={{ color: "red" }}> hurry upp!!{desc.stock} left</p>) :
            (<p style={{ color: "green" }}>In Stock</p>)
        }
      </div>

      {/* <hr/> */}

      {/* <h2>{desc.price}</h2> */}

{!avail &&<form action="" onSubmit={checkPin} className=''>
      {/* <p>check pincode</p> */}
        <input type="text" 
        className='pincode md-3 col-sm-5' 
        placeholder='Enter pincode'
         value = {pin}
         onChange={(e)=>setPinCode(e.target.value)}
        />
        <button   className='btn btn-info m-3 col-sm-5'  type="submit" >Check Pincode </button>
        {deliverable===true &&(<p style={{color:"green"}}>deliverable</p>)}
         {nonDeliverable===true &&(<p style={{color:"red"}}>Out of deivery Range</p>)}
      </form>
}
      

        {/* <Quantity value={quantity} increase={increase} decrease={decrease} ></Quantity>      */}
  
      <div className="cart-button">
        {/* <button className='btn btn-success '>➕Buy Now</button> */}
       
                   <button
                    
                   className='btn btn-success ' type='button' onClick={addtocart}>🛒Add to Cart</button>
    
      </div>


    </div>
    </div>
    </>
  )
}

export default Desc