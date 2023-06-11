import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ralph-daher-029a92232/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/PeekMe01" target="_blank"><FaGithub /></a>
      <a href="https://www.instagram.com/daher.ralph/" target='_blank'><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials
