const mongoose =require('mongoose')
const{Schema}=mongoose
const productSchema = new Schema({
    url:{type:String},
    name:String,
    category:String,
    seller:String,
    price:String
})

module.exports= mongoose.model('products',productSchema)