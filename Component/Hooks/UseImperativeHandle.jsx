// import React, { useRef } from 'react'
// import UseImperativeHandleChild from "../Hooks/UseImperativeHandleChild";

// function UseImperativeHandle() {

//     const inputRef = useRef(null);
//   return (
//     <>
//         <div style={{padding: "10px"}}>
//         < UseImperativeHandleChild ref={inputRef}/>
//         <br />
//         <br />
//         <button onClick={() => inputRef.current.focus()}>Focus Input</button>
//         <button onClick={() => inputRef.current.clear()}>Clear Input</button>
//         </div>
//     </>
//   )
// }

// export default UseImperativeHandle

import React, { useRef } from 'react'
import Modal from "../Hooks/UseImperativeHandleChild";

function UseImperativeHandle() {

  const mdelRef = useRef();

  return (
    <>
      <div style={{padding: "20px"}}>
      <h1>Ref Controlled Modal</h1>
      <button onClick={() => mdelRef.current.open()}>Open Model</button>
      <button onClick={() => mdelRef.current.close()}>Close Model</button>
      < Modal ref={mdelRef}/>
      </div>
    </>
  )
}

export default UseImperativeHandle