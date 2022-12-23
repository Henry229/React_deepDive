import { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const flowMouse = (event) => {
    setPosition((prev) => ({ ...prev, left: event.clientX }));
  };

  return (
    <div className='container' onPointerMove={flowMouse}>
      <div
        className='pointer'
        style={{
          transform: `translate(${position.left}px, ${position.top}px)`,
        }}
      ></div>
    </div>
  );
}

export default App;
