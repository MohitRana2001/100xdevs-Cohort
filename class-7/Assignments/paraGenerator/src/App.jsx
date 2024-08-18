import { useState } from 'react'
import './App.css'
import axios from "axios"
// import { response } from 'express';

function App() {

  const [para , setPara ] = useState("");
  const [words , setWords ] = useState(0);

  async function handlePara() {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://loripsum.net/api/${words}$/short`);
    setPara(response.data);
  };

  return (
    <div>
      <h1>Para Generator</h1>
      <input type="text" placeholder='Enter number of Words' />
      <button  
      onChange={(e) => { setWords(e.target.value)}} 
      onClick={handlePara}>Generate</button>
      <p>{para}</p>
    </div>
  )
}

export default App;
