import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../COMPONENTS/HOME";
import Health from "../COMPONENTS/Health";
import '../App.css';
import Clothes from "../COMPONENTS/Clothes";
import Electronics from "../COMPONENTS/Electronics";
import Mobile from "../COMPONENTS/Mobile";
import SingleProduct from "../COMPONENTS/SingleProduct";
import Cart from "../CART/ADDCart";
import SIGNUP from "../AUTHENTICATION/Signup";
import Login from "../AUTHENTICATION/Login";
import Payment from '../payment/Payment'

function Navbar() {
    return (
        <div>

            <div className="Nav" >

                <p><Link to="/">Home</Link></p >

                <div className="mob">
                    <p className="iconn"><Link to="/Mobile"><i class="fa-solid fa-mobile"></i></Link></p>
                    <p><Link to="/Mobile">Mobile</Link></p ></div>

                <div className="mob">
                    <p className="iconn"><Link to="/Clothes"><i class="fa-solid fa-shirt"></i></Link></p>
                    <p> <Link to="/Clothes">Clothes</Link></p ></div>

                <div className="mob">
                    <p className="iconn"><Link to="/Electronics"><i class="fa-solid fa-headphones"></i></Link></p>
                    <p><Link to="/Electronics">Electronics</Link></p ></div>

                <div className="mob">
                    <p className="iconn"><Link to="/HealthCare"><i class="fa-solid fa-briefcase-medical"></i></Link></p>
                    <p><Link to="/HealthCare">HealthCare</Link></p >
                </div>

            </div>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Mobile" element={<Mobile></Mobile>}></Route>
                <Route path="/clothes" element={<Clothes></Clothes>}></Route>
                <Route path="/Electronics" element={<Electronics></Electronics>}></Route>
                <Route path="/HealthCare" element={<Health></Health>}></Route>
                <Route path="/product/:id" element={<SingleProduct />}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/signup" element={<SIGNUP></SIGNUP>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/payment" element={<Payment></Payment>}></Route>
            </Routes>


        </div >
    )
}

export default Navbar
