const express = require('express')
const Route = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


const User = require('../schema/signUp');
const Products = require('../schema/ProductSchema')

// Route.get('/',(req,res)=>{
//     console.log(req.body)
//     res.send('hello from route page')
// })  


// ----------------middleware for auth------------------------

function variefy(req, res, next) {

    let token = req.headers['authorization']
    if (token) {
        token = token.split(" ")[1]
        // console.log(token[1])
        jwt.verify(token, process.env.SECRET_KEY, (err, success) => {
            if (err) {

                res.status(500).json({ err: "invalid token" })
            } else {
                next()
            }
        })
    } else {
        res.status(500).json({ err: "please add headers" })
    }
    // next()
}

// ----------------middleware for auth ends ------------------------

// ---------Signup Routes---------------------------------

Route.post('/signup', async (req, res) => {
    const { name, email, phone, password } = req.body

    if (!name || !email || !phone || !password) {
        return res.status(422).json({ result: "please fill all properly" });
    }
    if(phone.length !== 10){
        
        return res.status(422).json({ result: "Phone Number is not Valid" });
  } if(password.length < 6){
        
        return res.status(422).json({ result: "password must be atleast 6 digit" });
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
            res.status(201).json({ result: "user registered succesfully", data: req.body })
        } else {
            res.status(422).json({ result: "!Something went wrong" })
        }


    } catch (err) {
        res.send('err')
    }


})

// --------------------------LogIn Routes-------------------------------




Route.post('/login', async (req, res) => {

    const { email, password } = req.body
    console.log(email, password)

    let userData = await User.findOne({ email: email })

    if (userData) {

        const isTrue = await bcrypt.compare(password, userData.password)
        if (!isTrue) {
            return res.status(404).json({ err: "Invalid credentials" })
        } else {
            jwt.sign({ email }, process.env.SECRET_KEY, (err, token) => {
                res.status(200).json({ loggedIn: true, token: token, data: userData }) - password
                if (err) {

                    res.status(400).json({ err: "failed while generating tokens" })
                }
            })

        }
    } else {
        return res.status(404).json({ err: "Invalid Credentials " })
    }
})


Route.post('/addCart', variefy, async (req, res) => {
      console.log(req.body)
    try {
        const { email, productId, name, category, price, _image, quantity } = req.body

        const userdata = await User.findOne({ email: email })
        //   console.log(userdata)
        if (userdata) {
            const cartItems = await userdata.addCart(productId, name, category, price, _image, quantity)

            //   const check = await User.findOne({"myCart.productId":productId})
            //   console.log(`  chicking ${check}`)
            //   if(!check){
            //     console.log('not found')
            //   }else{
            //     console.log(` ${check}`)
            //   }

            await userdata.save()

            res.status(200).json({ res: "added successfully" })
        }

    } catch (error) {
        console.log(error)
    }

})

Route.post('/getcart', variefy, async (req, res) => {
    try {

        const { email } = req.body
        const finddata = await User.findOne({ email: email })
        if (finddata) {
            res.status(200).json({ result: finddata.myCart })
        }
        else{
            res.status(404).json({ err: 'unable yo find user' })

        }
    } catch (err) {
        res.status(402).json({ err: "error while fetching" })
    }
})



// ----------------delete cart------------------------
Route.post('/removecart', variefy, async (req, res) => {
    console.log(req.body)
    try {
        const { email, id} = req.body


        const deleted = await User.updateMany({
            email: email
        },
            {
                $pull: {
                    myCart: {
                        _id: id
                    }
                }
            })
        

      res.status(200).json({res:`${id} successfully removed from cart`})
      
    } catch (error) {
        console.log(error)
        res.status(404).json({error:` error while removed from cart`})
    }

})




// --------------address------------------

Route.post('/address', variefy, async (req, res) => {
    console.log(req.body)
    try {
        const {email,adres,city,name,phone,pincode,state} = req.body

        const userdata = await User.findOne({ email: email })
        // console.log(userdata)
        if (userdata) {
            const addAddress = await userdata.saveAddress(adres,city,name,phone,pincode,state)
            await userdata.save()
            res.status(200).json({ res: " address added successfully" })
        }else{
            res.status(404).json({ error: " user not found" })

        }

    } catch (error) {
        console.log(error)
    }

})

// --------------get adress---------------------------------------------------------------------

Route.post('/getaddress', variefy, async (req, res) => {
    try {

        const { email } = req.body
        const finddata = await User.findOne({ email: email })
        if (finddata) {
            res.status(200).json({ result: finddata.address })
        }
        else{
            res.status(404).json({ err: 'unable yo find user' })

        }
    } catch (err) {
        res.status(402).json({ err: "error while fetching" })
    }
})
Route.post('/increase', async (req, res) => {
    try {

        const { email ,id} = req.body
        console.log(req.body)
        const finddata = await User.findOne({ email: email })
        if (finddata) {
            // console.log(increase)
            res.status(200).json({ result: finddata })
            // const increase = await userdata.increase(id)
        }
        else{
            res.status(404).json({ err: 'unable yo find user' })

        }
    } catch (err) {
        res.status(402).json({ err: "error while fetching" })
    }
})


// --------------addDataTo Cart----------------------

Route.post('/addd',(req,res)=>{
    const{email,prodId}=req.body
    const updated = User.updateOne(
        { email: email },
        { $addToSet: {inCart:prodId } }
     )
     console.log(updated)
     if(updated){
        res.send('pdated ')
     }else{
        res.send('errror')
     }
})


// -------------------add products------------------------

Route.post('/addprod',async(req,res)=>{
    // url:{type:String},
    // name:String,
    // category:String,
    // seller:String,
    // price:String
  const{url,name,category,seller,price}=req.body
  console.log(req.body)
const data =new Products({url,name,category,seller,price})
const saveData =await data.save()
if(saveData){
  console.log(saveData)
    res.status(200).json({saveData})
}else{
    console.log('error hai')
    res.status(500).json({err:"error while saving"})
    
}

})

module.exports = Route

