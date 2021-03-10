import React, {useState, useEffect} from 'react';
import {GrWifi} from 'react-icons/Gr';
import {ImSpoonKnife} from 'react-icons/Im';
import {FaRegUser} from 'react-icons/Fa';
import {HiOutlineSparkles} from 'react-icons/Hi';
import {FaRegIdCard} from 'react-icons/Fa';
import {FiCoffee} from 'react-icons/Fi';
import {BsDroplet} from 'react-icons/Bs';
import {GiSofa} from 'react-icons/Gi';
import {FiPhoneCall} from 'react-icons/Fi';
import {AiOutlinePrinter} from 'react-icons/Ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";


var Amenities = () => {

  return (

  <div className='amenitiesBox'>
    <div className='amenitiesTitle'>AMENITIES & SERVICES</div>
    <div className='amenitiesContainer'>

      <ul className='col1-list'>
        <li><FontAwesomeIcon className='wifi-icon' icon={faWifi}/> Wifi</li>
        <li><FontAwesomeIcon className='wheelchair-icon' icon={faWheelchair}/> Accessibility</li>
        <li><ImSpoonKnife className='spoonKnife-icon'/> Kitchen</li>
        <li><FaRegUser className='user-icon'/> Onsite Staff</li>
      </ul>

      <ul className='col2-list'>
        <li><HiOutlineSparkles className='clean-icon' /> Enhanced Cleaning Service</li>
        <li><FaRegIdCard className='guest-icon'/> Guest Pass</li>
        <li><FiCoffee className='coffee-icon'/> Coffee/Tea</li>
        <li><BsDroplet className='drop-icon'/> Filtered Water</li>
      </ul>

      <ul className='col3-list'>
        <li><FontAwesomeIcon className='paw-icon' icon={faPaw} /> Pet Friendly</li>
        <li><AiOutlinePrinter className='printer-icon'/> Print/Scan/Copy</li>
        <li><GiSofa className='sofa-icon'/> Common Area</li>
        <li><FiPhoneCall className='phone-icon'/> Phone Booth</li>
      </ul>

    </div>
    <button className='amenities_btn'>See All</button>
  </div>
  )
}

export default Amenities;