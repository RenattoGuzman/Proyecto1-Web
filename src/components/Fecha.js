import React from 'react';
import '../TourStyle.css';

const Fecha = ({Date,Festival,Pais}) => {
  return (
    <div id='Fecha'>
        <a href='#'>Tickets</a>
        <p id='date'>{Date}</p> 
        <p id='fest'>{Festival}</p> 
        <p id='pais'>{Pais}</p> 
    </div>
  );
};

export default Fecha;
