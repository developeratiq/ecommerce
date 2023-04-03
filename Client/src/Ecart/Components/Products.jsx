import React,{useEffect} from 'react'
import {  AiOutlineShoppingCart} from "react-icons/ai";
import axios from 'axios';
import { useState } from 'react';
import { data } from 'jquery';
import AddToCart from './AddToCart';
import  {add}from '../Redux/ProductSlice'
import { useDispatch } from 'react-redux';
import {Link}from 'react-router-dom'
import { toast } from 'react-toastify';
import Search from './Search';
import SelectInput from './SelectInput';

function Products() {
  const user = localStorage.getItem('name')

    const dispatch = useDispatch()
    const[datas,setDatas]=useState([])
    const[cartItems,setCartItems]=useState([])
    const[showcart,setShowCart]=useState(false)
    const[searchData,setSearchData]=useState() 
    const[select,setSelect]=useState()   
    const url  =`https://api.pujakaitem.com/api/products`

    const fetchProducts = ()=>{
        axios.get(url).then((data)=>setDatas(data.data))
        .catch((error)=>console.log(error))
    }

    
    useEffect(()=>{
      if(select=='Sort By Price'){
        const price =datas.sort((a,b)=>a.price-b.price)
        
        setDatas([...price])
      }
      if(select=='Sort By Name'){
        const name =datas.sort((a,b)=> a.name.localeCompare(b.name))
        // console.log(name)
        setDatas([...name])
      }
    },[select])

    useEffect(() => {
      localStorage.setItem('name','md atiq')
     
      fetchProducts();
     
    }, [])
        
    
        


  return (
    <>
    {!data?(<>loading....</>):
    (<>
    <div className="container">

    <div className="top">

    <Search items={datas} setSearchData={setSearchData}   />
     <SelectInput setSelect={setSelect}/>

    </div>
     <div className="cards">
     

        {
            datas&&datas.filter((f)=>{
              return searchData.toLowerCase==''? f :f.name.toLowerCase().includes(searchData)
            })
             . map((items ,index)=>(
                <>
                <div className="card" key={index}>
          <div className="card_img">
            <Link  to={`/products/${items.id}`}><img src={items.image} alt={items.name} /></Link>
             
              <div className="card_footer">
              <h4>{items.name}</h4>
              {/* <p>desc</p> */}
              <p>{items.price}</p>
              {/* <button className='btn btn-primary' onClick={()=>addToCart(items)}> Add to <AiOutlineShoppingCart/></button> */}

              </div>
        </div>
       
       
        </div>
                
                </>
            ))
        }
        
        
     </div>

    
    </div>
    
    </>)
  }
    
    </>
  )
}

export default Products