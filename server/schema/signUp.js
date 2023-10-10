const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const {Schema}=mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    }
    ,
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
inCart:[{
    type:Schema.Types.ObjectId , ref:"products"
}],
    myCart: [
        {
            productId: {
                type: String
            },
            name: {
                type: String
            },
            category: {
                type: String
            },
            price: {
                type: String
            },
            _image: {
                type: String
            }, quantity: {
                type: Number
            },
            totalprice:Number
        },
        
    ],


    address: [{
        adres: {
            type: String
        }, city: {
            type: String
        }, name: {
            type: String
        }, phone: {
            type: Number
        }, pincode: {
            type: Number
        },
        state:{
            type:String
        }
    }],
    token: {
        type: String
    }

});




//---------------------stroee the cart--------------------------------
    // if (cart.items.length === 0) {
    //     cart.items.push({ productId, name, category, price, _image, quantity: 1 })
    //     cart.totalprice = price
    // } else {
    //     let existing = cart.items.findIndex(items=>items.productId ===productId)
    //      if(existing == -1){
    //         cart.items.push({ productId, name, category, price, _image, quantity: 1 })
    //         cart.totalprice += price
    //      }else{
    //         existingproduct =cart.items[existing];
    //         existingproduct.quantity +=1
    //         cart.totalprice +=price
    //      }

    // }
//     // console.log(`user in schema`,this.userSchema)
// }

userSchema.methods.addCart = async function (productId, name, category, price, _image, quantity) {
    let cart =this.myCart
    try {
        if(cart.length==0){
            // console.log('cart is empty')
            this.myCart = this.myCart.concat({ productId, name, category, price, _image, quantity:1 });
            cart.totalprice =price
        }else{
            let existing = cart.findIndex(items=>items.productId ===productId)
            console.log(existing)
            if(existing== -1){
                this.myCart = this.myCart.concat({ productId, name, category, price, _image, quantity:1 });
                cart.totalprice +=price
            }else{
                existingproduct =cart[existing];
                console.log(existingproduct)
            existingproduct.quantity +=1
            cart.totalprice +=price
            }
        }
        // await this.save()
        return this.myCart
        
    } catch (error) {
        console.log(error)
    }
}
userSchema.methods.increase = async function (productId) {
    let cart =this.myCart
    console.log(cart)
    return false
    try {
        if(cart.length==0){
            // console.log('cart is empty')
            this.myCart = this.myCart.concat({ productId, name, category, price, _image, quantity:1 });
            cart.totalprice =price
        }else{
            let existing = cart.findIndex(items=>items.productId ===productId)
            console.log(existing)
            if(existing== -1){
                this.myCart = this.myCart.concat({ productId, name, category, price, _image, quantity:1 });
                cart.totalprice +=price
            }else{
                existingproduct =cart[existing];
                console.log(existingproduct)
            existingproduct.quantity +=1
            cart.totalprice +=price
            }
        }
        // await this.save()
        return this.myCart
        
    } catch (error) {
        console.log(error)
    }
}


//---------------------store address--------------------------------
userSchema.methods.saveAddress = async function (adres,city,name,phone,pincode,state) {
    try {
        this.address = this.address.concat({ adres,city,name,phone,pincode,state });
        await this.save()
        return this.address

    } catch (error) {
        console.log(error)
    }
}

userSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
        console.log(this.password)
    }
    next()

})


module.exports = mongoose.model('users', userSchema);