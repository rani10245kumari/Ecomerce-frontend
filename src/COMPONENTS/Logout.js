import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Logout() {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5780/").then(response => { setData(response.data) })
    })
    return (
        <div>
            {Data.filter((item) => item.category === "health").map(item => {
                return <img src={item.images[0]} alt='#' />
            })}
        </div>
    )
}

export default Logout
