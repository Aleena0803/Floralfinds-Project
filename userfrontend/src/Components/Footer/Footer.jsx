import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import insta from '../Assets/insta.png'
import pin from '../Assets/pin.png'
import whats from '../Assets/whats.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>FLORALFINDS</p>
        </div>
        <ul className="footer-links">
            <li>About</li>
            <li>Products</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pin} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whats} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer