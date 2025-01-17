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


function UseState() {
  return (
    <>  
        <Counter/>
    </>
  )
}

export default UseState