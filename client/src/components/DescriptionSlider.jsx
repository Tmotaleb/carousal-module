import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

var DescriptionSlider = () => {

  const items = [
    {id: 1, title: 'Private Office', icon: 'https://iconstorage.s3-us-west-1.amazonaws.com/office+icons/privateOffice.png'},
    {id: 2, title: 'Shared Workspace', icon: 'https://iconstorage.s3-us-west-1.amazonaws.com/office+icons/sharedWorkspace.webp'},
    {id: 3, title: 'Day Pass', icon: 'https://icon-library.net/icon/pass-icon-7.html'},
    {id: 4, title: 'Conference Room', icon: 'https://iconstorage.s3-us-west-1.amazonaws.com/office+icons/conferenceRoom.png'}
  ]

  const [sliderItems] = useState(items)

  let [currentPosition, setCurrentPosition] = useState(0);
  let currentSlide = sliderItems[currentPosition]

  const arrowRightClick = () => {
    currentPosition !== sliderItems.length -1 ? setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
    currentSlide = sliderItems[currentPosition];
  }

  const arrowLeftClick = () => {
    currentPosition !== 0 ? setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = sliderItems.length-1);
    currentSlide = sliderItems[currentPosition];
  }

  return (
    <style.officeSlider>
      <style.officeTitle>OFFICE ARRANGEMENTS</style.officeTitle>
      <style.sliderContainer>

          <style.arrowLeft>
            <FontAwesomeIcon className='left-arrow-icon' icon={faChevronCircleLeft} onClick={arrowLeftClick}/>
          </style.arrowLeft>

          <style.contents>
            {items.map((item) =>
              <div className='items'>{item.title}</div>
            )}
          </style.contents>

          <style.arrowRight>
            <FontAwesomeIcon className='right-arrow-icon' icon={faChevronCircleRight} onClick={arrowRightClick}/>
          </style.arrowRight>

      </style.sliderContainer>
    </style.officeSlider>
  )
}

export default DescriptionSlider;

{   /* <style.items>1</style.items>
      <style.items>2</style.items>
      <style.items>3</style.items>
      <style.items>4</style.items> */}