import React, {useState, useEffect} from 'react';

const useModal = () => {
  const [show, setShowModal] = useState(false)

  const toggle = () => {
    setShowModal(!show)
  }

  return {
    show,
    toggle,
  }
}

export default useModal;
