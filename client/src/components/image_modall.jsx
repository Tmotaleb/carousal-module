import React {useState} from 'react';
import * as style from '../styles/style.js';
import ReactDom from 'react-dom';

class Image_modall extends React.Component {

  constructor({photos}) {
    super({photos});
      this.state =  {
        photoData: photos
      }
      console.log(this.state.photoData, 'data')
    }

  render () {
  return (
    <style.carousalContainer>

      <style.bigImageBlock>
        <style.bigImage src={photos[0]}/>
      </style.bigImageBlock>

      <style.sideImageBlock>
        <style.firstPicBlock>
        <style.firstImage src={photos[1]}/>
        </style.firstPicBlock>

        <style.secondPicBlock>
          <style.btnContainer>
           <style.secondImage src={photos[2]}/>
           <style.btnButton>See More</style.btnButton>
          </style.btnContainer>
        </style.secondPicBlock>

     </style.sideImageBlock>
    </style.carousalContainer>
  )
  }
}

export default Image_modall;