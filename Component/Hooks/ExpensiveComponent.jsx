import React, { useCallback, useState, useMemo, useEffect, useRef } from 'react'

function ExpensiveComponent() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const previousFunction = useRef();

    // const expensiveCalculation = () => {
    //     let result = 0;
    //     for (let i = 0; i < 100000000; i++) {
    //         result += i            
    //     }
    //     return result;
    // }

    const expensiveCalculation = useCallback(
    () => {
        console.log("Running expensive calculation ....");
        let result = 0;
        for (let i = 0; i < 10000000; i++) {
            result += i            
        }
        return result;
    }, [count]);


    useEffect(() => {
        
        if (previousFunction.current) {

            if (previousFunction.current === expensiveCalculation) {
                console.log("Function not re-create");
            } else {
                console.log("Function got re-create");
            }

        } else {
            previousFunction.current = expensiveCalculation;
        }

    }, [expensiveCalculation])

  return (
    <>
        <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Type something'
        />
        <p>Expensive Calculation Result: {expensiveCalculation()}</p>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  )
}

export default ExpensiveComponent