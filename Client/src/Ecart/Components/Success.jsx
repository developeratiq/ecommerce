import React from 'react'
import {     useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'

function Success() {
    const navigate=useNavigate()
  return (
    <>
    <div className='d-flex justifyvw-center'>
        <div className='d-flex w-[80vw] justify-around align-between success'>
            <div>
            <h2>You Order Recieved</h2>
        <img src="https://www.easy-gst.in/wp-content/uploads/2017/07/success-icon-10-300x300.png" alt="" />
            <h5>To Track your Order</h5>
            <h6>Your Order Id is : <b>{Date.now()}</b></h6>
            </div>
        <div className='mt-[8vh]'>
            <h5>have a great day ! visit again </h5>
          <Button className=' filterbtn shadow-lg bg-[#4859CA] rounded-md px-2 py-1 mb-2 capitalize'
          onClick={()=>navigate('/products')}
          >Continue shopping</Button>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Success