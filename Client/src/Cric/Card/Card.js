import React from 'react'
import './card.css'


function Card({author ,description,img,url }) {
    return (
        <>
            <section className='mainsection'>
            <div className="card" style={{width:"18rem"}}>
                <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{author}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url}className="btn btn-primary">Read Article</a>
                    </div>
            </div>

            </section>
        </>
    )
}

export default Card