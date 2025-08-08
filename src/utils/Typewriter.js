import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100); // velocidad: 100ms por letra
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return (
    <p className={className}>
      {displayedText}
      <span className="inline-block animate-pulse">|</span>
    </p>
  );
};
