import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './sign.css'


// function SIGNUP() {
//     const history = useNavigate();
//     const [email, setEmail] = useState('')
//     const [Password, setPassword] = useState('')

//     async function submit(e) {
//         e.preventDefault();
//         const data = {
//             email: email,
//             Password: Password
//         }
//         try {
//             axios.post("http://localhost:5780/signup", data)
//                 .then(res => {
//                     console.log(res)
//                     if (res.data === "already exist") {
//                         alert("user already exist")

//                     }
//                     else if (res.data === "user registerd") {
//                         history("/", { state: { id: email } })
//                         alert("user registerd")
//                     }
//                 })
//                 .catch(e => {
//                     alert("wrong details")
//                     console.log(e)
//                 })
//         }

//         catch {
//             console.log(e)
//         }
//     }

//     return (
//         <div className='login'>
//             <h1>Signup</h1>

//             <form action='POST'>
//                 <input type='text' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='' id=''></input>

//                 <input type='text' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='' id=''></input>

//                 <input type='submit' onClick={submit}></input>
//             </form>
//             <br />
//             <p>OR</p>
//             <Link to='/login'>Login Page</Link>
//         </div>
//     )
// }

import { createRef } from 'react'


function SIGNUP() {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
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
        else if (mail.length <= 0) {
            mailRef.current.focus()
            setErr({ type: true, value: "Please enter mail id" })
        }
        else if (pass.length <= 0) {
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
                "mail": mail,
                "pass": pass,
                "ph": ph
            }
            axios.post("http://localhost:5780/signup", tempObj)
                .then((response) => {
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
