import React from 'react'
import Slider from '../Slider/Slider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Home() {
    const slides = [
        { image: 'https://www.hermosoft.com/images/hermosoft-web-designing-dubai-slider-2.jpg' },
        { image: 'https://images.vexels.com/content/194700/preview/buy-online-slider-template-4261dd.png' },
        { image: "https://pixosoft.com/images/sliders/pixosoft-slider-3.jpg" },
        // Add more slides as needed
    ];
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5780/").then(response => { setData(response.data) })
    })


    //const Product = useSelector((state) => state.data.data)
    //console.log(Product)
    return (
        <div>
            <Slider slides={slides}></Slider>


            <div className="container-home">
                <h1>BESTSELLER</h1>
                <div className='container2-home'>
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
            <div className='Shop-more'>
                <img src='https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=740&t=st=1702020032~exp=1702020632~hmac=1fe6cf1158a8cb06edc44343d4cec52e6d981103637fc5ffc06399284e6c5e25'></img>
                <h4>GET UPTO 50-70% OFF ON ALL PRODUCTS</h4>
                <button>Shop Now</button>
            </div>
            <div className='facilties'>
                <div className='Csupport'>hjgj</div>
                <div className='Csupport'>gfhfghf</div>
                <div className='Csupport'>sfdfd</div>
                <div className='Csupport'>wrwrewer</div>
            </div>
        </div>
    )
}

export default Home
