import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {remove} from '../Redux/ProductSlice'
import {useDispatch}from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
import FormatPrice from './FormatPrice'

const readData = ()=>{
    const cartData = localStorage.getItem('cart')
    if(cartData){

        return JSON.parse(cartData)
    }else {
        return []
    }
}



function AddToCart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    // const items = useSelector((state) => state.cart)
    const [items,setItems] = useState(readData())
    const [data, setData] = useState([])
    console.log(items)
    useEffect(() => {
        const name = localStorage.getItem('name')
        if(!name){
           navigate('/login')
        }

    }, [])

    useEffect(()=>{
   localStorage.setItem('cart',JSON.stringify(items))
    },[items])

   const handleRemove = (id)=>{
    dispatch(remove(id))
       const newItems= items.filter((x)=>{
        return x.id!==id
       })
       setItems(newItems)
   }

    return (
        <>


            {
                !data ? (<Loader/>) : (
                    <>
                        <div className="cart">
                            
                            <div className="cartItems">
                                {
                                    items && items.map((data) => (<>
                                        <div className="allcards">
                                            <div className="card-items">
                                                <div className="img">
                                                <img src={data.image[0].url} alt="" />                                                </div>
                                                
                                                <div className="name">
                                                <h1>{data.name}</h1>
                                                <h4><FormatPrice price={data.price}/></h4>
                                                </div>  

                                            </div>
                                            <div className="desc">
                                                <p>{data.description}</p>

                                                {/* <button className='button'> buy Now</button> */}
                                            <button  className='button' style={{backgroundColor:"#59E153 ", border:"none",boxShadow:"1px 5px 5px 1px #C0EA9A"}}
                                                onClick={()=>navigate('/buynow')}
                                                >BuyNow</button>
                                                 <button className='button ' 
                                                  onClick={()=>handleRemove(data.id)}
                                                 >Remove</button> 
                                            </div>
                                        </div>
                                        <hr />


                                    </>))
                                }
                            </div>
                            <hr />
                        </div>

                    </>
                )
            }

        </>
    )
}

export default AddToCart