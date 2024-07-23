import logo from './Assests/Google New G Icon.jpg'
import { useState } from 'react';
import menu from './Assests/—Pngtree— icon_4697369 (1).png'
import React from 'react';
import {Link} from 'react-scroll'
import './Navbar.css' 
 
const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

return (
  <nav className = "navbar bg-slate-200">
      <img src={logo} alt='logo' className='logo'/>

      <div className = "nav-links">
          <Link activeClass='active' to = 'intro' spy = {true} smooth = {true} offset={-100} duration={500} className='nav-links-item'>Home</Link>
          <Link activeClass='active' to = 'about' spy = {true} smooth = {true} offset={-50} duration={500} className='nav-links-item'>Client</Link>
          <Link activeClass='active' to = 'project' spy = {true} smooth = {true} offset={-50} duration={500} className='nav-links-item'>About</Link>
          <Link activeClass='active' to = 'social' spy = {true} smooth = {true} offset={-50} duration={500} className='nav-links-item'>Product</Link>
          <Link activeClass='active' to = 'social' spy = {true} smooth = {true} offset={-50} duration={500} className='nav-links-item'>Testimonial</Link>
      </div>

      <div className="flex items-center">
          <button className="bg-white-500 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mx-3">Login</button>
          <button className="bg-white-300 hover:bg-gray-400 text-black-800 font-bold py-2 px-4 rounded">Signup</button>
        </div>


          <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>

      <div className = "navMenu" style={{display: showMenu? 'flex':'none'}}>
      <Link activeClass='active' to = 'intro' spy = {true} smooth = {true} offset={-100} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to = 'about' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to = 'project' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>Projects</Link>
            <Link activeClass='active' to = 'social' spy = {true} smooth = {true} offset={-50} duration={500} className='Menu-item' onClick={() => setShowMenu(false)}>Socials</Link>
           
      </div>
  </nav>
  
  );
}

export default Navbar;
