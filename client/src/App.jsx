import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import * as style from '../public/styles/style.js';
import Image_modal from './components/Image_modal.jsx';
import NavBar from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Description from './components/Description.jsx';
import regeneratorRuntime from 'regenerator-runtime';
import {VscHeart} from 'react-icons/Vsc';
import {BiShareAlt} from 'react-icons/Bi';


const App = () => {
  const [photos, setPhotos] = useState({});
  const [address, setAddress] = useState(null);
  const [descriptionTxt, setDescriptionTxt] = useState('');
  const [moreSpacesInfo, setMoreSpacesInfo] = useState([]);

  useEffect(() => {
    axios.get('/api/carousal')
      .then((response) => {
        console.log(response, 'rd')
        setPhotos(response.data.photos);
        setAddress(response.data.address);
        setDescriptionTxt(response.data.descriptionTxt);
        setMoreSpacesInfo(response.data.moreSpacesInfo)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <style.mainContainer>
      <NavBar/>
      <style.location>
        <style.address>Space available at: {address}</style.address>
        <style.buttonBar>
          <style.saveButton><VscHeart className='heart-icon'/></style.saveButton>
          <style.shareButton><BiShareAlt className='share-icon'/></style.shareButton>
        </style.buttonBar>
      </style.location>
      <Image_modal photos={photos}/>
      <Description address={address} descriptionTxt={descriptionTxt} dataInfo={moreSpacesInfo}/>
      <Footer/>
    </style.mainContainer>
  )
}

ReactDom.render(<App />, document.getElementById('app'));
