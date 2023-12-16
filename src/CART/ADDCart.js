import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveItem, IncreaseQuantity, DecreaseQuantity } from "../STORE/cartslice";
import './cart.css'

const Cart = () => {
    const dispatch = useDispatch();

    const selector = useSelector((state) => state.cart.cartitems)
    console.log(selector);


    const handleIncreaseQuantity = (id) => {
        const quantity = selector.cartitems
        dispatch(IncreaseQuantity({ id }));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(DecreaseQuantity({ id }));
    };

    const handleRemoveItem = (id) => {
        dispatch(RemoveItem(id));
    };



    return (
        <div>
            <h2 className="headcart">Cart</h2>

            <div className="cart-content">
                <div className="headOfcart">
                    <h4>Product</h4>
                    <h4>Title</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Total</h4>

                </div>
                <hr></hr>

                <div>
                    {selector &&
                        selector.map((item, index) => {
                            return (
                                <div className="content-cart" key={index}>
                                    <img src={item.images[0]} alt="Loading..." />
                                    <div className="cart-subcontent">
                                        <h2>{item.title}</h2>
                                        <p>{item.Dprice}</p>
                                        <button
                                            className="remove-cart"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            Remove Cart
                                        </button>
                                    </div>
                                    <h2 className="cartprice">
                                        {"₹ " + item.Dprice * item.quantity}
                                        <span>=</span>
                                    </h2>
                                    <div>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => handleDecreaseQuantity(item.id)}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => handleIncreaseQuantity(item.id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>

                {/* <div className="total">
                    <h2>Total=</h2>
                    <h1 style={{ color: "black" }}>{total}</h1>
                </div> */}


            </div>
        </div>
    );
};

export default Cart;