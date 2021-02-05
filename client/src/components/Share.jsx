import React, {useState, useEffect} from 'react';
import {HiShare} from 'react-icons/Hi';
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
           <ul className='share-ul'>
            <li><p>Share via: </p></li>
            <li><a href='#' id='share-icon' className='fa fa-facebook'></a></li>

            <li><a href='#' id='share-icon'  className='fa fa-twitter'></a></li>

            <li><a href='#' id='share-icon'  className='fa fa-linkedin'></a></li>

            <li><a href='#' id='share-icon'  className='fa fa-instagram'></a></li>

            <li><a href='#' id='share-icon'  className='fa fa-youtube'></a></li>

            <li><a href='#' id='share-icon'  className='fa fa-pinterest'></a></li>
          </ul>
        </div>
      </div>
    )}

    </Popup>
  )
}

export default Share;

