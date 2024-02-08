import React from 'react'
import './CSS/Contacts.css'

const Contacts = () => {
  return (
    <div className='contacts'>
        <div className="contacts-container">
        <h2>Enter Your Feedbacks and Any Query Messages Here</h2>
        <div className="contacts-fields">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="number" placeholder='Phone Number' />
            <input type="text" placeholder='Enter Your Message Here' />
        </div>
        <button>Submit</button>
        </div>
    </div>
  )
}

export default Contacts