import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5780/login", {
                email, Password
            })
                .then(res => {
                    if (res.detail = "already exist") {
                        history("/Header", { state: { id: email } })
                    }
                    else if (res.detail = "notexist") {
                        alert("user have not signup")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e)
                })

        }
        catch {
            console.log(e)
        }
    }

    return (
        <div className='login'>
            <h1>login</h1>

            <form action='POST'>
                <input type='text' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='' id=''></input>

                <input type='text' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='' id=''></input>

                <input type='submit' onClick={submit}></input>
            </form>
            <br />
            <p>OR</p>
            <Link to='/signup'>Signup Page</Link>
        </div>
    )
}

export default Login
