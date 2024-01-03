import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { authenticationUser } from "../STORE/cartslice"
import { useDispatch } from 'react-redux'
import { createRef } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [err, setErr] = useState({ type: false, value: "" })

    const mailRef = createRef()
    const passRef = createRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (mail.length <= 0) {
            mailRef.current.focus()
            setErr({ type: true, value: "Please enter mail id" })
        }
        else if (pass.length <= 0) {
            passRef.current.focus()
            setErr({ type: true, value: "Please enter password" })
        }
        else {
            const tempObj = {
                "email": mail,
                "password": pass
            }
            axios.post("https://ecommerce-backend-tnlo.onrender.com/login", tempObj)
                .then((response) => {
                    setErr({ type: true, value: `${response.data.msg}` })
                    if (response.data.token) {
                        localStorage.setItem("Token", response.data.token)
                        dispatch(authenticationUser(true));
                        Navigate("/")
                    }
                    clearInput()
                })
        }
    }
    const handleChange = (e) => {
        if (e.target.name === "mail")
            setMail(e.target.value)
        else if (e.target.name === "pass")
            setPass(e.target.value)
        else
            alert("Wrong input")
    }
    const clearInput = () => {
        mailRef.current.value = ""
        passRef.current.value = ""
    }
    return (
        <>
            <form className='form'>
                <h2 className='header'>Sign-in to your Account</h2>    <br /><br />
                <div className='form-item'>
                    <input type="text" name='mail' ref={mailRef} onChange={handleChange} required />   <br />
                    <label>E-mail</label>       <br /><br />
                </div>

                <div className='form-item'>
                    <input type="password" name='pass' ref={passRef} onChange={handleChange} required />    <br />
                    <label>Password</label>    <br /><br />
                </div>
                {err.type ? <p className='errMsg'>{err.value}</p> : null} <br />
                {/* <label>Forgot your password?</label>   <br /> */}
                <button className='loginBtn' onClick={handleSubmit}>LOGIN</button>

                <h4> Not a member?<Link to='/signup'>Signup Page</Link></h4>
            </form>

        </>
    )
}

