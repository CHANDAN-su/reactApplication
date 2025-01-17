import React, {useState} from 'react'

const Counter = () => {
    const [counter, seCounter] = useState(0);

    const onePlusValue  = () => {
        seCounter(counter + 1)
    }
    return (

        <>
            <h1>Use useState</h1>
            <button onClick={onePlusValue}>Value One Plus</button>
            <p>{counter}</p>
        </>
    )
}

const Greeting = () => {
    const [name, setName] = useState("");

    return (
        <>
            <input type="text" value={name} placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name || "Gust!"}</p>
        </>
    )
}

const TodoList = () => {
    const [task, setTask] = useState([]);

    const addTask = () => {
        const newTask = {id: task.length + 1 , text: `Task: ${task.length + 1}`}

        setTask([...task, newTask])
    }

    const RemoveTask = (id) => {
        setTask(task.filter((val) => val.id !== id));
    }

    return (
        <>
            <h1>Task list</h1>
            <button onClick={addTask}>Add Task</button>
            <nav>
                <ul>
                    {task.map((task) => (
                        <li key={task.id}>{task.text} {' '}
                         <button onClick={ () => RemoveTask(task.id)}>Remove a task</button></li>
                    ))}
                </ul>
            </nav>
        </>
    )
}




function UseState() {
  return (
    <>  
        <Counter/>
        <Greeting/>
        <TodoList/>
    </>
  )
}

export default UseState