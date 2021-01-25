import React, {useState, useEffect} from 'react';
import {ImHeart} from 'react-icons/Im';
import {HiShare} from 'react-icons/Hi';


var SaveShare = () => {

  const [active, setActive] = useState(false)
  const toggle = () => setActive(!active);

  return (
  <div className='buttonBar'>
     <div className='saveButton'><ImHeart onClick={toggle} className={active ? 'heart-icon is-clicked .bouncy' : 'heart-icon not-clicked'}/></div>

     <div className='shareButton'><HiShare onClick={toggle} className={active ? 'share-icon did-click .bounce' : 'share-icon didnt-click'}/></div>
  </div>

  )
}

export default SaveShare;

