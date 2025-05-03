import React, { useState, useMemo } from 'react'

function UseMemo() {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    function expensiveTask(num){
        console.log("Inside Expensive Tsk");        
        for (let i = 0; i <= 1000000000 ; i++) { }
        return num * 2;
    }


    // console.time("filter array")    ;
    // let doubleValue = expensiveTask(input);
    // console.timeEnd('filter array');

    console.time("filter array")    ;
    let doubleValue = useMemo(() => expensiveTask(input), [input]);
    console.timeEnd('filter array');

    // let doubleValue = expensiveTask(input);
    // let doubleValue = useMemo(() => expensiveTask(input), [input]);



  return (
    <>
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <div>
                Count: {count}
            </div>

            <div>
                <input type="text"
                    placeholder='Enter your number'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            <div>
                Double: {doubleValue}
            </div>
        </div>
    </>
  )
}

export default UseMemo