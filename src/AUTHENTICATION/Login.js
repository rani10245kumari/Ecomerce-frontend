import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { authenticationUser } from "../STORE/cartslice"
import { useDispatch } from 'react-redux'

// function Login() {
//     const history = useNavigate();
//     const [email, setEmail] = useState('')
//     const [Password, setPassword] = useState('')
//     const dispatch = useDispatch();


//     async function submit(e) {
//         e.preventDefault();

//         try {
//             await axios.post("http://localhost:5780/login", {
//                 email, Password
//             })
//                 .then(res => {

//                     if (res.detail === "already exist") {
//                         history("/", { state: { id: email } })
//                         dispatch(authenticationUser(true));
//                     }
//                     else if (res.detail === "notexist") {
//                         alert("user have not signup")
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
//             <h1>login</h1>

//             <form action='POST'>
//                 <input type='text' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='' id=''></input>

//                 <input type='text' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='' id=''></input>

//                 <input type='submit' onClick={submit}></input>
//             </form>
//             <br />
//             <p>OR</p>
//             <br></br>
//             <Link to='/signup'>Signup Page</Link>
//         </div>
//     )
// }

// export default Login




import { createRef } from 'react'



export default function Login() {
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
                "mail": mail,
                "pass": pass
            }
            axios.post("http://localhost:5780/login", tempObj)
                .then((response) => {
                    setErr({ type: true, value: `${response.data.msg}` })
                    if (response.data.token)
                        localStorage.setItem("Token", response.data.token)
                    dispatch(authenticationUser(true));
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
            <form className='login'>
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
            </form>
            <Link to='/signup'>Signup Page</Link>
        </>
    )
}

