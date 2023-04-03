import React, { useState } from 'react'
import { useEffect } from 'react';

function Images({ img ,loading }) {
     
   const[mainImage,setMainImage]=useState()
    useEffect(()=>{
    if(!loading){
        setMainImage(img[0].url)
    }
    },[])

    return (
        <>
        
                
                    <>
                        {
                            loading ? <h1>loading</h1> : (
                                <>
                                <div className="container">
                            <div className='image-container'>
                                <div className="Images">

                                    {
                                        img.map((image) => (
                                            <>

                                                <div className="image-list">
                                                    <img
                                                        src={image.url} alt="" 
                                                        
                                                        onClick={() => setMainImage(image)} 
                                                        />


                                                </div>

                                            </>
                                        ))
                                    }
                                </div>

                                <div className="big-image">
                                    <div className="imagesBig">
                                        <img
                                            // style={{height:"25rem" ,display:"flex",}}
                                            src={mainImage}

                                        />
                                    </div>

                                </div>

                            </div>
                        </div>
                                </>
                            )

                        }
                    </>


        </>
    )
}

export default Images