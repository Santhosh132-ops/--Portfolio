import { useState, useEffect } from 'react';
import './TerminalText.css';

const TerminalText = ({ text, delay = 50, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, onComplete]);

  return (
    <span className="terminal-typing">
      {displayedText}
      {currentIndex < text.length && <span className="terminal-cursor"></span>}
    </span>
  );
};

export default TerminalText;
