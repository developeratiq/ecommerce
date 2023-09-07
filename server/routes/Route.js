const express =require('express')
const Route = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const User = require('../schema/signUp');

// Route.get('/',(req,res)=>{
//     console.log(req.body)
//     res.send('hello from route page')
// })  


// ---------Signup Routes---------------------------------

Route.post('/signup', async (req, res) => {
    const { name, email, phone, password } = req.body

    if (!name || !email || !phone || !password) {
        return res.status(422).json({ result: "please fill all properly" });
    }

    try {
        let existed = await User.findOne({ email: email })
        if (existed) {
            return res.status(422).json({ result: "email  already exists" })
        }
            const user = new User({ name, email, phone, password })
            // -------password hashed---------------

            const userData = await user.save()
            if (userData) {
                res.status(201).json({ result: "user registered succesfully",data:req.body })
            } else {
                res.status(422).json({ result: "!Something went wrong" })
            }
        

    } catch (err) {
        res.send('err')
    }


})
   
// --------------------------LogIn Routes-------------------------------




Route.post('/login', async (req, res) => {

    const{email,password}=req.body
//    console.log(email,password)

    let userData = await User.findOne({email:email})
    
    if(userData){

        const isTrue = await bcrypt.compare(password,userData.password)
        if(!isTrue){
            return res.status(404).json({err:"Invalid credentials"})
        }else{
            jwt.sign({email},process.env.SECRET_KEY,(err,token)=>{
            res.status(200).json( {loggedIn:true, token:token , data:userData}) -password
            if(err){
                
                res.status(400).json({err:"failed while generating tokens"})
            }
            })
    
        }
    } else{
        return res.status(404).json({err:"Invalid Credentials "})
    }
})




module.exports=Route

