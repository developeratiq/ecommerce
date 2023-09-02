import React, { useState } from 'react'


function Home() {
  const[num,setNum]=useState(0)
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>setNum((pre)=>pre+1)}>Increase</button>
      <button onClick={()=>setNum((pre)=>pre-1)}>Increase</button>
      <button onClick={()=>setNum(0)}>reset</button>
    </div>
  )
}

export default Home