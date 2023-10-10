
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navigation from '../NAVIGATION/Navigation'
function Protected() {
  return (
    <>
    <Navigation/>
     <Outlet/>
    </>
  )
}

export default Protected