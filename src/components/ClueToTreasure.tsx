import React from 'react';
import { getImageUrlByNameFromLocalStorage } from '../services/retrieveFromStorage';

export const ClueToTreasure = () => {
  const SKATTEN = getImageUrlByNameFromLocalStorage('skatten.jpg');
  return (
    <>
      <h1>Hurra du klarte det!</h1>
      <img src={SKATTEN} alt="skatten" />
    </>
  );
};
