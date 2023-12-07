import React from 'react'
import Slider from '../Slider/Slider';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Home() {
    const slides = [
        { image: 'https://www.hermosoft.com/images/hermosoft-web-designing-dubai-slider-2.jpg', caption: 'Product 1' },
        { image: 'https://images.vexels.com/content/194700/preview/buy-online-slider-template-4261dd.png', caption: 'Product 2' },
        { image: "https://pixosoft.com/images/sliders/pixosoft-slider-3.jpg", caption: 'Product3' },
        // Add more slides as needed
    ];
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5780/").then(response => { setData(response.data) })
    })
    return (
        <div>
            <Slider slides={slides}></Slider>


            <div className="container2">
                <h1>BESTSELLER</h1>
                {Data.filter((item) => item.rating === "4.2").map(item => {
                    return (
                        <div className='item-container'>
                            <img src={item.images[0]} alt='#' className='image' />
                            <h4>{item.title}</h4>
                            <p>Rating:{item.rating}</p>
                            <span>${item.Dprice}</span> <span className='Aprice'>${item.Aprice}</span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Home
