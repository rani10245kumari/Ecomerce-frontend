import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function SIGNUP() {
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        const data = {
            email: email,
            Password: Password
        }
        try {
            axios.post("http://localhost:5780/signup", data)
                .then(res => {
                    console.log(res)
                    if (res.data === "already exist") {
                        alert("user already exist")

                    }
                    else if (res.data === "user registerd") {
                        history("/", { state: { id: email } })
                        alert("user registerd")
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
            <h1>Signup</h1>

            <form action='POST'>
                <input type='text' onChange={(e) => { setEmail(e.target.value) }} placeholder='Email' name='' id=''></input>

                <input type='text' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' name='' id=''></input>

                <input type='submit' onClick={submit}></input>
            </form>
            <br />
            <p>OR</p>
            <Link to='/login'>Login Page</Link>
        </div>
    )
}

export default SIGNUP
