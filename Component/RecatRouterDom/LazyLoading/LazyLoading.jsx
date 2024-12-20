import React, {Suspense, lazy} from 'react'
import {Routes , Route, Link} from "react-router-dom";

const LazyHome = lazy(() => import("../LazyLoading/LazyLoadingComponent/LazyHome"));
const LazyAbout = lazy(() => import("../LazyLoading/LazyLoadingComponent/LazyAbout"));
const LazyContent = lazy(() => import("../LazyLoading/LazyLoadingComponent/LazyContent"));

function LazyLoading() {
  return (
    <>
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/content">Content</Link>
            </li>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<LazyHome/>}/>
                <Route path='/about' element={<LazyAbout/>} />
                <Route path='/content' element={<LazyContent/>}/>
            </Routes>
        </Suspense>
    </> 
  )
}

export default LazyLoading