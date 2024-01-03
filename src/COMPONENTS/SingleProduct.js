import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../STORE/cartslice'





function SingleProduct() {
    const Navigate = useNavigate()
    const param = useParams()
    const [product, setData] = useState([])
    const [imgl, setImgl] = useState("")
    const authentication = useSelector((state) => state.cart.authentication)

    useEffect(() => {
        axios.get("https://ecommerce-backend-tnlo.onrender.com/").then(response => {
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
                <div className='big-img'>
                    <img src={imgl} alt='#'></img>
                </div>

                {product && product?.images?.map((lm) => {
                    //console.log(lm)
                    return (
                        <div className='smallimges'>
                            <div className='small-img'>
                                <img src={lm} alt='#' onClick={handelimages}></img>
                            </div>
                        </div>
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



                <button onClick={() => {
                    if (authentication) {
                        dispatch(addtocart(product))
                    }
                    else {
                        alert("please login first..");
                        Navigate("/login");
                    }
                }} className='Addcart'>ADDTOCART</button>
                <h5>{product && product.description}</h5>
            </div>
        </div>
    )
}

export default SingleProduct
