import React from 'react'

// function UseCallbackchildren(props) {
//     console.log("Child omponment go re-render again");
//   return (
//     <>
//         <div>
//             <button>{props.buttonName}</button>
//         </div>
//     </>
//   )
// }

const UseCallbackchildren = React.memo(
    (props) => {
        console.log("Child omponment go re-render again");
        return (
            <>
                <div>
                    <button onClick={props.hendleClick}>{props.buttonName}</button>
                </div>
            </>
        )
    }
);


export default UseCallbackchildren