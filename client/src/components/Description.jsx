import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';
import DescriptionBox from './DescriptionBox.jsx';
import Amenities from './Amenities.jsx';
import MoreSpacesBox from './MoreSpacesBox.jsx';


var Description = ({address, descriptionTxt, dataInfo}) => {
  console.log(dataInfo, 'hello')

  return (
    <style.descriptionBox>
      <style.box1>
        <style.leftColumn>
          <style.description>
            <style.descriptionTitle>DESCRIPTION</style.descriptionTitle>
            <style.descriptionTxt>{descriptionTxt}</style.descriptionTxt>
          </style.description>
          <DescriptionBox/>
          <Amenities/>
        </style.leftColumn>

        <style.rightColumn>
          <style.bookingBox></style.bookingBox>
        </style.rightColumn>
      </style.box1>

      <style.box2>
      <MoreSpacesBox data={dataInfo}/>
      </style.box2>
    </style.descriptionBox>
  )
}

export default Description;