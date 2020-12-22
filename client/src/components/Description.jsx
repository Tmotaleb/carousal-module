import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';
import DescriptionBox from './DescriptionBox.jsx';
import Amenities from './Amenities.jsx';


var Description = ({address, descriptionTxt}) => {
  return (
    <style.descriptionBox>
      <style.leftColumn>
        <style.description>
          <style.descriptionTitle>DESCRIPTION</style.descriptionTitle>
          <style.descriptionTxt>{descriptionTxt}</style.descriptionTxt>
        </style.description>
        <DescriptionBox/>
        <Amenities/>
      </style.leftColumn>
      <style.rightColumn></style.rightColumn>
    </style.descriptionBox>
  )
}

export default Description;