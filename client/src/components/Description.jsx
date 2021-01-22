import React, {useState, useEffect} from 'react';
import DescriptionBox from './DescriptionBox.jsx';
import Amenities from './Amenities.jsx';
import MoreSpacesBox from './MoreSpacesBox.jsx';


var Description = ({address, descriptionTxt, dataInfo}) => {
  console.log(dataInfo, 'hello')

  return (
    <div className='descriptionBox'>
      <div className='box1'>
        <div className='leftColumn'>
          <div className='description'>
            <div className='descriptionTitle'>DESCRIPTION</div>
            <div className='descriptionTxt'>{descriptionTxt}</div>
          </div>
          <DescriptionBox/>
          <Amenities/>
        </div>

        <div className='rightColumn'>
          <div className='bookingBox'></div>
        </div>
      </div>

      <div className='box2'>
      <MoreSpacesBox data={dataInfo}/>
      </div>
    </div>
  )
}

export default Description;