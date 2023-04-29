import React from 'react'
import logo from '../assets/M logo.jpeg';
import   LinkedInIcon   from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from "react-router-dom";





const Navbar = ({Pic}) => {
  
  return (
    <div className='container'>
    
        <div className='top'>
        <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
        <div className='text'>
        <h1>Manish</h1>
        <p>Web Developer</p>
        </div>
        </div>
        <div className='middle'>
          <NavLink onClick={Pic} to='/about' >About </NavLink>
          <NavLink to='/skills'>My skills</NavLink>
          <NavLink to='/work'>Work</NavLink>
          <NavLink to='/contact'> Contact</NavLink>
        </div>
        <div className='bottom'>
          <ul class="social">
            <li><NavLink to="" target="_blank"><LinkedInIcon sx={{color:'white'}}/></NavLink></li>
            <li><NavLink to="" target="_blank"><GitHubIcon sx={{color:'white'}} /></NavLink></li>
            <li><NavLink to="" target="_blank"><EmailIcon  sx={{color:'white'}}/></NavLink></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar