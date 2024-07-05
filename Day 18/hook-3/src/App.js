import React, {useRef, useState} from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");

  const inputRef = useRef();

  console.log("Getting Rendered");

  const display = () => {
    console.log(inputRef.current.value);
  }

  return (
    <div className="App">
      <h1>Input</h1>
      <input  ref={inputRef} type="text" 
      // value={input} 
      // onChange={(event)=>setInput(event.target.value)} 
      />
      <button onClick={display}>Show Input</button>

    </div>
  );
}

export default App;