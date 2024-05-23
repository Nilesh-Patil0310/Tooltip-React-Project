import React, { useState } from 'react';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const getTooltipStyles = () => {
    const styles = {
      position: 'absolute',
      backgroundColor: '#000',
      color: '#fff',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      zIndex: 10,
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.2s ease-in-out',
      
    };

    switch (position) {
      case 'top':
        styles.top = '-calc(100% + 5px)';
        styles.left = '50%';
        styles.transform = 'translateX(-50%)';
        break;
      case 'bottom':
        styles.top = 'calc(100% + 5px)';
        styles.left = '50%';
        styles.transform = 'translateX(-50%)';
        break;
      case 'right':
        styles.top = '50%';
        styles.left = 'calc(100% + 5px)';
        styles.transform = 'translateY(-50%)';
        break;
      case 'left':
        styles.top = '50%';
        styles.left = '-calc(100% + 5px)';
        styles.transform = 'translateY(-50%)';
        break;
      default:
        styles.top = 'calc(100% + 5px)';
        styles.left = '50%';
        styles.transform = 'translateX(-50%)';
    }

    return styles;
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && <div style={getTooltipStyles()}>{`Thanks for hovering! I'm a tooltip message`}</div>}
    </div>
  );
};

export default Tooltip;
