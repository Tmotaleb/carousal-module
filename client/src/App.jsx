import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import * as style from '../public/styles/style.js';
import Image_modal from './components/image_modal.jsx';
import regeneratorRuntime from 'regenerator-runtime';


const App = () => {
  const [photos, setPhotos] = useState({})
  const [address, setAddress] = useState({})

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
    <style.navContainer></style.navContainer>
      <style.title></style.title>
      <Image_modal photos={photos}/>
    </style.mainContainer>
  )
}

ReactDom.render(<App />, document.getElementById('app'));
