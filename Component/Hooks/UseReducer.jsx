import React, { useReducer, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function reducer(state, action){
    console.log(state, action);        
    switch (action.type) {
        case "increment":
            return {count: state.count + 1};
        case "decrement":
            return {count: state.count -1};
        default:
            return state;
    }
}

const Home = () => {
    const [counter, setCounter] = useState(0);

    // how to useReducer syntax
    // const [state, dispatch] = useReducer(reducer, initrialArg, init?);

    // state:- Represents the current value and set to the initrialArg value during the initial render
    // dispatch:- is a function that update the state value and always triggers are-render, just like uoadte function i useState
    // reducer:- is a function that  house all the logic of how to the state gets updated.
    // initrialArg:- houses the initial value nd can be of aby type

    const [state, dispatch] = useReducer(reducer, {count: 0});


    const hangleIncrement = () => {
        // setCounter(counter + 1);
        dispatch({type: "increment"});
    }

    const handleDecrment = () => {
        // setCounter(counter - 1);
        dispatch({type: "decrement"});
    }

    return (
        <>
            <h1>{state.count}</h1> <br /><br />
            <button onClick={hangleIncrement}>Increment</button> 
            <button onClick={handleDecrment}>Decrement</button>
        </>
    )
}

const About = () => {
    return (
        <>
        <h1>This is about page</h1>
        </>
    )
}

const Contect = () => {
    return (
        <>
        <h1>This is contect page</h1>  
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contect",
        element:<Contect/> 
    }
])


function UseReducer() {
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default UseReducer