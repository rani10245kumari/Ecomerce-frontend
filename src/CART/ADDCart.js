import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../STORE/cartslice";
import './cart.css'
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const selector = useSelector((state) => state.cart.cartitems)
    console.log(selector);
    const { authentication } = useSelector((state) => state.cart)



    const handleIncreaseQuantity = (id) => {
        // const quantity = selector.cartitems
        dispatch(IncreaseQuantity({ id }));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(DecreaseQuantity({ id }));
    };

    const handleRemoveItem = (id) => {
        dispatch(RemoveItem(id));
    };



    return (
        <div className="cart-main-page">
            <h2 className="headcart">Cart</h2>

            <div className="cart-content">
                <div className="headOfcart">
                    <h4>Product</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Total</h4>

                </div>
                <hr></hr>

                <div className="container-detail">
                    {selector &&
                        selector.map((item, index) => {
                            return (
                                <div className="content-cart" key={index}>
                                    <img src={item?.images[0]} alt="Loading..." />

                                    {/* <h2>{item.title}</h2> */}
                                    <h2>₹ {item.Dprice}</h2>


                                    <div className="buttnhandel">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => handleDecreaseQuantity(item.id)}>
                                            -
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => handleIncreaseQuantity(item.id)}>+ </button>
                                    </div>




                                    <h2 className="cartprice">
                                        <span>=</span>
                                        {"₹ " + item.Dprice * item.quantity}

                                    </h2>
                                    <button
                                        className="remove-cart"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove Cart
                                    </button>

                                </div>


                            );

                        })}

                </div>




                <button onClick={() => {
                    if (authentication) {
                        navigate('/payment')
                    }
                    else {
                        alert('please login first')
                    }
                }} className="order-detail">placeOrder</button>




            </div>
        </div>
    );
};

export default Cart;