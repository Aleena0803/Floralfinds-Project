// import React from 'react'
// import './CSS/LoginSignup.css'

// const LoginSignup = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="loginsignup-container">
//       <h1>Sign Up</h1>
//       <div className="loginsignup-fields">
//         <input type="text" placeholder='Name' />
//         <input type="email" placeholder='Email Address' />
//         <input type="password" placeholder='Password' />
//       </div>
//       <button>Continue</button>
//       <p className="loginsignup-login">Already have an account?<span>Login Here</span></p>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup

import React, { useState } from 'react'
import './CSS/LoginSignup.css'

// import user_icon from '../Assets/person.png'
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'

const LoginSignup = () => {
    const [action,setAction] = useState("Login");
  return (
    <div className='container'>
     <div className="header">
      <div className="text">{action}</div> 
      <div className="underline"></div>
     </div> 
     <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
        {/* <img src={user_icon} alt=""/> */}
        <input type="text" placeholder="Name" />
     </div>}
     
     <div className="input">
        {/* <img src={email_icon} alt=""/> */}
        <input type="email" placeholder="Email Id" />
     </div>
     <div className="input">
        {/* <img src={password_icon} alt=""/> */}
        <input type="password" placeholder="Password"/>
     </div>
     </div>
     {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
     
     <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
     </div>
    </div>
  )
}

export default LoginSignup