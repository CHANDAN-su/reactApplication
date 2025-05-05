// useLayoutEffect, runs sunchronously after a render but before the screen is updated

// useEffect runs asynchronously and after a render is painted to the screen

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'


function UseLayoutEffect() {

    // useEffect top to botton run
    // useEffect(() => {
    //     console.log("First useEffect");
    // }, []);

    // useEffect(() => {
    //     console.log("Third useEffect");
    // }, []);

    // useEffect(() => {
    //     console.log("second useEffect")
    // }, []);

    // useEffect(() => {
    //     console.log("first useEffect");
    // }, []);

    // useLayoutEffect(() => {
    //     console.log("Third useEffect");
    // }, []);

    // useEffect(() => {
    //     console.log("Second useEffect");
    // }, []);

    const boxRef = useRef();
    const [num, setNum] = useState(0);
    const [boxsize, setBoxsize] = useState({
        with: 0,
        height: 0
    })

    // useEffect(() => {
    //     if(num === 0){
    //         setNum(5 + Math.random() * 30)  
    //     }
    // }, [num]);

    useLayoutEffect(() => {
        if(num === 0){
            setNum(5 + Math.random() * 30)  
        }
    }, [num])

    console.log("number:" , num);

    useLayoutEffect(() => {
        // Measure box dimensions right after DOM is updated, before paint
        const {width, height} = boxRef.current.getBoundingClientRect();
        setBoxsize({width, height})
    }, []);
    
   
    return (
        <>
            <h1>{num}</h1>
            <button onClick={() =>setNum(0) }>Check</button>
            <br />
            <br />

            <div>
                <div ref={boxRef}
                    style={{
                        width: "200px",
                        height: "100px",
                        backgroundColor: "lightblue",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold"
                      }}
                >Box</div>
            <p>📏 Width: {boxsize.width}px, Height: {boxsize.height}px</p>

            </div>
        </>
    )
}

export default UseLayoutEffect