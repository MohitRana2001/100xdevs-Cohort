
export function CreateTodo() {

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");


    return (
        <div>
            <input id="title" style={
                padding: 10,
                margin: 10
            } type="text" placeholder="title"></input> 
            <input type="text" placeholder="description"></input>
            <button>Add Todo</button>
        </div>
    )
}