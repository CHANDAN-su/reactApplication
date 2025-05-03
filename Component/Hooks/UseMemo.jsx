import React, { useState, useMemo, useEffect } from 'react'

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


    // Sometimes, you might want to use a value inside an Effect:
        let roomId = 56842538;

        const option = {
            serverUrl: "https://localhost:1234",
            roomId: roomId
        }

        useEffect(() => {
            const connection = createConnection(option);
            connection.connect();

            return () => {
                connection.disconnect()
            }
        }, [option]);  //Problem: This dependency changes on every render


        // To solve this, you can wrap the object you need to call from an Effect in useMemo:
        const option1 = useMemo(() => {

            const option = {
                serverUrl: "https://localhost:1234",
                roomId: roomId
            }
        }, [roomId]);   //Only changes when roomId changes

        useEffect(() => {
            const connection = createConnection(option);
            connection.connect();

            return () => {
                connection.disconnect()
            }
        }, [option]);  //Only changes when options changes

        // This will also cause the effect to re-fire, so it’s even better to remove the need for a function dependency by moving your object inside the Effect:

        useEffect(() => {
            const option = {
                serverUrl: "https://localhost:1234",
                roomId: roomId
            }

            const connection = createConnection(option);
            connection.connect();

            return () => connection.disconnect()
        }, [roomId]);


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


// Memoizing a dependency of another Hook 
function Dropdown({allItems, text}){

    const searchOption = {matchMode: "whole-word", text}

    const visivisibleItems = useMemo(() => {
        return searchItems(allItems, searchOption)
    }, [allItems, searchOption])  // Caution: Dependency on an object created in the component body


    // To fix this, you could memoize the searchOptions object itself before passing it as a dependency:

    const searchOption1 = useMemo(() => {
        return {matchMode: "whole-word", text}
    }, [text]);

    const visivisibleItems1 = useMemo(() => {
        return searchItems(allItems, searchOption1);
    }, [allItems, searchOption1]); //Only changes when allItems or searchOptions changes



    const visibleItems  = useMemo(() => {
        const searchOptions  = {matchMode: "whole-word", text}
        return searchItems(allItems, searchOptions)
    },[allItems, text])

    return (
        <>
            <p>Memoizing a dependency of another Hook</p>
        </>
    )
}

