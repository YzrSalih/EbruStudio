import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('.hover-trigger')) {
        cursor.classList.add('hovered');
      }
      if (target.closest('.view-trigger')) {
        cursor.classList.add('view-cursor');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.closest('.hover-trigger')) {
        cursor.classList.remove('hovered');
      }
      if (target.closest('.view-trigger')) {
        cursor.classList.remove('view-cursor');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div id="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;