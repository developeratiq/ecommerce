import React from 'react'
import { useState, useEffect } from 'react'

function NewTest() {

  const [input, setinput] = useState([
    {

      Name: "",
      FatherName: "",
      age: "",
      terms:""
    }

  ]);

  const [newEntry, setnewEntry] = useState([]);
  function Submit() {

    if (!input) {
      alert("cannot be blanked")
    }
    else {
      setnewEntry([...newEntry, input]);

    }
 }
 


  const deleteItems = (id)=>{
  //  alert (id);
    const updateditems = newEntry.filter((Felem, Findex)=>{
      //  alert(Findex);
      return  Findex!==id;   
  });
    setnewEntry(updateditems);
      // alert(id)
    }
   // deleting all
   const DeleteAll= ()=>{
setnewEntry([]);

   }



  return (
    <>
      <h1>trying object in hooks</h1>

      Name :<input type="text"
        value={input.Name}
        onChange={(e) => setinput({ ...input, Name: e.target.value })}

      />  <br></br>
      Age :<input type="text"
        value={input.age}
        onChange={(e) => setinput({ ...input, age: e.target.value })}
      />  <br></br>
      FatherName :<input type="text"
        value={input.FatherName}
        onChange={(e) => setinput({ ...input, FatherName: e.target.value })}

      />

      <br />
      <input type="checkbox" 
         value={input.terms}
         onChange = {(e)=> setinput({...input,terms:e.target.checked})}/> Terms & Conditions <br />


        
      <button type='submit' onClick={Submit}>Submit</button>

      <button onClick={DeleteAll}> Delete All</button>

      {
        newEntry.map((curElem, index) => {
          return <p key={index}>Name :{curElem.Name} , &Father Name:{curElem.FatherName} && age:{curElem.age}& ?? 
          {curElem.terms}  <button onClick={()=>deleteItems(index)}>*</button></p>
        })

      }

    </>


  )
}

export default NewTest