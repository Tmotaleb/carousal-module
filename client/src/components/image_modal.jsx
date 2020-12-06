import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';
import useModal from './useModal.js'
import Modal from './Modal.jsx'

var Image_modal = ({photos}) => {

  const {show, toggle} = useModal()

  return (
    <style.carousalContainer>
      <style.bigImageBlock>
        <style.bigImage src={photos[0]} onClick={toggle}>{console.log('Clicked0')}</style.bigImage>
        <Modal
          show={show}
          hide={toggle}
          photos={photos}
        />
      </style.bigImageBlock>

      <style.sideImageBlock>
        <style.firstPicBlock>
        <style.firstImage src={photos[1]} onClick={toggle}>{console.log('Clicked1')}</style.firstImage>
        </style.firstPicBlock>

        <style.secondPicBlock>
          <style.btnContainer onClick={toggle}>
           <style.secondImage src={photos[2]}/>
           <style.btnButton>See More {console.log('button')}</style.btnButton>
          </style.btnContainer>
        </style.secondPicBlock>

     </style.sideImageBlock>
    </style.carousalContainer>
  )
}

export default Image_modal;
