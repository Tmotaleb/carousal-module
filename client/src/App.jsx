import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Image_modal from './components/Image_modal.jsx';
import NavBar from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Save from './components/Save.jsx';
import Share from './components/Share.jsx'
import Description from './components/Description.jsx';
import regeneratorRuntime from 'regenerator-runtime';
import '../public/style.css';

const App = () => {
  const [photos, setPhotos] = useState({});
  const [address, setAddress] = useState(null);
  const [descriptionTxt, setDescriptionTxt] = useState('');
  const [moreSpacesInfo, setMoreSpacesInfo] = useState([]);

  useEffect(() => {
    axios.get(`/api/carousal`)
      .then((response) => {
        console.log(response, 'red')
        setPhotos(response.data.photos);
        setAddress(response.data.address);
        setDescriptionTxt(response.data.descriptionTxt);
        setMoreSpacesInfo(response.data.moreSpacesInfo);
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div className='mainContainer'>
      <NavBar/>
      <div className='location'>
        <div className='address'>Space available at: {address}</div>
        <div className='buttonBar'>
          <Save />
          <Share />
        </div>
      </div>
      <Image_modal photos={photos}/>
      <Description address={address} descriptionTxt={descriptionTxt} dataInfo={moreSpacesInfo}/>
      <Footer/>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('carousal'));
