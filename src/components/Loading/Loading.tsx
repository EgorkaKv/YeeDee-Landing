import React from 'react';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
      </div>
      <p className="loading__text">Loading...</p>
    </div>
  );
};

export default Loading;
