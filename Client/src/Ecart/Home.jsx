import React from 'react'
import {  AiOutlineDoubleRight} from "react-icons/ai";
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate  =useNavigate()
    const url = `https://www.pngall.com/wp-content/uploads/4/Arnold-Schwarzenegger-Bodybuilding-PNG-Images.png`
  return (
    <>
     <div className="container">
        <div className="midcontaier">
        <div className="image">
            <img src={url} alt="loading" />
        </div>
        <div className="content">
            <h1>Upgrade your Life</h1>
            <h3>with beautiful Journey</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Sed eum cupiditate ad nesciunt molestiae dolorum incidunt vitae voluptatibus,
                 atque deleniti delectus ipsum 
                odio consectetur commodi? Consequuntur magnam eaque nihil natus?</p>
                  <button className='btn btn-primary'
                  onClick={()=>navigate('/products')}
                  >Explore <AiOutlineDoubleRight/></button>
        
        </div>
        </div>
        <div className="second">
            <img src="../PortFolioImages/png.png" alt="" />
        </div>
        
     </div>
    </>
  )
}

export default Home