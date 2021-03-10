import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";


var MoreSpacesBox = ({data}) => {

  data = data.slice(0, 4)

  return (
    <div className='morespaces'>
      <div className='titleBox'>EXPLORE MORE SPACES</div>
      <div className='contentBox'>
        <div className='content'>
        {data.map((item)=>
          <div className='contentbubble'>
            <img className='cont1' src={item.image}/>
            <div className='cont2' id='cont2-box'>
              <li>Location: {item.location} </li>
              <li><a className='office-num'>Office {item.office}</a></li>
              <p>{item.info}</p>
            </div>
            <div className='cont3'>
              <button className='inquireBtn'>Inquire</button>
              <div className='memberIcon'>
                <FontAwesomeIcon className ='member-icon' icon={faUser}/> {item.member}
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MoreSpacesBox;

