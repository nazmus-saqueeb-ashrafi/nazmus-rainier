import React from 'react'

const Register = () => {
  return (
    <div>
        <div class="max-w-lg max-w-lg bg-blue-200 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
            <h1 class="text-gray-600 text-center font-extrabold -mt-3 text-3xl">Register</h1>
            <div class="container py-5 max-w-md mx-auto">
                <form method="" action="">
                    <div class="mb-4">
                        <input placeholder="Name"
                            class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text"/>
                    </div>
                    <div class="">

                        <input placeholder="Email"
                            class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email"/>

                    </div>
                    <div class="mb-6">

                        <input placeholder="Password"
                            class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password"/>

                    </div>
                    <div class="flex items-center justify-between">
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button">
                            Register
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-gray-500 " href="/">
                            Back to login
                        </a>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register