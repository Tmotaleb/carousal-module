import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";

var MoreSpacesBox = ({data}) => {

  return (
    <style.morespaces>
      <style.titleBox>EXPLORE MORE SPACES</style.titleBox>
      <style.contentBox>
        <style.content>
        {data.map((item)=>
          <style.contentbubble>
            <style.cont1 src={item.image}></style.cont1>
            <style.cont2 className='cont2-box'>
              <li>Location: {item.location} </li>
              <li><a className='office-num'>Office {item.office}</a></li>
              <p>{item.info}</p>
            </style.cont2>
            <style.cont3>
              <style.inquireBtn>Inquire</style.inquireBtn>
              <style.memberIcon>
                <FontAwesomeIcon className ='member-icon' icon={faUser}/> {item.member}
              </style.memberIcon>
            </style.cont3>
          </style.contentbubble>
          )}
        </style.content>
      </style.contentBox>
    </style.morespaces>
  )
}

export default MoreSpacesBox;

