import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

function Multi({url,data}) {
    console.log(data)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.6
        }
    };

    return (
        <div>
            <Carousel responsive={responsive} key={Math.random()}>
            {
                data.map((x)=>(
                    <>
                    <Link  to={`/products/${x.id}`}>
                    <div className="max-w-sm w-[250px] h-[230px] pb-3 mb-3 mt-2 border rounded overflow-hidden shadow-lg caros" key={x.id}>
                    <img className="w-[100%] p-[.2rem] h-[80%] " src={x.image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4 h-[50px]">
                        <div className="font-medium text-xl mb-2 align-middle">

                            <h5 style={{textAlign:"center"}}>{x.name}</h5>
                        </div>

                    </div>
                   
                </div>
                    </Link>
                    </>
                ))
            }
            </Carousel>;
        </div>
    )
}

export default Multi