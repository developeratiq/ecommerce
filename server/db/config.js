const mongoose = require('mongoose');
require('dotenv').config()
mongoose.set('strictQuery',true)
// console.log(`pata nahi kay hai ::: ${}`)
const connectDB =async ()=>{
try{
    const conn = await mongoose.connect(process.env.MONGO_URI);

   console.log(`Mpngo Db COnnected : ${conn.connection.host}`)
} catch(err){
    console.log(`error ${err.message}`)
    process.exit();
}
}
module.exports =connectDB