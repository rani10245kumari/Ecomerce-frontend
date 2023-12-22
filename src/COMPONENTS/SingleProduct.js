import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addtocart } from '../STORE/cartslice'





function SingleProduct() {
    const param = useParams()
    const [product, setData] = useState([])
    const [imgl, setImgl] = useState("")
    useEffect(() => {
        axios.get("http://localhost:5780/").then(response => {
            setData(response.data.filter((element) => element.id === parseInt(param.id))[0])
            setImgl(response.data.filter((element) => element.id === parseInt(param.id))[0].images[0])
        })

    }, [param])

    const handelimages = (e) => {
        setImgl(e.target.src)
    }




    console.log(product);
    const dispatch = useDispatch()




    return (
        <div className='single-page'>
            <div className='single-page-img'>
                <div>
                    <img src={imgl} alt='#'></img>
                </div>

                {product && product?.images?.map((lm) => {
                    //console.log(lm)
                    return (
                        <>
                            <img src={lm} alt='#' onClick={handelimages}></img>

                        </>
                    )
                })}
            </div>
            <div className='single-page2'>
                <h4>{product && product.title}</h4>
                <p>{product && product.rating}<i class="fa-solid fa-star"></i></p>
                <p className='price-detail'> <span>₹{product && product.Dprice}</span>
                    <span className='aprice'>₹{product && product.Aprice}</span>
                    <span>{product && product.discountPercentage}% OFF</span>
                </p>


                <button onClick={() => dispatch(addtocart(product))} className='Addcart'>ADDTOCART</button>
            </div>
        </div>
    )
}

export default SingleProduct
