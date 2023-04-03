import React from 'react'
import { useState } from 'react';

function Try() {

    
  const BioData = [
    {
        Id:1,
        Name:"Md Atiqur Rahman",
        Age : 22
    }
    ,
    {
        Id:2,
        Name:"Md Shafiqur Rahman",
        Age : 20
    }
    ,
    {
          Id:3,
          Name:"Md Asgar Ali",
          Age : 33
    }
  ];
  const [Datas, setDatas] = useState(BioData);
 
   const deleteItem =(index)=>{
//   alert (index);
     let newArray = Datas.filter((Fid)=>{
        // alert (Fid.Id);
        return Fid.Id!==index;
     })

     setDatas(newArray);
   }

   //Deleting Items
   const  DeletAll = ()=>{
    setDatas([]
    );
   }


  return (
    <>
   {
  Datas.map((elem , indexNo)=>{
    return (
         <div>
        <h1>  {indexNo} {elem.Id} Name:{elem.Name} age:{elem.Age}</h1>
    <button onClick={() =>deleteItem(elem.Id)}>Delete This</button>
    </div> )
  })

   }
     <button onClick={DeletAll}>ClearAll</button>
    
    </>
  )
}

export default Try