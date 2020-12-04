import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import * as style from '../styles/style.js';
import Image_modal from './components/image_modal.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: null,
      }
      console.log(this.state.data)

  }

  componentDidMount() {
    axios.get('/api/carousal')
      .then((response) => {
        console.log(response.data, 'rd')
        this.setState({data: response.data})
        this.setState({photoData: response.data.photos})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <style.mainContainer>
      <style.navContainer></style.navContainer>
        <style.title></style.title>
       {this.state.data ? this.state.data.map((item) => {
        return <Image_modal photos={item.photos}/>
       }):null}
      </style.mainContainer>
    )
  }
}

ReactDom.render(<Apps />, document.getElementById('app'));


// <style.mainContainer>
// {/* <div className="main-container"> */}
// <style.navContainer></style.navContainer>
//   {/* <div className="nav-bar"></div> */}
//   {/* <div className="title"></div> */}
//   <style.title></style.title>
//  {this.state.data ? this.state.data.map((item) => {
//   return <Image_modal photos={item.photos}/>
//  }):null}
// {/* // </div> */}
// </style.mainContainer>