import React from 'react'
import { useState, useEffect } from 'react'

  // Reading Data from LocalStorage
  const ReadData= ()=>{
    let Lists = localStorage.getItem('lists');
   
   

   if(Lists){
  return JSON.parse(localStorage.getItem('lists'));
   }else{
    return [];
   }
  }



function Todo() {
  const [input, setinput] = useState('');
  const [newInput, setnewInput] = useState(ReadData());
  const [toggle, setToggle] = useState(true);
  const [isEdit, setisEdit] = useState(null);


   


  const AddItems = () => {

    if (!input) {
      alert("please fill the data ")

    } else if(input &&!toggle){
   setnewInput(
    newInput.map((elem)=>{
      if(elem.id===isEdit){
        return{...elem,name:input}
      }
      return elem;
    })
    

   );
   setToggle(true);
    setinput('');

    setisEdit(null);
    }
     
    
    else {

      const AllInputs = { id: new Date().getTime().toString(), name: input }
      setnewInput([...newInput, AllInputs]);
      setinput('')
    }

  }

  // editting items
    const update = (editId)=>{
    let editItem= newInput.find((elem)=>{
      return elem.id ===editId
    });
   
    setToggle(false);
    setinput(editItem.name);

    setisEdit(editId);
  
    }


  //deleting here
  const deleteItem = (itemId) => {
    // alert (itemId);
    let updatedArray = newInput.filter((FItems) => {
      // alert (Findex);
      return itemId !== FItems.id;

    });
    setnewInput(updatedArray);



  }

  const DeleteAll = () => {

    setnewInput([]);
  }


   // Add data to localStorage
   useEffect(() => {
   localStorage.setItem('lists',JSON.stringify(newInput)) 
   
     
   }, [newInput])
   

   



  return (<>
    <h1>TODO lists</h1>


   
    <div className="form">
      <input type="text" name='work' placeholder=' Enter todo`s'
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      {
         toggle ? <button onClick={AddItems}>➕</button>: <button onClick={AddItems}>📝</button>
      }
     

    </div>


    {
      newInput.map((items) => {

        return (
          <>
            <div key={items.id}>
              <h3>
                {items.name}
                <button onClick={() => update(items.id)}>📝</button>
                <button onClick={() => deleteItem(items.id)}>❌</button>
              </h3>
            </div>
          </>
        );
      })

    }

    <button onClick={DeleteAll}>DeleteAll</button>


  </>
  )
}

export default Todo