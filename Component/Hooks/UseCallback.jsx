import React, { useState, useCallback } from 'react'
import UseCallbackchildren from "./UseCallbackchildren";

function UseCallback() {

    const [count, setCount] = useState(0);

    // const Increment = () => {
    //     setCount(count + 1);
    // }


    // frezze this function
    // const Increment = useCallback(() => {
    //     setCount(count + 1);
    // },[])


    const Increment = useCallback(() => {
        setCount(count + 1);
    },[count])

  return (
    <>
        <div>
            <h1>Count: {count}</h1>
            <br />
            <br />
            <button onClick={Increment}>Increment</button>
        </div>
        <br />
        <br />
        <div>
        < UseCallbackchildren  hendleClick={Increment} buttonName="Click me 2"/>
        </div>
        <br />
        <br />
        <br />
    </>
  )
}

export default UseCallback