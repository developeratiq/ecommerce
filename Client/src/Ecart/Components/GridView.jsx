import React from 'react'
import { Link } from 'react-router-dom'
import FormatPrice from './FormatPrice';

function GridView({name,category,price,id,image,company}) {
  return (
    <>
        <div className="pcard  bg-slate-400 rounded-md h-[340px] w-[19vw]  pt-1 " >
                         
                         <Link  to={`/products/${id}`}>
                           <img className='h-[280px] w-[100%] ' src={image} alt={company} />
                           </Link>
                           <div className="div px-2 rounded-full opacity-[.8] shadow-lg"> {category}</div>
                           <div className="name pb-1">{name}</div>
                           <div className="price pb-1 ">
                           <FormatPrice price={price}/>
                           </div>
                         </div>
    </>
  )
}

export default GridView