import React, {useState} from 'react'

const  AddTodoForm = ({addOne}) =>  {
    const [value, setValue] = useState('')
    const handleTodo = (e) => {
        e.preventDefault()
        addOne(value)
        setValue("")
    }
  return (
    <form onSubmit={handleTodo}> 
        <div className="card card-body">
            <div className="form-group">
                <label>Ajouter Todo</label>
                <input className="form-control" type="text" onChange={(e) => setValue(e.target.value)} value={value}/>
                <br/>
                <input className="btn btn-success" type="submit" />
            </div>
        </div>
    </form>
  )
}

export default AddTodoForm