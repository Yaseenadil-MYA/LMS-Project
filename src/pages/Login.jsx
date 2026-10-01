import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <div>
                <label>Email</label>
                <input type="email" />

            </div>
            <div>
                <label>password</label>
                <input type="password" />
            </div>

            <button type="submit">Login</button>
        </form>

    </div>
  )
}

export default Login