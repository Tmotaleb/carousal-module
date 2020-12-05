import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider.jsx'

const Modal = ({photos, show, hide}) => show ? ReactDOM.createPortal(

  <React.Fragment>
    <div className='modal-overlay'/>
    <div className='modal-wrapper' aria-modal aria-hidden tabIndex={-1} role='dialog'>
      <div className='modal'>
        <div className='modal-header'>
          <button type='button' className='modal-close-button' data-dismiss='modal' aria-label='Close' onClick={hide}>
            <span aria-hidden='true'>&times; Close</span>
          </button>
        </div>
        <Slider photos={photos}/>
      </div>
    </div>
  </React.Fragment>, document.body
):null;

export default Modal;