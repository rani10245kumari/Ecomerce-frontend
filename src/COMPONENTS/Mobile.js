import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'

function Mobile() {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5780/").then(response => { setData(response.data) })
    })
    return (
        <div>

            {Data.filter((item) => item.category === "mobile").map(item => {
                return <img src={item.images[0]} alt='#' />
            })}
        </div>
    )
}

export default Mobile
