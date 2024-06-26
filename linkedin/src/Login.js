import React from 'react'
import './Login.css'

function Login() {

    const loginToApp = () => {};
    const register = () => {};
  return (
    <div className='login'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt='linkedinLogo'/>

        <form>
            <input placeholder='Full name (required if registering)' type='text'/>
            <input placeholder='Profile Pic URL' type='text'/>
            <input placeholder='Email' type='email'/>
            <input placeholder='Password' type='password'/>
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member? <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login