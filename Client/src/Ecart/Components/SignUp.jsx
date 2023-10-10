import React from 'react'
import {useNavigate}from 'react-router-dom'
import {
    MDBContainer, MDBCol, MDBRow, MDBBtn,
    MDBIcon, MDBInput, MDBCheckbox
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ListGroup } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function SignUp() {

  const navigate = useNavigate()
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [gender, setGender] = useState();
    const [phone, setPhone] = useState();


    const handleSubmit =  async (e) => {
        e.preventDefault();
        
    let result =  await fetch('/signup',{
        method: "POST",
        body: JSON.stringify({
           name,email,phone,password
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    result = await result.json();
    if(result.result !== 'user registered succesfully'){

        toast.error(result.result)
    }
    if(result.result=='user registered succesfully'){
        toast.error('successfull')
        navigate('/login')
    }
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

                        <MDBCol col='4' md='5' className='right'>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Register</p>
                            </div>
                            <Form onSubmit={handleSubmit}>
                               
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="User Name"
                                    style={{height:"54px"}}
                                        
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                              </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                    style={{height:"54px"}}
                                       
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type="tel" placeholder="1234567890"
                                    style={{height:"54px"}}
                                        
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                    style={{height:"54px"}}
                                        
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <div className='text-center text-md-start mt-4 pt-2'>
                                    <button className='btn btn-primary' type='submit'>SignUp</button>

                                    <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                                

                            </Form>
  

                        </MDBCol>

                    </MDBRow>

            

                </MDBContainer>

            </div>

        </>
    )
}

export default SignUp