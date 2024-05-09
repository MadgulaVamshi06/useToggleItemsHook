import React from 'react';
import "./App.css"
import useToggleItems from './useToggleItems';

function App() {
  const [state, toggleState] = useToggleItems(["A", "B", "C","D","E"],0);

  return (
    <div>
      <h1>Current Item: {state}</h1>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default App;
