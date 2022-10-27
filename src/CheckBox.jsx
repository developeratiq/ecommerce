import React from 'react'
import { useState } from 'react'

function CheckBox() {

   const Data = [{id:1,name:"A"  ,check:""},{id:1, name:"B" ,check:""}, {id:1,name:"C" ,check:""}];

  const [ArraysData, setArraysData] = useState([Data]);
  const [checks, setchecks] = useState()
 


  // handling changes

  //submit
  const submit = ()=>{
// console.log("Submitted")

// if(Checks!==true){

// }else{
//   setstore([...store,Checks]);
// }
 

  }

  //checkall
  const checkall = ()=>{
console.log("checkedAll")

  }

//   uncheckAll

const uncheckAll = ()=>{
alert("all uncheckd")
}

const changeHandler = ()=>{
//  alert ("checked")

}


  return (
    <>

   
   
  

       {
        Data.map((elem,index)=>{
          return  (
           
              <h3> {elem.name}<input type="Checkbox" 
          value={ArraysData.check}
          onChange = {(e)=> setArraysData({...ArraysData,check:e.target.checked})}/></h3>
          
          ) })
       }
    <button onClick={checkall}>CheckAll</button>
    <button  onClick={submit}>Submit</button>
    <button  onClick={uncheckAll}>UnCheckAll</button>


    </>
  )
}

export default CheckBox