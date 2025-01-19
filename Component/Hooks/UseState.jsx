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

const UserProfile = () => {
    const [user, setUser] = useState({name: "", age: ""});

    const updateName = (e) => {
        setUser({...user, name: e.target.value})
    }

    const updateAge = (e) => {
        setUser({...user, age: e.target.value})
    }
    return (
        <>
            <input type="text" value={user.name} onChange={updateName} placeholder='Enter your name..' />
            <input type="text" value={user.age} onChange={updateAge} placeholder='Enter your age...' />
            <h1>Name: {user.name} || Age: {user.age}</h1>
        </>
    )
}

function ExpensiveInitialization(){

    const [count, setCount] = useState(() => {
        console.log("Expensive computation");        
        return 0;
    })
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </>
    )
}


const Counter1  = () => {
    const [counter , setCounter] = useState(0);

    const increment  = () => {
        setCounter((prev) => prev + 1);
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}

function UseState() {
  return (
    <>  
        <Counter/>
        <Greeting/>
        <TodoList/>
        <UserProfile/>
        <ExpensiveInitialization/>
        <Counter1/>
    </>
  )
}

export default UseState