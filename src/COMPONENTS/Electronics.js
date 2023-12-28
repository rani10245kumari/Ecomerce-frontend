import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Electronics() {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("https://ecommerce-backend-tnlo.onrender.com/").then(response => { setData(response.data) })
    })
    const Navigate = useNavigate()
    return (
        <div className='main-container'>
            <div className='container2'>
                {Data.filter((item) => item.category === "electronics").map(item => {
                    return (

                        <div className='item-container' onClick={() => Navigate(`/product/${item.id}`)}>

                            <img src={item.images[0]} alt='#' className='image' />
                            <h4>{item.title.slice(0, 25)}..</h4>
                            <p>Rating:{item.rating}</p>
                            <span>${item.Dprice}</span> <span className='Aprice'>${item.Aprice}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Electronics
