import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'

function AdminHeader() {
  // console.log(adminName)
  const[admin,setAdmin]=useState()
  const[token,setToken]=useState()
  
  useEffect(()=>{
    const adminName =localStorage.getItem('adminName')
    const adminToken =localStorage.getItem('adminToken')
    setToken(adminToken)
    console.log(token)
    setAdmin(adminName)

  },[])
  return (
    <div className='bg-dark'>
     <Nav>
      {
        admin&&<h4 className='mt-[2%] text-white '>{admin}</h4>
      }
     {
      !token ?  <ul>
      <li className='hover:bg-gray-600 px-2 py-2 rounded-md shadow-lg transition-all delay-75'><Link to={'/admin/login'}>Login</Link> </li>
      <li className='hover:bg-gray-600 px-2 py-2 rounded-md shadow-lg transition-all delay-75'><Link to={'/admin/signup'}>SignUp</Link> </li>
      {/* <li>SignUp</li> */}
      {/* <li></li> */}
    </ul> :
<li className='hover:bg-gray-600 px-2 py-2 rounded-md shadow-lg transition-all delay-75'><Link to={'/admin/signup'}>LogOut</Link> </li>

     }
     </Nav>

    </div>
  )
}
 
export default AdminHeader
const Nav = styled.nav`
/* border: 2px solid red; */
height: 10vh;
display: flex;
align-content: center;
justify-content: end;
margin-right: 7vw;
ul{
  display: flex;
  align-items: center;
  /* border: 1px solid green; */
  gap: 1rem;
}

 ul li a{
 color: white;
 }
`;