import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const m='https://www.shutterstock.com/shutterstock/photos/743742478/display_1500/stock-vector-black-friday-sale-template-banner-discounts-on-modern-smart-phones-poster-design-vector-illustration-743742478.jpg'
function SlickCar() {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img src="https://blog.hubspot.com/hs-fs/hubfs/ecommerce_1.webp?width=595&height=400&name=ecommerce_1.webp" onDragStart={handleDragStart} role="presentation" />,
        <img src={m} onDragStart={handleDragStart} role="presentation" />,
        <img src="https://i.pinimg.com/736x/27/d3/65/27d3654052f21b9ef9a70893cfb5bdcf.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img src="https://cdnb.artstation.com/p/assets/images/images/041/038/055/large/shikhar-yadav-shoes-banner.jpg?1630579962" onDragStart={handleDragStart} role="presentation" />,
    ];
    return (
        <div>
            <AliceCarousel mouseTracking items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1300}
            infinite
            />
        </div>
    )
}

export default SlickCar