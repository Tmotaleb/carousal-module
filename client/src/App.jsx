import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import * as style from '../public/styles/style.js';
import Image_modal from './components/image_modal.jsx';
import NavBar from './components/nav.jsx';
import regeneratorRuntime from 'regenerator-runtime';
import {VscHeart} from 'react-icons/Vsc';
import {BiShareAlt} from 'react-icons/Bi';


const App = () => {
  const [photos, setPhotos] = useState({})
  const [address, setAddress] = useState(null)

  useEffect(() => {
    axios.get('/api/carousal')
      .then((response) => {
        console.log(response, 'rd')
        setPhotos(response.data.photos);
        setAddress(response.data.address);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <style.mainContainer>
      <NavBar/>
      <style.location>
        <style.address> Space available at: {address}</style.address>
        <style.buttonBar>
          <style.saveButton><VscHeart className='heart-icon'/></style.saveButton>
          <style.shareButton><BiShareAlt className='share-icon'/></style.shareButton>
          {/* <style.bookIt>Book It!</style.bookIt> */}
        </style.buttonBar>
      </style.location>
      <Image_modal photos={photos}/>
    </style.mainContainer>
  )
}

ReactDom.render(<App />, document.getElementById('app'));

{/* <style.address> Space available at: {address}</style.address>
        <style.save>
          <VscHeart className='heart-icon' size='25px'/>
        </style.save>
        <style.share><FiShare className='share-icon'/></style.share>
        <style.bookIt type='button'>Book Now</style.bookIt> */}