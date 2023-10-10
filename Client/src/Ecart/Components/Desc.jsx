import React, { useContext, useEffect, useState } from 'react'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import pincode from './Pincode'
import Quantity from './Quantity';
// import { add, addToCart } from '../Redux/ProductSlice'
import { useDispatch } from 'react-redux';
import { CgLayoutGrid } from 'react-icons/cg';
import { json, Navigate, useNavigate } from 'react-router-dom';
import { addCart } from '../Api/Api';
import Navigation from '../NAVIGATION/Navigation';
import cart, { add } from '../Redux/cart'
import { appContext } from '../Context/Context';

const readData = ()=>{
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


function Desc({ desc, items }) {


  
  const{project,setProject,cartDetails,setCartDetails}=useContext(appContext)
 
  // console.log(useContext(appContext))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [pin, setPinCode] = useState()
  const [avail, setAvail] = useState(true)
  const [deliverable, setDeliverable] = useState(false);
  const [nonDeliverable, setnonDeliverable] = useState(false);
  const [quantity, setQuantity] = useState(1)
  const [cartData, setCartData] = useState(readData())
  const[detailsCart,setDetailsCart]=useState(readDetails())
  // useEffect(() => {
  //   const strigified = JSON.stringify(cartData)
  //   localStorage.setItem('cart', strigified)
  // }, [])

 

 




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

  const { id, name, category, price, image } = items
  const productId =id
  const imageUrl = image[0].url
  const _image =imageUrl
  


  const user =window.localStorage.getItem('name')
 

 

  //  useEffect(()=>{
  //   localStorage.setItem('cartdetails',JSON.stringify(detailsCart))
  // },[detailsCart])


  const addtocart = (product) => {

    if (!user) {
      toast.warn('please login to add')
      navigate('/login')
    } else {
     
      
    let _cartDetails =[...cartDetails]
  
    if(_cartDetails.length===0){
      console.log('empty')
      _cartDetails.push(product)
    }

    const found =_cartDetails.find((elem)=>elem.id==productId)
    console.log(found)
    if(found==undefined){
      _cartDetails.push(product)
    }
    
    // if(_cartDetails.length>=1){
    //  console.log('this part working')

    //  _cartDetails.map((p)=>p.id!==product.id && _cartDetails.push(product))
    // }
// setCartDetails(_cartDetails)
       
  


       let _cart ={...project}

       if(!_cart.items){
        _cart.items={}
      //  setCartData(JSON.stringify(_cart))
       }
       if(_cart.items[product.id]){
        _cart.items[product.id] +=1
       
       }
     else{


      _cart.items[product.id]=1
    
     }

       if(!_cart.totaItems){
        _cart.totaItems =0
       }
       if(_cart.totaItems=== -1){
        _cart.totaItems=0
       }
     _cart.totaItems +=1
    setProject(_cart)
    setCartDetails(_cartDetails)
    toast.success('Added to cart ')


  


      // dispatch(addToCart({productId, name, category, price, _image, quantity})).then(()=>{
      //   toast.success('Added to Cart')
      //   navigate('/cart')
      // }
      
      // )
      
    }
  }

  return (
    <>
    <ToastContainer />
    
      <div className="desc">
        <div className='desc-style'>


          {/* { openLoginBox == true && <Loign open={openLoginBox} close={closeModalBox}></Loign>
            } */}
          <h3 style={{ textTransform: "capitalize" }}>{desc.name}</h3>
          {/* <h5>{desc.company}</h5> */}
          {/* Stars: {desc.stars} */}
          
          <div className="d-flex">
          {ratingStar}
          </div>
           ({desc.reviews} customer reviews)
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

          {!avail && <form action=""  className=''>
            {/* <p>check pincode</p> */}
            <input type="text"
              className='pincode md-3 col-sm-5'
              placeholder='Enter pincode'
              value={pin}
              onChange={(e) => setPinCode(e.target.value)}
            />
            <button className='btn btn-info m-3 col-sm-5 pincode-btn' type="submit" >Check Pincode </button>
            {deliverable === true && (<p style={{ color: "green" }}>deliverable</p>)}
            {nonDeliverable === true && (<p style={{ color: "red" }}>Out of deivery Range</p>)}
          </form>
          }


          {/* <Quantity value={quantity} increase={increase} decrease={decrease} ></Quantity>      */}

          <div className="cart-button">
            {/* <button className='btn btn-success '>➕Buy Now</button> */}

            <button

              className='button' type='button' onClick={()=>addtocart(items)}>🛒Add to Cart</button>

          </div>


        </div>
      </div>
    </>
  )
}

export default Desc