import React from 'react'
import FormatPrice from './FormatPrice'
import { Link } from 'react-router-dom'

function ListView({ name,image,category,price,id,desc}) {
  // console.log(x)
  return (
    <div>
      <div className="listview shadow-sm " style={{ border: "1px solid grey", display: "flex", flexDirection: "column" }}   >
        <div className="viewslistitems flex justify-around p-3 w-[60vw]">
          <img className='w-[230px] h-[200px]' src={image} alt="" />
          <div className="listViewContent">
            <h5 className='mt-3'>{name}</h5>
            <p className='text-blue-600'> <FormatPrice price={price} /></p>
            <p className='h-[50px] w-[400px] overflow-hidden '>
              {desc}
            </p>
            <Link to={`/products/${id}`}>

              <button className='border border-indigo-600 p-1 text-indigo-700'>Read More</button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ListView