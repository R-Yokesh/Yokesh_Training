import React, { useState } from 'react'

const App = () => {

  const [input,setInput] = useState("");

  console.log("Getting Rendered");

  return (
    <div>
      <h1>Input</h1>
      <input type='text' value = {input} onChange={(event) =>setInput(event.target.value)}/>
    </div>
  )
}

export default App