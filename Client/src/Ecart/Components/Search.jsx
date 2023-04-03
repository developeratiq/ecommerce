import React, { useEffect, useState } from 'react'
import '../css/search.css'
function Search({setSearchData}) {
useEffect(()=>{
setSearchData('')
},[])
    
  return (
    <div>

<div className="search-container">

   <input type="search" 
   onChange={(e)=>setSearchData(e.target.value)}
   placeholder='search here'/> 
    <i className="fas fa-search search-icon"></i> 

    </div>
   </div>
  )
}

export default Search