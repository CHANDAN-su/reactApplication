import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteConfig from "../NestedRoute/RouteConfig";

function MainApp() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<RouteConfig/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MainApp