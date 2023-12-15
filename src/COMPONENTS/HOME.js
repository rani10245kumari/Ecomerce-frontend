import React from 'react'
import Slider from '../Slider/Slider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../FOOTER/Footer'


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

    const Navigate = useNavigate()
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
                            <div className='item-container' onClick={() => Navigate(`/product/${item.id}`)}>
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
                <div className='Csupport'>
                    <p className='support'><i class="fa-solid fa-truck-fast"></i></p>
                    <h2>FREE SHIPPING</h2>
                    <p>We believe in transparency and making your shopping experience as enjoyable as possible. That's why we offer free shipping on all orders, so you can focus on finding the perfect items without worrying about additional charges.</p>
                </div>
                <div className='Csupport'>
                    <p className='support'><i class="fa-solid fa-headset"></i></p>
                    <h2>SUPPORT 24/7</h2>
                    <p>Have a question at midnight or a concern in the early hours? No problem! Our dedicated support team is ready to assist you 24 hours a day, 7 days a week. Wherever you are, whenever you need us, we're just a message or call away.</p>
                </div>
                <div className='Csupport'>
                    <p className='support'><i class="fa-solid fa-handshake"></i></p>
                    <h2>100% REFUND</h2>
                    <p>Enjoy the peace of mind that comes with our 100% Refund Guarantee. Whether there's an issue with the product, it doesn't meet your expectations, or you simply change your mind – we'll process your refund hassle-free.</p>
                </div>
                <div className='Csupport'>
                    <p className='support'><i class="fa-solid fa-user-lock serviceIcon"></i></p>
                    <h2>SECURE PAYMENT</h2>
                    <p>est easy knowing that your sensitive payment information is safeguarded by state-of-the-art encryption technology. Our Secure Payment Gateway employs the highest security standards to protect your data from unauthorized access.</p>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Home
