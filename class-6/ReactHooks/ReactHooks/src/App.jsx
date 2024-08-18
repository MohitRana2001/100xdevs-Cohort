import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("my name is mohit1");

  function changingName() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={changingName}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="mohit2"></Header>
    </div>
  )
}

function Header({title}) {
  return <div>
    {title} 
  </div>
}

export default App
