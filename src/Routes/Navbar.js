import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Product from "../COMPONENTS/Product";
import Logout from "../COMPONENTS/Logout";
import Profile from "../COMPONENTS/Profile";
import '../App.css'
import Clothes from "../COMPONENTS/Clothes";
import Electronics from "../COMPONENTS/Electronics";
import Mobile from "../COMPONENTS/Mobile";
function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <ul className="Nav">
                    <li><Link to="/">Home</Link></li >
                    <li><Link to="/Mobile">Mobile</Link></li >
                    <li><Link to="/Clothes">Clothes</Link></li >
                    <li><Link to="/Electronics">Electronics</Link></li >
                    <li><Link to="/HealthCare">HealthCare</Link></li >
                    <li><Link to="/Beauty">Beauty</Link></li >
                </ul>
                <Routes>
                    <Route path="/" element={<Product></Product>}></Route>
                    <Route path="/Mobile" element={<Mobile></Mobile>}></Route>
                    <Route path="/Clothes" element={<Clothes></Clothes>}></Route>
                    <Route path="/Electronics" element={<Electronics></Electronics>}></Route>
                    <Route path="/HealthCare" element={<Logout></Logout>}></Route>
                    <Route path="/Beauty" element={<Profile></Profile>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navbar
