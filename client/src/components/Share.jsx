import React, {useState, useEffect} from 'react';
import {HiShare} from 'react-icons/Hi';
import {FaFacebookF} from 'react-icons/Fa';
import {FaTwitter} from 'react-icons/Fa';

import {FaInstagram} from 'react-icons/Fa';
import {FaLinkedinIn} from 'react-icons/Fa';
import {FaYoutube} from 'react-icons/Fa';

import {FaPinterestP} from 'react-icons/Fa';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

var Share = () => {

  const [activeShare, setActiveShare] = useState(false);

  const toggle2 = () => setActiveShare(!activeShare)

  return (
    <Popup trigger={
      <div className='shareButton'>
        <HiShare onClick={toggle2} className={activeShare ? 'share-icon did-click .bounce' : 'share-icon didnt-click'}/>
      </div>
      }
      modal
      nested
    >
    {close => (
      <div className='share-modal'>
        <button className='sh-close-btn' onClick={close}>&times;
        </button>

        <div className='share-header'>
          Share this place with family and friends
        </div>

        <div className='share-content'>

          <div className='share-email-box'>
            <form>
              <label className='share-label' for='link'><b>Share workspace with:</b></label>

              <input type='text' placeholder='Enter recipient email address' name='email' id='email' required/>

              <input type='submit'  value='Share' className='share-it-btn'/>
            </form>
            </div>

           <ul className='share-ul'>
            <li><p className='shareVia'>Or share via: </p></li>

            <li><FaFacebookF href='#'
            className='share-lnk fb-icon'/></li>

            <li><FaTwitter href='#' className='share-lnk twitter-icon'/></li>

            <li><FaLinkedinIn href='#' className='share-lnk linkedin-icon'/></li>

            <li><FaInstagram href='#' className='share-lnk instagram-icon'/></li>

            <li><FaYoutube href='#' className='share-lnk youtube-icon'/></li>

            <li><FaPinterestP href='#' className='share-lnk pinterest-icon'/></li>

          </ul>
        </div>
      </div>
    )}

    </Popup>
  )
}

export default Share;
