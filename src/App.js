import React from 'react';
import Tooltip from './component/tooltip';

const App = () => {
  return (
    <Tooltip content="Thanks for hovering! I'm a tooltip message">
      <button>Hover over me!</button>
    </Tooltip>
  );
};

export default App;