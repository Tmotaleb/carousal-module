import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const Modal = ({show, hide}) => show ? ReactDOM.createPortal(

  <React.Fragment>
    <div className='modal-overlay'/>
    <div className='modal-wrapper' aria-modal aria-hidden tabIndex={-1} role='dialog'>
      <div className='modal'>
        <div className='modal-header'>
          <button type='button' className='modal-close-button' data-dismiss='modal' aria-label='Close' onClick={hide}>
            <span aria-hidden='true'>&times;Close</span>
          </button>
        </div>
        <p>I am a Modal</p>
      </div>
    </div>
  </React.Fragment>, document.body
):null;

export default Modal;