import "../style.css";
import React, { useState } from 'react';

const Cursor1 = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 550, y: 550 });

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({ x: e.clientX, y: e.clientY });
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
      id="cursor4"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={style}
    >
      <img
        height="64px"
        onDragStart={(e) => e.preventDefault()}
        src="https://oklama.com/_next/static/media/black.2928ccde.png" 
        alt="carpeta3"
      />
    </div>
  );
};

export default Cursor1;
