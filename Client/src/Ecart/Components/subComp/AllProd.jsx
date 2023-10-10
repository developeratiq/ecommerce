import React from 'react'
import Cards from '../Cards'
import { Card } from 'react-bootstrap'

function AllProd({product}) {
  // console.log(product)

 
  return (
    <>
    <div className="d-flex flex-wrap gap-3" >

        {product}

       



</div>
    
    </>
  )
}

export default AllProd