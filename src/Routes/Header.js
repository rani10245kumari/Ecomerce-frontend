import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { filterdata } from '../STORE/Slicve'



function Header() {
    const dispatch = useDispatch()
    const [Data, setData] = useState([])
    const [querry, setquerry] = useState()

    const handelsearch = (e) => {
        setquerry(e.target.value)
        axios.get(`http://localhost:5780/search?q=${querry}`).then(response => { setData(response.data) })
    }

    useEffect(() => {
        dispatch(filterdata(Data))
    }, [])


    return (
        <div className='header'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hqScikJMr1Pdt46RnZ06F-YD3E30kwq54Q&usqp=CAU' alt='#' className='logo'></img>
            <input placeholder='Search Products' className='search-item' onChange={handelsearch} />

            <div className='search-main'>
                {
                    Data?.map(item => {
                        return (
                            <div className='search-detail' key={item.id}>

                                <div className='search-detail2'>
                                    <img src={item.images[0]} alt='productimg' className={`search-img`}></img>

                                    <span><i class="fa-solid fa-indian-rupee-sign"></i>{item.Dprice}</span>
                                    <span>{item.rating}<i class="fa-sharp fa-solid fa-star"></i></span>
                                    <button>Details</button>

                                </div>
                                <hr></hr>


                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default Header