import React, {useState, useEffect} from 'react';
import {ImHeart} from 'react-icons/Im';

var Save = () => {
  const [activeSave, setActiveSave] = useState(false);
  const toggle1 = () => setActiveSave(!activeSave);

  return (
     <div className='saveButton'>
      <ImHeart onClick={toggle1, handleShow} className={activeSave ? 'heart-icon is-clicked .bouncy' : 'heart-icon not-clicked'}/>
    </div>
  )
}

export default Save;

