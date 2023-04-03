import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className='navbar bg-dark'>
     <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <h2 className='home'>CricAtiq</h2>
                    </li>

                     <div className="flex2">
                    <li class="nav-item">
                        <NavLink className='flex21' to="/"><h6>Live</h6></NavLink>
                    </li>
                
                    <li class="nav-item">
                        <NavLink className='flex21' to="/upcoming"><h6>UpcomingSeries</h6></NavLink>
                        
                    </li>
                    <li class="nav-item">
                        <NavLink className='flex21' to="/news"><h6>News</h6></NavLink>
                        
                    </li>
                    </div>
                  
                 
                </ul>


    </nav>
  )
}

export default Nav 