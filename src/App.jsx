import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent  from "../Component/FunctionComponent";
import ClassComponent from "../Component/ClassComponent";
import User from "../Component/User";
import ContainerComponent from "../Component/ContainerComponent";
import Props from "../Component/Props";

function App() {
  
  return (
    <>
      {/* <FunctionComponent />
      <ClassComponent />
      <User /> */}
      <ContainerComponent />
      <Props />
    </>
  )
}

export default App
