import React from 'react'
import Routing from './Routing/Routing'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import About from './Routing/Pages/About'
import Contact from './Routing/Pages/Contact'
import Home from './Routing/Pages/Home'
import Gallery from './Routing/Pages/Gallery'


function LearnJs() {
  return (
    <div>
       <BrowserRouter>
      <Routing></Routing>
       <Routes>
        <Route path='/'  element={<Home></Home>} index></Route>
        <Route path='/contact'  element={<Contact></Contact>} index></Route>
        <Route path='/about'  element={<About></About>} index></Route>
        <Route path='/gallery'  element={<Gallery></Gallery>} index></Route>
       </Routes>
       </BrowserRouter>
        {/* <h5>please don't try to moess with me because i learned react very carefully and now 
            i am going to revise it with fully energy
        </h5> */}
    </div>
  )
}

export default LearnJs