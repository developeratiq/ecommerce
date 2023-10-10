import React from 'react'
import ListView from './ListView'
import GridView from './GridView'

function Cards({name,image,id,category,listView,price,desc}) {
const style= {
  width:"20vw",
  display:"flex",
  flexWrap:"wrap"
 
}
// console.log(category)

    // console.log(props)
  return (
    <>
    
  { listView ?(
              <div className="products grid grid-rows-1 border-red-50 gap-4 ">
                    
                 <ListView 
                  name={name}
                  image={image}
                  price={price}
                  category={category}
                  id={id}
                  desc={desc}
                  
                 />
                    </div> ): 
              (
                <>
                   <GridView 
                    name={name}
                    image={image}
                    price={price}
                    category={category}
                    id={id}
                   
                   
                   />
                </>
              )

              
                }


    </>
  )
}

export default Cards