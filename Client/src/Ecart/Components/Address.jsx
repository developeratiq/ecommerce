import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToAddress } from '../Redux/AddresSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { json } from 'react-router-dom';



const getAddress = ()=>{
  const addresStorage =window.localStorage.getItem('address')
  if(addToAddress){
    return JSON.parse(addresStorage)
  }else {
    return []
  }
}
function  Address() {
  const addData = useSelector(state => state.address.address.result)
  const dispatch=useDispatch()
  const[address,setAddress]=useState({
    name:"",
    adres:"",
    city:"",
    phone:"",
    pincode:"",
    state:"",
  })
  const[allAddress,setAllAddress]=useState()
  // console.log(addData)
  // console.log(allAddress) 
//   useEffect(()=>{
// addData&& setAllAddress(addData)
// console.log(allAddress)
//   },[])
  
  let name,value
  const handleChange =(e)=>{
    name=e.target.name
    value=e.target.value
    setAddress({...address,[name]:value})
  }
  const[addToAddress,setAddAddress]=useState(getAddress())
  
  console.log(addToAddress)
  useEffect(()=>{
    if(addToAddress ==null){
console.log(addToAddress)
      window.localStorage.setItem("address",JSON.stringify([]))
    }
    // window.localStorage.setItem('cartdetails',JSON.stringify(cartDetails))
  window.localStorage.setItem("address",JSON.stringify(addToAddress))
},[addToAddress])

// useEffect(()=>{
//     window.localStorage.setItem("address",JSON.stringify([]))

//   },[])
  const handleSubmit=()=>{
    const{name,adres,city,phone,pincode,state}=address
    if(!name || !adres || !phone || !pincode || !state){
      toast.error('fill all field')
    }else{
      const _address =[...addToAddress]
setAddAddress([...addToAddress,address])
    }


      
//     dispatch(addToAddress({name,adres,city,phone,pincode,address,state})).then(()=>{
// toast.success('address added')
//     })
// console.log(address)
  }
  console.log(addToAddress)

  return (
    <>
      
      <section>
        <ToastContainer/>
        
        <div className="cart d-flex ">
          <div className="col-lg-4 p-2 address" >
            {
              addData&&addData.map((ad)=>(
                <>
                <div className="adinner flex justify-between w-[50%]">
                  <input  style={{width:"20px"}} type="checkbox" value={ad} />
                  <div className="adContent">
                      <h5>{ad.name&& ad.name}
                        </h5>
                        <p>{ad.adres &&ad.adres}</p>
                        {ad.city&&ad.city} <h4> {ad.state&&ad.state}</h4>
                        <h5>{ad.phone&&ad.phone} </h5> {ad.pincode&&ad.pincode}
                  </div>
                </div>
                <hr />
                
                </>
              ))
            }
          
       <div className="cart-button">
                <button className='button chekoutbtn'
                // onClick={()=>navigate('/buynow')}
                >place Order</button>
              </div>

          </div>
          <div className="col-lg-8 p-2 cart-left" >

            <div className="form w-[50vw]">
              <div>
               <div>

            <label htmlFor="Name"><h5>Name</h5></label>
               </div>
            
            <input className='rounded-md shadow-lg border' type="text" name='name'  onChange={handleChange}/>
              </div> <div>
               <div>

            <label htmlFor="Name"><h5>Village/Area</h5></label>
               </div>
            
            <input className='rounded-md shadow-lg border' type="text" name='adres' onChange={handleChange} />
              </div> <div>
               <div>

            <label htmlFor="Name"><h5>City &nbsp;&nbsp;</h5></label>
               </div>
           
            <input className='rounded-md shadow-lg border' type="text" name='city'  onChange={handleChange}/>
              </div> <div>
               <div>

            <label htmlFor="Name"><h5>phone</h5></label>
               </div>
            
            <input className='rounded-md shadow-lg border' type="text" name='phone'  onChange={handleChange}/>
                            <div>
                              </div> </div> <div>
                                <div>

            <label htmlFor="Name"><h5>pincode</h5></label>
                                </div>

            <input className='rounded-md shadow-lg border' type="text" name='pincode' onChange={handleChange} />
                           <div>
                            </div>  </div><div>
                              <div>

            <label htmlFor="Name"><h5>State</h5></label>
                              </div>

            <input className='rounded-md shadow-lg border' type="text" name='state'  onChange={handleChange}/>
              </div>

              
               <button className=' btn  btn-success mt-3 p-3 w-[30%] text-xl px-3 text-center'
               onClick={handleSubmit}
               >
                Submit</button>
             
            </div>
            <hr />
          </div>


          <hr />
        </div>



      </section>

    </>
  )
}

export default Address