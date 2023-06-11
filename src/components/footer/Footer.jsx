import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ralph</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/ralph.daher.75"><FaFacebookF/></a>
        <a href="https://www.instagram.com/daher.ralph/"><FaInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; PeekMe. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
