import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Desc from './Desc';
import Images from './Images';

function SIngleProduct() {
    const [singleData, setSingleData] = useState([])
    const[loading,setLaoding]=useState(true)
    const fetchSingle = () => {
        axios.get(`https://api.pujakaitem.com/api/products?id=${productId}`).
            then((data) => {
                setLaoding(false)
                setSingleData(data.data)
    })

    }
    useEffect(() => {
       
        // localStorage.setItem("name","atiq")
        fetchSingle();
    }, [])


    const params = useParams()
    const { productId } = params;
    // alert(productId)
    return (
        <>
            
                {
                    loading ? (<h1 style={{marginTop:"100px"}}>loading......</h1>) : (
                        <>

                            <div className='big-container'>
                                <div className="bothImage">
                                    <Images img={singleData.image} loading= {loading}></Images>
                                </div>
                                <div className="desc">

                                    <Desc desc={singleData} items={singleData}></Desc>

                                </div>
                            </div>
                            {/* {singleData.name} */}
                        </>
                    )
                }

            
        </>
    )
}

export default SIngleProduct