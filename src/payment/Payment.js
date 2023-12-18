import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Payment = () => {


    const navigate = useNavigate()
    const data = useSelector((state) => state.cart.cartitems)
    const arr = []
    const [items, setItems] = useState([])
    data.map((elem) => {
        arr.push({
            id: elem.id,
            price: elem.Dprice,
            quantity: elem.quantity,
            name: elem.title,
        })

    })
    console.log(items)
    useEffect(() => {
        setItems(arr)

    }, [])


    const checkout = async () => {
        try {
            const stripe = await loadStripe('pk_test_51OOJrqSCctvp73iabvu7LUKQJeapSTIxJeAdhW15KCJiPR9j1B6elGADEc85moc6R2rDX3JpF2geTJRpp5UuazIY00q1CRIUcc');
            const res = await axios.post(`http://localhost:5780/order`, items)
            const result = stripe.redirectToCheckout({
                sessionId: res.data.id

            })


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="paymentcheckout">
            <div className='d-flex flex-align-center flex-justify-center h-60' style={{ background: "linear-gradient(180deg ,#f3f4ff, rgb(252, 240, 235))" }}>
                <img src="/images/stripe-banner.png" alt="" className='w-50 -h-100-per' />
                <div className="w-50 d-flex flex-align-center flex-justify-center">
                    <div onClick={checkout} className='bg-blue color-white fw-bold d-flex flex-align-center flex-justify-center brsx-radius-3 ps-5 cr-pointer fs-mm-2 w-200px'>Checkout</div>

                </div>





            </div>
        </div>
    )
}

export default Payment