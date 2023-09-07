require('./db/config')
const Razorpay = require('razorpay')
const express = require('express')
const app = express();
const cors = require('cors')
const crypto = require('crypto')
const path =require('path')


const Route = require('./routes/Route')

 require("dotenv").config();


const connectDB = require('./db/config');
connectDB()
app.use(express.json());
app.use(Route)
// app.use(cors());
const successPage =path.join(__dirname,"succs.html")
console.log(successPage)

const port = process.env.PORT || 8000;

app.get('cart',(req,res,next)=>{
    res.send('hello from about')

})








app.post('/user/:id', async (req, res) => {
    let user = await User.findOne(req.params)
    console.log(user)
    res.send(user)
})




// console.log(__dirname)

// ================RAZORpAY=============================

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




// ------------------deplyment----------------------

const __dirname1 = path.resolve()
 app.use(express.static(path.join(__dirname1,"/Client/build")));
// console.log(f2)
app.use(express.static(f2))
if(process.env.NODE_ENV ==="production"){

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"Client","build","index.html"))
    })
}else{
    app.get('/',(req,res)=>{
     res.send('api running successfully')
    })
}




app.listen(port, () => {
    console.log(`server running on Port NO ${port
        }`)
})

