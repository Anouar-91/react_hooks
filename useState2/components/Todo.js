import React, {useState} from 'react'
import AddTodoForm from './AddTodoForm'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    const [todos, setTodos] = useState([
        {id:1, todo:"acheter du lait"},
        {id:2, todo:"acheter du pain"},
        {id:3, todo:"acheter du fromage"}

    ])
    const [warning, setWarning] = useState(false)

    const addNewTodo = (newTodo) => {
        if(newTodo !== ""){
            setTodos([
                ...todos,
                {id:uuidv4(), todo: newTodo}
            ])
            warning && setWarning(false)
        }
        else{
            setWarning(true)
        }

    }
    const myTodos = todos.map( todo => {
        return (
            <li className="list-group-item" key={todo.id}>{todo.todo}</li>
        )
    })
    const warningMsg = warning && (<div className="alert alert-danger" role="alert">Veuillez indiquer un todo</div>)
  return (
    <div>
        {warningMsg}
        <h1>Todo : {todos.length} </h1>
        <ul className="list-group">
            {myTodos}
        </ul>
        <br/>
        <AddTodoForm addOne={addNewTodo} />
    </div>
  )
}

export default Todo