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


function UseState() {
  return (
    <>  
        <Counter/>
        <Greeting/>
    </>
  )
}

export default UseState