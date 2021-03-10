import React, {useState, useEffect} from 'react';
import useModal from './useModal.js'
import Modal from './Modal.jsx'

var Image_modal = ({photos}) => {

  const {show, toggle} = useModal()

  return (
    <div className='carousalContainer'>
      <div className='bigImageBlock'>
        <img className='bigImage' src={photos[0]} onClick={toggle}/>{console.log('Clicked0')}
        <Modal
          show={show}
          hide={toggle}
          photos={photos}
        />
      </div>

      <div className='sideImageBlock'>
        <div className='firstPicBlock'>
        <img className='firstImage' src={photos[1]} onClick={toggle}/>{console.log('Clicked1')}
        </div>

        <div className='secondPicBlock'>
          <div className='btnContainer' onClick={toggle}>
           <img className='secondImage' src={photos[2]}/>
           <button className='btnButton'>See More {console.log('button')}</button>
          </div>
        </div>

     </div>
    </div>
  )
}

export default Image_modal;
