import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
// import { a } from 'react-router-dom'



function Routing() {
  return (
    <div>
   <LinksAll></LinksAll>

    </div>
  )
}

export default Routing


function LinksAll(){
    return(
      <>
       
       <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
       </nav>
      </>
    )
}
