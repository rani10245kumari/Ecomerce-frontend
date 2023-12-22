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
        const arr = data.map((elem) => ({
            id: elem.id,
            price: elem.Dprice,
            quantity: elem.quantity,
            name: elem.title,
        }));
        setItems(arr);
    }, [data]);



    const checkout = async () => {
        try {
            const stripe = await loadStripe('pk_test_51OQ2osSB58jqM1ZIXr95aSD7Tb8oxwPJuVK1jZjBoQKKi7wSLOEU0woNQtnu29U0ccm1hTodSCbnsFN1nMPTDE2i001xCvpZgG');
            const resl = await axios.post('http://localhost:5780/order', items);
            const result = await stripe.redirectToCheckout({
                sessionId: resl.data.id,
            });
            if (result.error) {
                console.error(result.error);
                // Handle the error, e.g., show an error message to the user.
            }
        } catch (error) {
            console.error(error);
            // Handle other errors, e.g., network issues.
        }
    };


    return (
        <div className="paymentcheckout">

            <img src="https://blog.travelgate.com/hubfs/Imported_Blog_Media/online-payment-3.png" alt="#" />

            <br></br>
            <button onClick={checkout} className='paybtn'>Checkout</button>

        </div>

    )
}

export default Payment