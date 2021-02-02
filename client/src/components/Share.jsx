import React, {useState, useEffect} from 'react';
import {HiShare} from 'react-icons/Hi';

var Share = () => {

  const [activeShare, setActiveShare] = useState(false);

  const toggle2 = () => setActiveShare(!activeShare)

  return (
    <div className='shareButton'>
      <HiShare onClick={toggle2} className={activeShare ? 'share-icon did-click .bounce' : 'share-icon didnt-click'}/>
    </div>
  )
}

export default Share;

