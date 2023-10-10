import React, { useEffect, useState } from 'react'
import '../css/buynow.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';
import Quantity from './Quantity';
import { useForm } from "react-hook-form";
import axios from 'axios'


import FormatPrice from './FormatPrice';
import { fetchCart } from '../Api/Api';
import { addToAddress, fetchAddress } from '../Redux/AddresSlice';
import Address from './Address';

import { Steps } from 'rsuite';
import PencilSquareIcon from '@rsuite/icons/legacy/PencilSquare';
import BookIcon from '@rsuite/icons/legacy/Book';
import WechatIcon from '@rsuite/icons/Wechat';
import SteamSquareIcon from '@rsuite/icons/legacy/SteamSquare';
import Success from './Success';

// const readData = () => {
//   let data = localStorage.getItem('cart')
//   if (data) {
//     return JSON.parse(data)
//   } else {
//     return []
//   }
// }

function BuyNow() {

  const [lists, setLists] = useState([]);
  useEffect(()=>{
    fetchCart().then((res)=>setLists(res.result))
  },[])

  // quantity section starts here 


  // quantity section ends here 

  // const items = useSelector((state)=>state.cart)



  const username =localStorage.getItem('name')
  // console.log(username)



  const [price, setPrice] = useState()
  const navigate  = useNavigate()
  
 
  
  

  const [quantity, setQuanity] = useState(1)
  const increase = (id) => {
    // console.log(id)
    lists.map((x) => {
      if (x.newitems.id == id) {
        setQuanity(pre => pre + 1)
        // console.log(quantity)
      }
    })
  }
  const decrease = (id) => {
    // console.log(id)
  }

 
  const [isaddress, setAddress] = useState()
  const [address, setAddres] = useState()

  useEffect(() => {
    dispatch(fetchAddress())
  }, [])

  const addPay =  async ()=>{
   const {data:{order}}=  await axios.post('http://localhost:5000/check',{
      amount:price
    })
    // console.log(data)
    // console.log(order.id)
    // console.log(order.amount) 
    const key= 'rzp_test_b57CHszkJAIpNL'
    var options = {
      key,
      // key: "rzp_test_b57CHszkJAIpNL", 
      amount: order.amount, 
      currency: "INR",
      name: username,
      description: "testong razorpay",
      image: "https://img.freepik.com/free-vector/letter-k-logo-concept-your-royal-brand_1017-33266.jpg?size=626&ext=jpg",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:5000/paymentverify",
      prefill: {
          name: "",
          email: "gaurav.kumar@example.com",
          contact: "9000090000"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#3399cc"
      }
  };
  
  const razor = new window.Razorpay(options);

    razor.open();
} 
const[fromatPrice,setFormatePrice]=useState()
const[addreess,setAdress]=useState({
  name:"",
  phone:"",
  city:"",
  adres:"",
  state:"",
  pincode:""
})




let name ,value
const handleChange =(e)=>{
name=e.target.name
value =e.target.value
setAdress({...addreess ,[name]:value})
}

const dispatch =useDispatch()

const handleSubmit =(e)=>{
  e.preventDefault()
  dispatch(addToAddress(addreess))
  
  // console.log(addreess)

}

// const {city,zipcode,state,phone,fullname,email}=address

  return (
    <>
   
      <div className=" buynow-container  ">
      
        <div className="row">

          {/* <Address/> */}
 <Success/>

          {/* bill section starts here  */}
         
          {/* bill sections ends here  */}
        </div>

      </div>

    </>
  )
}

export default BuyNow