import React, {useState} from 'react'

function FunctionComponent() {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
    if(counter < 0){
        setCounter(0);
    }

  return (
    <>
        <h1>Counter: {counter}</h1> <br /><br />
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Sub</button>
    </>
  )
}

export default FunctionComponent
