import React, { useEffect, useState } from 'react'
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import Avatar from 'react-avatar';
import SlickCar from './Components/subComp/SlickCar';
import getAllData from './Redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Multi from './Components/subComp/Multi';
import Navigation from './NAVIGATION/Navigation';



const contactIcons=<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M690-480h60v-68l59 34 30-52-59-34 59-34-30-52-59 34v-68h-60v68l-59-34-30 52 59 34-59 34 30 52 59-34v68ZM80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM182-200h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z"/></svg>
const shipping=<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z"/></svg>
const secure=<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q32 0 61.5 4.5T600-862v102q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q27 0 47.5 16t28.5 40q39-44 61.5-98.5T800-480q0-11-1-20t-3-20h82q2 11 2 20v20q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 124 80.5 213.5T440-162Zm280-438q-17 0-28.5-11.5T680-640v-120q0-17 11.5-28.5T720-800v-40q0-33 23.5-56.5T800-920q33 0 56.5 23.5T880-840v40q17 0 28.5 11.5T920-760v120q0 17-11.5 28.5T880-600H720Zm40-200h80v-40q0-17-11.5-28.5T800-880q-17 0-28.5 11.5T760-840v40Z"/></svg>
const moneyback=<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M574-618q-12-30-35.5-47T482-682q-18 0-35 5t-31 19l-58-58q14-14 38-25.5t44-14.5v-84h80v82q45 9 79 36.5t51 71.5l-76 32ZM792-56 608-240q-15 15-41 24.5T520-204v84h-80v-86q-56-14-93.5-51T292-350l80-32q12 42 40.5 72t75.5 30q18 0 33-4.5t29-13.5L56-792l56-56 736 736-56 56Z"/></svg>
function Home() {
  
  const dispatch = useDispatch()

  const [datas, setDatas] = useState([])
  const url = `https://api.pujakaitem.com/api/products`

  const fetchProducts = () => {
    axios.get(url).then((data) => setDatas(data.data))
      .catch((error) => console.log(error))
  }


  useEffect(() => {
    // localStorage.setItem('name','md atiq')

    fetchProducts();

  }, [])

  const navigate = useNavigate()
 
  return (
    <>
    <Navigation/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 home-image">
            <img src='../PortFolioImages/png2.png' alt="" />
          </div>
          <div className="col-lg-4 d-flex justify-center align-center mt-4">
            <div className="conte">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat impedit autem saepe illum laudantium nemo porro, at dignissimos
              incidunt minima cum quas neque. Officiis cupiditate pariatur quasi ducimus ratione fugiat.

              <div className="mt-4" onClick={() => navigate('/products')}>
                <button className='btn btn-primary'>ExploreWorld</button>
              </div>
            </div>

          </div>
        </div>


        {/* ---------------Carousel--------------------------- */}
        <div className="row">
          <SlickCar />
        </div>


        {/* ----second section ----------------  */}

        <div className="row mt-4">
          <div className="h-container">

            <div className="main-header">
              <h1 className='heading'> <span>OP Categogies to choose from </span></h1>
            </div>
          </div>
        </div>
        {/* ------------------section 3-----------------------------------------  */}


        
       <div className="section  h-[260px] mt-4 mb-3">
       <Multi  data={datas}/>
       </div>
           <hr />
         <div className="section section4 h-[32vh] w-[100%] pt-[2vh]   mb-[8vh]  bg-[#4C8ACC] ">
          <div className="section4-inn flex gap-4 h-[100%] w-[80%] ml-[14%] pt-[1rem]">
           <div className="part1 w-[25%] h-[90%] bg-[#99B9EE] rounded-md  shadow-xl ">
            <div className="h-icons">
           <h1> {shipping}</h1>
            <p>Super Fast and Free delivery </p>
            </div> 
           </div>
           <div className="part2 w-[25%] h-[90%]  ">

            <div className="part-2-1 h-[40%] bg-[#99B9EE] rounded-md  shadow-xl " >
            <div className="i1">
           <i>{contactIcons}</i>
           <span>No contact shipping</span>

            </div>
            </div>
            <div className="part-2-2 h-[40%]  mt-[10%] bg-[#99B9EE] rounded-md  shadow-xl">
            <div className="i2">
            <i>{moneyback} </i>
            <span>money back guarantee</span>
            </div>
            </div>
           

           </div>
           <div className="part3 w-[25%] h-[90%] bg-[#99B9EE] rounded-md  shadow-xl   ">

           <div className="h-icons">
           <h1> {secure}</h1>
            <p>Super secure payment system </p>
            </div> 
           </div>

          </div>
  
         </div>
        

      </div>
    </>
  )
}

export default Home