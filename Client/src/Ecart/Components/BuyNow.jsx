import React, { useEffect, useState } from 'react'
import '../css/buynow.css'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard } from 'react-icons/fa';
import Quantity from './Quantity';
import { useForm } from "react-hook-form";
import axios from 'axios'

const readData = () => {
  let data = localStorage.getItem('cart')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

function BuyNow() {

  // quantity section starts here 


  // quantity section ends here 

  // const items = useSelector((state)=>state.cart)






  const [lists, setLists] = useState(readData());
  const [price, setPrice] = useState(90000)
  const navigate  = useNavigate()
  // useEffect(()=>{
  //   const itemPrice = lists&&lists.reduce((a,i)=>a.price+i.price)
  //    setPrice(itemPrice)
  // },[price])
  // console.log(price)

  const [quantity, setQuanity] = useState(1)
  const increase = (id) => {
    console.log(id)
    lists.map((x) => {
      if (x.id == id) {
        setQuanity(pre => pre + 1)
        console.log(quantity)
      }
    })
  }
  const decrease = (id) => {
    console.log(id)
  }

  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data)
    localStorage.setItem('Address', JSON.stringify(data))
    // localStorage.setItem('adresss', JSON.stringify(data))
  }
  const [isaddress, setAddress] = useState()
  const [address, setAddres] = useState()
  useEffect(() => {
    const addres = localStorage.getItem('Address')
    if (addres) {
      setAddres(JSON.parse(addres))
      setAddress(true)
    } else {
      setAddress(false)
    }
  }, [])

  const addPay =  async ()=>{
   const {data:{order}}=  await axios.post('http://localhost:5000/check',{
      amount:price
    })
    // console.log(data)
    console.log(order.id)
    console.log(order.amount) 
    const key= 'rzp_test_b57CHszkJAIpNL'
    var options = {
      key,
      // key: "rzp_test_b57CHszkJAIpNL", 
      amount: order.amount, 
      currency: "INR",
      name: "Md atiqur rahman",
      description: "testong razorpay",
      image: "https://img.freepik.com/free-vector/letter-k-logo-concept-your-royal-brand_1017-33266.jpg?size=626&ext=jpg",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:5000/paymentverify",
      prefill: {
          name: "Gaurav Kumar",
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


// const {city,zipcode,state,phone,fullname,email}=address

  return (
    <>
      <div className=" buynow-container container ">
        <div className="row">

          {isaddress ? (
            // <div className="abc">

           <div className="card">
             <h6>{address.fullname}</h6>
             <p>{address.address}</p>
             <span>{address.city} , {address.state}</span>
             <p>{address.pincode}</p>
             <p> +91 {address.phone}</p>
             <div className="add">

             <button className='btnn' 
              onClick={()=>setAddress(false)}
             >➕ Add Address</button>
             </div>
           </div>
            // </div>
          ):<div className="col-50">
          <div className="container">
            <form action="" onSubmit={handleSubmit(submit)}>
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname"><i className="fa fa-user" /> Full Name*</label>
                  <input
                    {...register("fullname", { required: true })}
                    type="text" id="fname" name="fullname" placeholder="John M. Doe" />
                  <label htmlFor="email"><i className="fa fa-envelope" /> Email*</label>
                  <input
                    {...register("email", { required: true })}
                    type="text" id="email" name="email" placeholder="john@example.com" />
                  <label htmlFor="telephone"><i className="fa fa-phone" /> Phone *</label>
                  <input
                    {...register("phone", { required: true, minLength: 0, maxLength: 20 })}
                    type="tel" id="phone" name="phone" placeholder="1234567890" />
                  <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address*</label>
                  <input
                    {...register("address", { required: true })}
                    type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                  <label htmlFor="city"><i className="fa fa-institution" /> City*</label>
                  <input  {...register("city", { required: true })}
                    type="text" id="city" name="city" placeholder="New York" />
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State*</label>
                      <input {...register("state", { required: true })}
                        type="text" id="state" name="state" placeholder="NY" />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip*</label>
                      <input
                        {...register("zipcode", { required: true })}
                        type="text" id="zip" name="zipcode" />
                    </div>
                  </div>
                </div>

              </div>
              <label>
                <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
              </label>
              <input type="submit" defaultValue="Continue to checkout" className="btn" />
            </form>
          </div>
        </div>
          
          }
          

          {/* bill section starts here  */}
          <div className="col-50">
            <div className="container">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">price</th>
                    {/* <th scope="col">quantity</th> */}
                    <th scope="col">subtotal</th>
                  </tr>
                </thead>


                <tbody>
                  {
                    lists && lists.map((data) => (
                      <>
                        <tr>
                          <th scope="row"><Link to={`/products/${data.id}`}>{data.name}</Link></th>
                          <td>{data.price}</td>
                          {/* <td onClick={()=>increase(data.id)}>➕ </td>
      <td onClick={()=>decrease(data.id)}> ➖</td> */}
                          <td> {data.price * quantity}</td>
                        </tr>
                      </>
                    ))
                  }
                  <tr>
                    <th scope="row">Total</th>
                    <td></td>
                    {/* <td> {price}</td> */}
                    <th scope='row2'>{price}</th>
                  </tr>

                </tbody>
              </table>
              <button onClick={addPay}>Start Payment</button>
            </div>
          </div>
          {/* bill sections ends here  */}
        </div>

      </div>

    </>
  )
}

export default BuyNow