import React from 'react'
import { useNavigate } from "react-router-dom";

function NavigationExample() {
    const navigate = useNavigate() ;

    const goBack = () => {
        navigate(-1);
    }
    
    const goForward  = () => {
        navigate(1);
    }
  return (
    <>
        <h1>Navigation Example</h1>
        <button onClick={goBack}>Go to Back</button>
        <button onClick={goForward}>Go to Forward</button>
    </>
  )
}

export default NavigationExample