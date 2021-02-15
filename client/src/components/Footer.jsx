import React, {useState, useEffect} from 'react';
import {GiTreeBranch} from 'react-icons/Gi';

var Footer = () => {

  return (
    <footer className='footer'>
    <ol>
      <ul className='footer-ul'>
        <li><a href='https://www.facebook.com/' className='fa fa-facebook'></a></li>
        <li><a href='https://twitter.com/?lang=en' className='fa fa-twitter'></a></li>
        <li><a href='https://www.linkedin.com/' className='fa fa-linkedin'></a></li>
        <li><a href='https://www.instagram.com/' className='fa fa-instagram'></a></li>
        <li><a href='https://www.youtube.com' className='fa fa-youtube'></a></li>
        <li><a href='https://www.pinterest.com' className='fa fa-pinterest'></a></li>
      </ul>

      <li className='list2'>
        <p className='footer-brand'>
          <a href='#'>Terms of Use</a><GiTreeBranch/><a href='#'>Privacy Policy</a>
          <br/>
          Treehouse, Inc. 2021
        </p>
        </li>
    </ol>
    </footer>
  )
}

export default Footer;