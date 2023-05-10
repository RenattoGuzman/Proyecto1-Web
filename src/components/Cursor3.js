import "../style.css";
import React, { useState } from 'react';

const Cursor1 = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 350, y: 250 });

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({ x: e.clientX, y: e.clientY }); // Sumarle la posicion de la imagen que está agarrando
    }
  };

  const style = {
    position: 'absolute',
    top: position.y + 'px',
    left: position.x + 'px',
    outline: isDragging ? 'black dotted 2px' : 'none',
  };

  return (
    <div
      id="cursor3"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={style}
    >
      <img
        height="64px"
        onDragStart={(e) => e.preventDefault()}
        src="https://oklama.com/_next/static/media/default.0302e2ab.png" 
        alt="carpeta2"
      />
      <span>nu thoughts</span>

    </div>
  );
};

export default Cursor1;
