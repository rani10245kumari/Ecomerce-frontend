import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addtocart } from '../STORE/cartslice'




function SingleProduct() {
    const param = useParams()
    const [product, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5780/").then(response => { setData(response.data.filter((element) => element.id == param.id)[0]) })
    }, [param])
    //let product = Data.find((element) => element.id === param.id)

    console.log(product);
    const dispatch = useDispatch()
    // const Addtocart = () => {
    //     dispatch(addtocart(product))
    // }

    // const selector = useSelector((state) => state.cart)
    //console.log(selector)



    return (
        <div className='single-page'>
            <div className='single-page-img'>
                {product && product?.images?.map((lm) => {
                    return (
                        <>
                            <img src={lm}></img>
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
