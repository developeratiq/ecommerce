require('./db/config')
const Razorpay = require('razorpay')
const express = require('express')
const app = express();
const cors = require('cors')
const crypto = require('crypto')

const User = require('./schema/signUp')
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.post('/signup', async (req, res) => {
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
            const userData = await user.save()
            if (userData) {
                res.status(201).json({ result: "user registered succesfully",data:req.body })
            } else {
                res.status(422).json({ result: "user not registered" })
            }
        

    } catch (err) {
        res.send('err')
    }

    // let ser  = User.findOne({email:email}).then((user)=>{
    //       if(user){
    //         return res.status(422).json({result:"user already exists", data:req.body})
    //       } else{
    //         const user = new User({name,email,phone,password})
    //         user.save().then((suc)=>{
    //            res.status(200).json({result:"user registered succesfully"})
    //         }).catch((err)=> {
    //            res.status(500).json({result:"failed to registered"})
    //         })
    //       }
    // }).catch((err)=>console.log('failed'))




})

app.post('/login', async (req, res) => {
    let user = await User.findOne(req.body).select('-password')
    if (user) {
        res.send(user)

    } else {
        res.send({ result: "Invalid credentials" })
    }
})

app.post('/user/:id', async (req, res) => {
    let user = await User.findOne(req.params)
    console.log(user)
    res.send(user)
})





var instance = new Razorpay({
    key_id: 'rzp_test_b57CHszkJAIpNL',
    key_secret: 'KtmJst8449ftxYOYibrGF0tF',
  });

  app.post("/check",async(req,res)=>{

    // var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

    const options = {
      amount: req.body.amount,  // amount in the smallest currency unit
      currency: "INR",
    //   receipt: "order_rcptid_11"
    };
     const order = await instance.orders.create(options);
     console.log(order)
     res.status(200).json({
        success:true,
        order
     })

  })

//   paymnet  variefy 
  app.post("/paymentverify",(req,res)=>{
    console.log(req.body)
    const{razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body

    let body=razorpay_order_id + "|" + razorpay_payment_id;

    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', 'KtmJst8449ftxYOYibrGF0tF')
                                    .update(body.toString())
                                    .digest('hex');
                                    console.log("sig received " ,razorpay_signature);
                                    console.log("sig generated " ,expectedSignature);
     res.status(200).json({
        success:true,    
     })

  })


app.listen(PORT, () => {
    console.log(`server running on Port NO ${PORT
        }`)
})

