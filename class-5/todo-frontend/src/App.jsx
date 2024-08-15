import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todos'
import {useState} from "react"
function App() {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:5173/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <>
      <CreateTodo />
      <Todos todos={todos}/>
    </>
  )
}

export default App;
