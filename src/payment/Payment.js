import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./payment.css"
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';



const Payment = () => {


    // const navigate = useNavigate()
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

            <img src="https://blog.travelgate.com/hubfs/Imported_Blog_Media/online-payment-3.png" alt="#" />

            <br></br>
            <button onClick={checkout} className='paybtn'>Checkout</button>

        </div>

    )
}

export default Payment