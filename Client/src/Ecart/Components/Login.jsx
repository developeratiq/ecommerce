import React from 'react'
import {
    MDBContainer, MDBCol, MDBRow, MDBBtn,
    MDBIcon, MDBInput, MDBCheckbox
} from 'mdb-react-ui-kit';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {useNavigate}from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();

  const navigate = useNavigate()
    
  

    const handleSubmit =  async (e)=>{
        e.preventDefault();
        let result = await fetch('/login',{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
           email,password
        })
    }
    )
    result = await result.json();
    
    if( result.token){
        console.log('yes token')
        localStorage.setItem('token',result.token)
        localStorage.setItem('name',result.data.name)
        // localStorage.setItem('name',result.user.name)
        // localStorage.setItem('email',result.user.email)
        // localStorage.setItem('role',result.user.role)
        // localStorage.setItem('id',result.user._id)
        navigate('/products')
        toast.warn('logged in')
    }
    else{
        toast.warn(result.err)
    }
    toast.success(result.result)
    }
    return (
        <>
        <ToastContainer />
            <div className="container">
                <MDBContainer fluid className="p-4 my-5 h-custom" >

                    <MDBRow>

                        <MDBCol col='10' md='5' >
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                        </MDBCol>

                        <MDBCol col='3' md='5'>

                            <div className="d-flex flex-row align-items-center justify-content-center">

                                <p className="lead fw-normal mb-0 me-2">Sign in with</p>

                                <MDBBtn floating size='sm' tag='a' className='me-2'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn floating size='sm' tag='a' className='me-2'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>

                                <MDBBtn floating size='sm' tag='a' className='me-2'>
                                    <MDBIcon fab icon='linkedin-in' />
                                </MDBBtn>

                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                    style={{height:"54px"}}
                                    type="email" placeholder="Enter email" 
                                    required
                                     value={email}
                                     onChange={(e)=>setEmail(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                    style={{height:"54px"}}
                                    required
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                

                                <div className='text-center text-md-start mt-4 pt-2'>
                                <button className='btn btn-primary' type='submit'>Login</button>
                                
                                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to='/signup'>Register</Link></p>
                            </div>
                              
                            </Form>

                        </MDBCol>

                    </MDBRow>

                    {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

  <div className="text-white mb-3 mb-md-0">
    Copyright © 2020. All rights reserved.
  </div>

  <div>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
      <MDBIcon fab icon='facebook-f' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='twitter' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='google' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='linkedin-in' size="md"/>
    </MDBBtn>

  </div>

</div> */}

                </MDBContainer>

            </div>
        </>
    )
}

export default Login