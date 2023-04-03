import React from 'react';
import '../css/select.css';

function SelectInput({setSelect}) {
  const handleSelect =(e)=>{
    setSelect(e.target.value)
  }
  return (
    <div className="select-container">
      <select className="select" onChange={(e)=>
        handleSelect(e)}>
        <option value="Sort By Price">Sort by Price</option>
        <option value="Sort By Name">Sort by Name</option>
        {/* <option value="Sort by Price">Sort by Price</option> */}
      </select>
      <i className="fas fa-chevron-down select-icon"></i>
    </div>
  );
}

export default SelectInput;
