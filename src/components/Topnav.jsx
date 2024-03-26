import React from 'react'
import '../Styles/TopNavStyle.css'

const Topnav = () => {
  return (
    <div className='HeadNav'>
     <div className='headInfo'>
      <h1>Hi Kwame,</h1>
      <p>Track and monitoring your packages</p>
      </div>
      <div className="account">
      <div className='notify'> 
      <img src='src\assets\images\notification.svg'/>
      </div>
      <div className='accountImg'>
      <img src='src\assets\images\account.svg'/>
      </div>
     </div>
    </div>
  )
}

export default Topnav;
