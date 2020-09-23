import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [disabled, setDisabled] = React.useState(false);
  const [state, setState] = React.useState(false);

  function handleDisabled() {
    setDisabled(true)
    console.count('disabled')

    setTimeout(() => setDisabled(false), 2000)
  }
  
  function handleState() {
    if (!state) {
      setState(true)
      console.count('clicky')

      setTimeout(() => setState(false), 2000)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={handleDisabled}
          disabled={disabled}
        >
          Using disabled
        </button>
        <br />
        <br />
        <br />
        <button
          onClick={handleState}
        >
          Using state
        </button>
      </header>
    </div>
  );
}

export default App;
