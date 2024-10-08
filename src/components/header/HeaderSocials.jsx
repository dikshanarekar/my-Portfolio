import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/diksha-narekar-977354230/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/dikshanarekar" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials