import React, {useState, useEffect} from 'react';
import {BsPerson} from 'react-icons/Bs';


var NavBar = () => {

  return (
    <div className='navContainer'>
      <a className='logo'><em>T</em>REEHOUSE.</a>
      <nav>
        <ul className='nav_links'>
          <li><a href='#'>Workspace</a></li>
          <li><a href='#'>Enterprise</a></li>
          <li><a href='#'>Contact Us</a></li>
          <li><a href='#'>Join/Sign In</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;