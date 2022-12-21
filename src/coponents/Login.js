import React from 'react'
import './Login.css'
import { Link } from "react-router-dom"
function Login() {
  return (
    <>
      <section className='login'>
      <div className="login">
  <div className="login-triangle"></div>
  
  <h2 className="login-header">Manager Login</h2>

  <form className="login-container">
    <p><input type="email" placeholder="Email"/></p>
    <p><input type="password" placeholder="Password"/></p>
    <Link to='/Box'><input type="submit" value="Log in"/></Link>
  </form>
</div>
      </section>
    </>
  )
}

export default Login
