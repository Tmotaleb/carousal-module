import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';
import {BsPerson} from 'react-icons/Bs';


var NavBar = () => {

  var img = 'https://mylogo-bucket.s3-us-west-1.amazonaws.com/FinalLogo.jpg'

  return (
    <style.navContainer>
      <img className='logo' src={img}/>
      <nav>
        <ul className='nav_links'>
          <li><a href='#'>Workspace</a></li>
          <li><a href='#'>Enterprise</a></li>
          <li><a href='#'>Contact Us</a></li>
          <li><a href='#'>Join/Sign In</a></li>
        </ul>
      </nav>
    </style.navContainer>
  )
}

export default NavBar;