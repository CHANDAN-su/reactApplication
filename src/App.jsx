import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Component/RecatRouterDom/Home";
import About from "../Component/RecatRouterDom/About";
import NotFound from "../Component/RecatRouterDom/NotFound";
import Dashboard from "../Component/RecatRouterDom/Dashboard";
import Profile from "../Component/RecatRouterDom/Profile";
import Settings from "../Component/RecatRouterDom/Settings";
import Navigation from "../Component/RecatRouterDom/Navigation";
import User1 from "../Component/RecatRouterDom/User";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from "../Component/FunctionComponent";
import ClassComponent from "../Component/ClassComponent";
import User from "../Component/User";
import ContainerComponent from "../Component/ContainerComponent";
import Props from "../Component/Props";
import HierarchicalStructure from "../Component/HierarchicalStructure";
import Reusability from "../Component/Reusability";
import SeparationofConcerns from "../Component/SeparationofConcerns";
import JavascriptXML from "../Component/JavascriptXML";
import Compsition from "../Component/Compsition";
import AllEvent from "../Component/Event";
import HighOrderComponents from "../Component/HighOrderComponents";

function App() {

  return (
    <>
      {/* <FunctionComponent />
      <ClassComponent />
      <User /> */}
      {/* <ContainerComponent />
      <Props /> */}
      {/* < HierarchicalStructure /> */}
      {/* < Reusability /> */}
      {/* <SeparationofConcerns /> */}
      {/* < JavascriptXML /> */}
      {/* <Compsition/> */}
      {/* < AllEvent /> */}
      {/* < HighOrderComponents /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/dashboard" element={< Dashboard />} >
            <Route path='profile' element={<Profile/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>
          <Route path="*" element={< NotFound />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='profile' element={<Profile/>}/> 
            <Route path='settings' element={<Settings/>}/> 
            <Route /> 
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/user/:id' element={< User1 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
