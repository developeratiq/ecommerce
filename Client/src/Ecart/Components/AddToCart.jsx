import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {remove} from '../Redux/ProductSlice'
import {useDispatch}from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
                !data ? (<>loading...</>) : (
                    <>
                        <div className="container">
                            
                            <div c
                            lassName="cartItems">
                                {
                                    items && items.map((data) => (<>
                                        <div className="allcards">
                                            <div className="card-items">
                                                <div className="img">
                                                <img src={data.image[0].url} alt="" />                                                </div>
                                                
                                                <div className="name">
                                                <h1>{data.name}</h1>
                                                <h4>{data.price}$</h4>
                                                </div>  

                                            </div>
                                            <div className="desc">
                                                <p>{data.description}</p>
                                                <button style={{margin:"1rem"}} className='btn btn-success' 
                                                onClick={()=>navigate('/buynow')}
                                                >BuyNow</button>
                                                 <button className='btn btn-danger'
                                                  onClick={()=>handleRemove(data.id)}
                                                 >Remove</button> 
                                            </div>
                                        </div>


                                    </>))
                                }
                            </div>
                        </div>

                    </>
                )
            }

        </>
    )
}

export default AddToCart