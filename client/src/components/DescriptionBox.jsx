import React, {useState, useEffect, useRef} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';

var DescriptionBox = () => {

  const items = [
    {id: 1, title: 'Private Office', icon: 'https://iconstorage.s3-us-west-1.amazonaws.com/office+icons/privateOffice.png', description:'Move in ready office space, enclosed with 24/7 access to amenities'},

    {id: 2, title: 'Shared Workspace', icon: 'https://iconstorage.s3-us-west-1.amazonaws.com/office+icons/sharedWorkspace.webp', description:'Open co-working spaces available with 24/7 access in any one of your preferable location'},

    {id: 3, title: 'Day Pass', icon: 'https://iconstorage.s3-us-west-1.amazonaws.com/office+icons/pass.png', description:'Book a day pass and enjoy an all day access to any of the facilities of your choice'},

    {id: 4, title: 'Conference Room', icon: 'https://iconstorage.s3-us-west-1.amazonaws.com/office+icons/conferenceRoom2.png', description:'Book a room by the hour for a meeting with your clients and co-workers'}
  ]

  return (
    <style.officeSlider>
      <style.officeTitle>OFFICE ARRANGEMENTS</style.officeTitle>

      <style.sliderContainer>
        {items.map((item) =>
          <style.items className='view'>
            <style.itemIcon className='img' src={item.icon}></style.itemIcon>
              <div className='mask'>
                <p>{item.description}</p>
              </div>
            <style.itemDescription>{item.title}</style.itemDescription>
          </style.items>
        )}

      </style.sliderContainer>

    </style.officeSlider>
  )
}

export default DescriptionBox;
