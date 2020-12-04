import React, {useState, useEffect} from 'react';
import * as style from '../../public/styles/style.js';
import styled from 'styled-components';
import regeneratorRuntime from 'regenerator-runtime';

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
