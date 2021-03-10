import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
  const toggle2 = () => setActiveShare(!activeShare);

  const [shareData, setShareData] = useState({
    email:''
  })

  const updataShareData = event => setShareData({
    ...shareData,
    [event.target.name]: event.target.value
  })

  const { email } = shareData;

  const shareInfo = (e) => {
    e.preventDefault();
    axios.post('/api/share', {
      email: shareData.email
    })
    .catch(() => {
      console.log('err with posting share')
    })
  }

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
          <form>
            <div className='share-email-box'>

              <label className='share-label' for='link'><b>Share workspace with:</b></label>

              <input
              type='text'
              placeholder='Enter recipient email address' name='email'
              value={email}
              onChange={e => updataShareData(e)}
              required
              />

              <input
              type='submit'
              value='Share'
              onClick={shareInfo}
              className='share-it-btn'/>
            </div>
          </form>

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
