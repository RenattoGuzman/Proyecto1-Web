import React from 'react';
import '../TourStyle.css';

const Continente = ({imageSrc}) => {
  return (
    <div id='Continente'>
      <hr />
      <img src= { imageSrc } alt='continente' />
      <hr />
    </div>
  );
};

export default Continente;
