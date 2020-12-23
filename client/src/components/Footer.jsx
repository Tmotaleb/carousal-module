import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';


var Footer = () => {

  return (
    <style.footer>
    <ol>
      <ul className='footer-ul'>
        <li><a href='#' className='fa fa-facebook'></a></li>
        <li><a href='#' className='fa fa-twitter'></a></li>
        <li><a href='#' className='fa fa-linkedin'></a></li>
        <li><a href='#' className='fa fa-instagram'></a></li>
        <li><a href='#' className='fa fa-youtube'></a></li>
        <li><a href='#' className='fa fa-pinterest'></a></li>
      </ul>

      <li className='list2'>
        <p className='footer-brand'>
          <a href='#'>Terms of Use</a> | <a href='#'>Privacy Policy</a>
          <br/>
          Work'n Treehouse, Inc. 2020
        </p>
        </li>
    </ol>
    </style.footer>
  )
}

export default Footer;