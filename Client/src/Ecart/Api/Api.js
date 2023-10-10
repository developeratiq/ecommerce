let myEmail =localStorage.getItem('email')
let myToken = localStorage.getItem('token')



export const addCart =async(productId,name,category,price,image,quantity)=>{
    try{

        const data =  await fetch('/addCart',{
            "method":"POST",
            headers:{
                "Content-Type":"application/json",
                "authorization":`bearer ${myToken}`
            },
            body:JSON.stringify({email:myEmail,productId,name,category,price,image,quantity})
        })
        const result  =data.json()
        return result
    }catch(err){
        return err
    }
}



export const fetchCart = async()=>{
    try{

        const data =  await fetch('/getcart',{
            "method":"POST",
            headers:{
                "Content-Type":"application/json",
                "authorization":`bearer ${myToken}`
            },
            body:JSON.stringify({email:myEmail})
        })
        const result  =data.json()
        return result
    }catch(err){
        return err
    }

}