import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const fetchUser = async () => {
            const res = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const data = await res.json()
            
            navigate(`/home/${data._id}`)
            
        }
        fetchUser()
        
    }


  return (
    <div>
        <div class="max-w-lg max-w-lg bg-blue-200 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
            <h1 class="text-gray-600 text-center font-extrabold -mt-3 text-3xl">Rainier Appointment System</h1>
            <div class="container py-5 max-w-md mx-auto">
                <form method="" action="" onSubmit={submitHandler}>
                    <div class="mb-4">
                        <input placeholder="Email"
                            class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    </div>
                    <div class="mb-6">

                        <input placeholder="Password"
                            class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>

                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-gray-500 " href="/register">
                            Register
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login