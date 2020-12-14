import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';
import DescriptionSlider from './DescriptionSlider.jsx'


var Description = ({address}) => {


  return (
    <style.descriptionBox>
      <style.leftColumn>

        <style.description>
          <style.descriptionTitle>DESCRIPTION</style.descriptionTitle>
        </style.description>

        <style.officeSlider>
          <style.officeTitle>OFFICE ARRANGEMENTS</style.officeTitle>
        </style.officeSlider>

        <DescriptionSlider/>

      </style.leftColumn>
      <style.rightColumn></style.rightColumn>

    </style.descriptionBox>
  )
}

export default Description;