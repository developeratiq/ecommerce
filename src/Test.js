import React from 'react'
import { useState } from 'react';

function Test() {

    const [InputData, setInputData] = useState("");
    const [NewInput, setNewInput] = useState([]);
    // const [age, setage] = useState([]);
   
      const AddItems = ()=>{
        if (!InputData) {
           alert ("please enter something");
        }else{

            setNewInput([...NewInput,InputData]);
            setInputData('');
            
        }
            
        //  etage(...age,[]); s

        console.log("submit ho gya")
      }
      
       // deleting here

      const DelItems = ()=>{

      }

  return (<>
   <form action="">
   Name: <input type="text" onChange={(e)=>{
   setInputData(e.target.value)
   }}
    value ={InputData}
   />    <br />
   Age: <input type="number"
    onChange={(e)=>        
        {
        // setage(e.target.value)
    }}

    // value = {age}
   />  <br />

   <input type="button" value="Submit" onClick={AddItems}/>
   </form>

   <div className="showData">
    {NewInput.map(( data , index)=>{
        return   (
            <div className="eachElem" key={index}>
            <h1>{data} <button onClick={DelItems}  onClick ={() => DelItems()}>*</button></h1>
        </div>)
    })}

   
   </div>
  </>)
}

export default Test