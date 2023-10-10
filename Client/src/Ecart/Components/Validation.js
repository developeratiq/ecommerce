



if (!values.name) {
    errors.name == 'Name is Required'
} if (!values.email) {
    errors.email == 'email is Required'
} else if (!/\S+@\S+\.\+/.test(values.email)) {
    errors.email = 'Email is Required'
}

if (!values.phone) {
    errors.phone = 'Phone is Required'
} else if (values.phone.length < 10 || values.phone.length > 10) {
    errors.phone = 'Phone  number is not valid'

}
if (!values.password) {
    errors.password == 'password is Required'
} else if (values.password.length < 5) {
    errors.password == 'password must be atleast 5  character'

}
return errors;






<div className="desc">
                                                {/* <p>{data.newitems.description}</p> */}

                                                {/* <button className='button'> buy Now</button> */}
                                            <button  className='button' style={{backgroundColor:"#59E153 ", border:"none",boxShadow:"1px 5px 5px 1px #C0EA9A"}}
                                                onClick={()=>navigate('/buynow')}
                                                >BuyNow</button>
                                                 <button className='button ' 
                                                  onClick={()=>handleRemove(data._id)}
                                                 >Remove</button> 
                                            </div>