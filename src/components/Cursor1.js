import "../style.css";
import React, { useState } from 'react';

const Cursor1 = () => {
  
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 700, y: 300 });

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
      id="cursor1"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={style}
    >
      <img
        height="84px"
        onDragStart={(e) => e.preventDefault()}
        src="https://oklama.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmm.88f5fe45.jpg&w=3840&q=75"
        alt="mr morale"
      />
    </div>
  );
};

export default Cursor1;
