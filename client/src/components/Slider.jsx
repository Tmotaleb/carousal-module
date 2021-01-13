import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';

const Slider = ({photos}) => {

  const [slides] = useState(photos)

  let [currentPosition, setCurrentPosition] = useState(0);
  let currentSlide = slides[currentPosition]

  const arrowRightClick = () => {
    currentPosition !== slides.length -1 ? setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
    currentSlide = slides[currentPosition];
  }

  const arrowLeftClick = () => {
    currentPosition !== 0 ? setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length-1);
    currentSlide = slides[currentPosition];
  }
  return (
    <div className='flex-container'>
      <div id='arrow-left' >
        <div className='circle' onClick={arrowLeftClick}><i className="arrow left"></i></div>
      </div>
      <div className='slide'>
        <img className='slider-img' src={currentSlide}/>
      </div>
      <div id='arrow-right'>
        <div className='circle' onClick={arrowRightClick}><i className="arrow right"></i></div>
      </div>
    </div>
  )
}

export default Slider;
