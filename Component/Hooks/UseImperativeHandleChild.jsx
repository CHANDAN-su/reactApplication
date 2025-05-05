// import React, { useImperativeHandle, forwardRef, useRef } from 'react'

// const UseImperativeHandleChild = forwardRef((props, ref) => {
//     const inputRef = useRef();

//     useImperativeHandle(ref, () => ({
//         focus: () => {
//             inputRef.current.focus()
//         },
//         clear: () => {
//             inputRef.current.value = ""
//         }
//     }))

//     return <input ref={inputRef} type='text' placeholder='Enter text' />
// })

// export default UseImperativeHandleChild

import React, { useState, useImperativeHandle, forwardRef } from "react";

const style = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modal: {
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
        textAlign: "center",
    }
}


const Modal = forwardRef((props, ref) => {

    const [isvisible, setIsvisible]  = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsvisible(true),
        close: () => setIsvisible(false)
    }))

    if(!isvisible) return null

    return (
        <>
            <div style={style.overlay}>
                <div style={style.modal}>
                <h2>Modal Window</h2>
                <p>This modal is controlled from the parent using ref!</p>
                <button onClick={() => setIsvisible(false)}>Close</button>
                </div>
            </div>
        </>
    )
})

export default Modal
