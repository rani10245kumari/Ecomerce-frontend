import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../COMPONENTS/HOME";
import Logout from "../COMPONENTS/Logout";
import '../App.css';
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

                </ul>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Mobile" element={<Mobile></Mobile>}></Route>
                    <Route path="/Clothes" element={<Clothes></Clothes>}></Route>
                    <Route path="/Electronics" element={<Electronics></Electronics>}></Route>
                    <Route path="/HealthCare" element={<Logout></Logout>}></Route>


                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Navbar
