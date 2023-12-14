import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Mobile() {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5780/").then(response => { setData(response.data) })
    })
    const Navigate = useNavigate()
    return (
        <div className='main-container'>
            <div className='container2'>
                {Data.filter((item) => item.category === "mobile").map(item => {
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
    )
}

export default Mobile
