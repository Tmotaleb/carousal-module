import React from 'react';
import * as style from '../styles/style.js';

var Image_modal = ({photos}) => {

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

export default Image_modal;


{/* <div className="carousal-container">
<div className="big-image-block">
  <img className="big-image" src={photos[0]}/>
</div>
<div className="side-image-block">
  <div className="first-pic-block">
  <img className="first-image" src={photos[1]}/>
  </div>
  <div className="second-pic-block">
    <div className="btn-container">
     <img className="second-image" src={photos[2]}/>
     <button className="btn">See More</button>
    </div>
  </div>
</div> */}