import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './sign.css'
import { createRef } from 'react'


function SIGNUP() {
    const [name, setName] = useState("")
    const [email, setMail] = useState("")
    const [password, setPass] = useState("")
    const [ph, setPh] = useState("")
    const [err, setErr] = useState({ type: false, value: "" })

    const nameRef = createRef()
    const mailRef = createRef()
    const passRef = createRef()
    const phRef = createRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.length <= 0) {
            nameRef.current.focus()
            setErr({ type: true, value: "Please enter name" })
        }
        else if (email.length <= 0) {
            mailRef.current.focus()
            setErr({ type: true, value: "Please enter mail id" })
        }
        else if (password.length <= 0) {
            passRef.current.focus()
            setErr({ type: true, value: "Please enter password" })
        }
        else if (ph.length <= 0) {
            phRef.current.focus()
            setErr({ type: true, value: "Please enter ph no." })
        }
        else {
            const tempObj = {
                "name": name,
                "email": email,
                "password": password,
                "ph": ph
            }
            axios.post("https://ecommerce-backend-tnlo.onrender.com/signup", tempObj)
                .then((response) => {
                    console.log(response)
                    setErr({ type: true, value: `${response.data.msg}` })
                    if (response.data.token)
                        localStorage.setItem("Token", response.data.token)
                    clearInput()
                })
        }
    }
    const handleChange = (e) => {
        if (e.target.name === "name")
            setName(e.target.value)
        else if (e.target.name === "mail")
            setMail(e.target.value)
        else if (e.target.name === "pass")
            setPass(e.target.value)
        else if (e.target.name === "ph")
            setPh(e.target.value)
        else
            alert("Wrong input")
    }
    const clearInput = () => {
        nameRef.current.value = ""
        nameRef.current.focus()
        mailRef.current.value = ""
        passRef.current.value = ""
        phRef.current.value = ""
    }

    return (
        <>
            <form className='signUp'>
                <h2 className='header'>Create your new Account</h2> <br />

                <div className='form-item'>
                    <input type="text" name='name' onChange={handleChange} ref={nameRef} required /> <br />
                    <label>Name</label> <br />
                </div>

                <div className='form-item'>
                    <input type="text" name='mail' onChange={handleChange} ref={mailRef} required />  <br />
                    <label>E-mail</label> <br />
                </div>

                <div className='form-item'>
                    <input type="password" name='pass' onChange={handleChange} ref={passRef} required />  <br />
                    <label>Password</label> <br />
                </div>

                <div className='form-item'>
                    <input type="number" name='ph' onChange={handleChange} ref={phRef} required />  <br />
                    <label>Phone No.</label>  <br />
                </div>
                {err.type ? <p className='errMsg'>{err.value}</p> : null}
                <button className='signUpBtn' onClick={handleSubmit} >SIGN UP</button>
            </form>
            <Link to='/login'>Login Page</Link>
        </>
    )
}


export default SIGNUP
