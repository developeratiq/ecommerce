import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { remove, removeFromCart } from '../Redux/ProductSlice'
import { useDispatch } from 'react-redux'
import { Link, json, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import FormatPrice from './FormatPrice'
import { fetchCart } from '../Redux/ProductSlice'




import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BsTrash } from 'react-icons/bs';

import { FaMinus, FaPlus, FaRupeeSign } from 'react-icons/fa';
import { appContext } from '../Context/Context'

// import { fetchCart } from '../Api/Api'

const readData = () => {
    const cartData = localStorage.getItem('cartdetails')
    if (cartData) {

        return JSON.parse(cartData)
    } else {
        return []
    }
}
const redCartData = () => {
    const cartData = localStorage.getItem('cart')
    if (cartData) {

        return JSON.parse(cartData)
    } else {
        return
    }
}




function AddToCart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const{project,setProject,cartDetails,setCartDetails}=useContext(appContext)
 console.log(cartDetails)


    //   let myEmail =JSON.parse(email)

    //    email =json.parse(email)





    // const cartData = useSelector((state) => state.cart.cartData.result)
    // console.log(cartData)

    // const [items,setItems] = useState(cartData.cart)
    // console.log(items[0].newitems)
    const [data, setData] = useState(cartDetails)
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [singleQuan, setSingleQuant] = useState(1)
    const [cartData, setCartData] = useState(project)

    // console.log(items)
    useEffect(() => {
        const name = localStorage.getItem('name')
        if (!name) {
            navigate('/login')
        }
        setData(cartDetails)

        // dispatch(fetchCart())

        // fetchCart().then((res)=>setItems(res.result))
    }, [])



    // --------------quanity---------------------

    const getQuantity = (productId) => {
        return cartData && cartData.items[productId]
    }

    // -----------------increment---------------------
    const increament = (productId) => {
        const existingQuantity = project.items[productId]
        const __cartData = { ...project };

        __cartData.items[productId] = existingQuantity + 1
        __cartData.totaItems += 1
        setProject(__cartData)
        setCartData(__cartData)

    }


    // -------------decraese---------------------

    const decrease = (productId) => {

        const existingQuantity = project.items[productId]
        const __cartData = { ...project };

        if (existingQuantity == 1) {
            return
        }

        __cartData.items[productId] = existingQuantity - 1
        __cartData.totaItems -= 1
        setProject(__cartData)
        setCartData(__cartData)

    }


    // ----------------sum of each data----------------------

    let total = 0
    const getSum = (productId, price) => {

        const sum = price * getQuantity(productId)

        // -----------next line calculating total amounts------------------
        total += sum
        return sum
    }


    // -------------------deleting from cart--------------------------



    const handleRemove = (id) => {
const _cartData={...project}
const qty= _cartData.items[id];

// ----------deelting also data-------------------

 delete _cartData.items[id]
 _cartData.totaItems -=qty 
 setProject(_cartData)



const _data=[...data]
const updatedData =_data.filter(x=>x.id!==id)

setData(updatedData)
setCartDetails(updatedData)

toast.warning('deleted from cart')


    }

    // console.log(typeof)
    return (
        <>


            <ToastContainer />


            {


                data.length==0 ? (
  <>
  
  
                    <div className='flex align-middle justify-center'>
                        <img  className='w-[80vw] h-[80vh] mt-3'  src='https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png'></img>
                    </div>

                    <Link className=' ml-[40vw]' to={'/products'}><button className='bg-slate-800 text-teal-50 p-2 rounded-md
                    shadow-lg  pt-[5vh]'>Back to Shopping</button></Link>
                    </>
                ) : (
                    <>
                        <div className="cart d-flex   " key={Math.random()}>
                            <div className="col-lg-8 p-2  col-md-8  col-sm-10 cart-left " key={Math.random()} >
                                {data && data.map((c) => (
                                    <>
                                        <div className="cart-inner d-flex justify-content-around align-items-center" key={Math.random()}>
                                            <div className="cart-image">
                                                <img src={c.image[0].url} alt='image' />
                                            </div>
                                            <div className="cart-name">

                                                <Link to={`/products/${c.id}`}><font style={{ fontSize: "17px" }}>{c.name}</font></Link>

                                            </div> <div className="cart-quantity  d-flex justify-content-around align-items-center w-25">


                                                <i className="minus" onClick={() => decrease(c.id)}><FaMinus /></i>
                                                <div className="minus">{getQuantity(c.id)}</div>
                                                <i className="plus" onClick={() => increament(c.id)}  > <FaPlus /></i>
                                            </div> <div className="cart-price flex">
                                                <b>
                                                    <FormatPrice price={getSum(c.id, c.price)} />
                                                </b>
                                            </div>
                                            <div className="trash">
                                                <i className='h-25'
                                                    onClick={() => handleRemove(c.id)}
                                                ><BsTrash className='h-25' > </BsTrash></i>
                                            </div>
                                        </div>
                                    </>
                                ))}
                                <hr />
                                <div className="grandtotal">
                                    <h5 className='text-end mr-2'>Grand Total &nbsp;:&nbsp;<FormatPrice price={total} /></h5>
                                </div>
                            </div>
                            <div className="col-lg-4 p-2 col-md-4 col-sm-10  checkout" >
                                <h5 style={{ textAlign: "center" }} className='mt-4'>Order Details</h5>

                                <div className="totatal">
                                    total Quantity :&nbsp;{ project &&project.totaItems}
                                </div><div className="totatal">
                                    <b>Total</b>:&nbsp;<FormatPrice price={total} />
                                </div>
                                <div className="cart-button">
                                    <button className='button chekoutbtn'
                                        onClick={() => navigate('/buynow')}  
                                    >place Order</button>
                                </div>
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