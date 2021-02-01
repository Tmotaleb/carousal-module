import React, {useState, useEffect} from 'react';
import {ImHeart} from 'react-icons/Im';
import {HiShare} from 'react-icons/Hi';


var SaveShare = () => {

  const [activeSave, setActiveSave] = useState(false);

  const [activeShare, setActiveShare] = useState(false);

  const toggle1 = () => setActiveSave(!activeSave);
  const toggle2 = () => setActiveShare(!activeShare)

  return (
  <div className='buttonBar'>

     <div className='saveButton'><ImHeart onClick={toggle1} className={activeSave ? 'heart-icon is-clicked .bouncy' : 'heart-icon not-clicked'}/></div>

     <div className='shareButton'><HiShare onClick={toggle2} className={activeShare ? 'share-icon did-click .bounce' : 'share-icon didnt-click'}/></div>
  </div>

  )
}

export default SaveShare;

