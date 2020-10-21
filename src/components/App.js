import React from 'react';
import hooray from '../assets/celebrate.png';

export const App = () => {
  return (
    <div className="app">
      <img src={hooray} alt="celebrate" />
      <h1>Edited and pushed from git to my website from an AWS S3!</h1>
    </div>
  );
};
