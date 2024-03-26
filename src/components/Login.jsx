// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../assets/images/img.svg'
import '../Styles/Login.css'

const Login = () => {
  return (
    <div className='containerLogin'>
      <div className="Image">
      <img className='photo' src='src\assets\images\img.svg'/>
      </div>
      <div className='form'>
      <div className="Loginlogo">
      <img src='src\assets\images\zippylogo.svg'/>
      </div>
      <div className='formInfo'>
      <h2>Get Started Now</h2>
      <p>Enter your credentials to access your account</p>
      <div style={{display:'flex',flexDirection:'row',}}>
      <div className='HR'></div>
      or
      <div className='HR'></div>
      </div>
      <div className='Inputs'>
      <div id='input'>
     <label htmlFor="email">Email:</label><br />
     <input className='inputWithSmsIcon' type="text" id="email" placeholder="Your email" name="email" required />
     </div>
     <div id='input'>
     <label htmlFor="password">Password:</label><br />
     <input className='inputWithEyeIcon' type="password" id="password" placeholder="Your password" name="password" required />
     <p style={{marginTop:5}}>Forgot password?</p>
     </div> 
     <button className='subBtn' type="submit">Login</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login;
