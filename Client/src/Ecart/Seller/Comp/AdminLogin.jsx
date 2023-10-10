import React, { useState } from 'react'
import styled from 'styled-components'
import { FormStyle, FormInput, FormButton } from '../styled'
import { useDispatch } from 'react-redux'
import { AdminSignin } from '../../Redux/AdminSlice'


function AdminLogin() {
    const dispatch =useDispatch()
    const[user,setUser]=useState({
        email:"",
        password:""
    })

    let name,value
    const handleChange =(e)=>{
        name=e.target.name
        value=e.target.value

        setUser({...user,[name]:value})
       
    }
    const handleSubmit =()=>{
        const{email,password}=user
        // console.log(user)
        dispatch(AdminSignin({email,password}))
    }


    return (
        <FormStyle className='shadow-xl rounded-md px-2'>

            <h1 >Login</h1>
            <div>Email</div>
            <div>
                <FormInput type='text'
                onChange={handleChange}
                name='email' placeholder='email@address.com' className='bg-transparent'></FormInput>
            </div> <div>
                <div>
                    password
                </div>

                <FormInput type='password'
                onChange={handleChange}
                name='password' placeholder='email@address.com' className='bg-transparent'></FormInput>
            </div>
            <FormButton
            onClick={handleSubmit}
            >Login</FormButton>
        </FormStyle>



    )
}

export default AdminLogin

