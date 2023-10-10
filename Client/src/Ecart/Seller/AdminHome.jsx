import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import BodyPart from './MainBody/BodyPart'
import AdminHeader from './Header/AdminHeader'
import AdminFooter from './Footer/AdminFooter'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

function AdminHome() {
  return (
    <AdminContainer>
      <div className="row">
        <div className="col-lg-3 bg-slate-700 sidebar">
          <Sidebar />

        </div>
        <div className="col-lg-9  rightpart  ">
          <div className="row shadow-sm  adminheader">

            <AdminHeader />
          </div>
          <div className="adminBody">
           <Outlet/>
            {/* <BodyPart /> */}
          </div>

          <div className="adminfooter">
            <AdminFooter />

          </div>

        </div>
      </div>
    </AdminContainer>
  )
}

export default AdminHome

const AdminContainer = styled.div`
max-width: 95 vw;
margin: 0 auto;
border: 1px solid red;


.sidebar{
  height: 99vh;

}
       
.rightpart{
  /* margin-top: 3vh; */
  border: 3px solid black;
  display: flex;
  flex-direction: column;
}
.adminheader{
height:10vh ;
border: 1px solid red;

}

.adminBody{
  margin: .7rem 0;
  border: 1px solid red;
  height: 75vh;
}
.adminfooter{
  border: 1px solid red;
  height:10vh;
}
`;

