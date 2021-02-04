import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {ImHeart} from 'react-icons/Im';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fabFacebook } from "@fortawesome/free-solid-svg-icons";
import {SiFacebook} from 'react-icons/Si';
import {AiFillTwitterCircle} from 'react-icons/Ai';
import {FcGoogle} from 'react-icons/Fc';

var Save = () => {
  const [activeSave, setActiveSave] = useState(false);
  const toggle1 = () => setActiveSave(!activeSave);

  return (
    <Popup trigger={
      <div className='saveButton'>
        <ImHeart onClick={toggle1} className={activeSave ? 'heart-icon is-clicked .bouncy' : 'heart-icon not-clicked'}/>
      </div>
      }
      modal
      nested
      >
      {close => (
        <div className='popup-modal'>
          <button className='close' onClick={close}>&times;</button>

          <div className='header'>
            <h1>Work'n Treehouse</h1>
            <h3>Sign in or register to save your favorite workspaces</h3>
          </div>

          <div className='content'>
            <form>
              <div className='contentainer'>
                <label for='email'><b>Email</b></label>
                <input type='text' placeholder='Enter email address' name='email' id='email' required/>

                <label for='psw'><b>Password</b></label>
                <input type='password' placeholder='Enter password, 8-15 characters' name='psw' id='psw' required/>

                <input type='submit'  value='Register'/>

                <p>I accept Work'n Treehouse's <a href='#' id='link'>Terms of Use</a> and <a href='#' id='link'>Privacy Policy.</a></p>
              </div>

                <div className='social-col'>
                  <a href='https://www.facebook.com' className='fb btn'>
                    <SiFacebook id='fi' className='facebook'/>Continue with Facebook
                  </a>

                  <a href='https://twitter.com' className='twt btn'>
                    <AiFillTwitterCircle className='twitter'/>Continue with Twitter
                  </a>

                  <a href='https://google.com' className='gle btn'>
                    <FcGoogle className='google'/>Continue with Google
                  </a>

                  <div className='contentainer signin'>
                    <p>Already have an account?<a href='#' id='link'> Sign in</a></p>
                  </div>
                </div>
            </form>
          </div>
        </div>
      )
    }
   </Popup>
  )
}

export default Save;

