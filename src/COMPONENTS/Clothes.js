import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'


function Clothes() {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5780/").then(response => { setData(response.data) })
    })
    return (
        <div>

            {Data.filter((item) => item.category === "clothes").map(item => {
                return (<div>
                    <img src={item.images[0]} />

                </div>
                )
            })}
        </div>

    )
}

export default Clothes
