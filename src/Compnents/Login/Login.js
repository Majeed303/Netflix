import React from 'react'
import "./Login.css"

import { useNavigate } from 'react-router-dom'
function Login() {
    const Navigate = useNavigate()

  return (
    <div className='login-pag'>
       
        <div>
        <img className='log' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        </div>
        <div className='login-conten'>
        <h1 className='tv'>Unlimited movies, TV shows, and more.</h1>
        <h2 className='vt'>Watch anywhere. Cancel anytime.</h2>
        <form >
          <input type='email' placeholder='Email address' />
          <button  className='btn' onClick={()=>Navigate('/home')} >Get Started</button>
        </form>
        </div>
    
       
    </div>
  )
}

export default Login
