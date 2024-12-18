import React from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom";

const SearcgRoute = () => {
    const location  = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery  = queryParams.get('search');

    return <h3>Search Results for: {searchQuery}</h3>
}

function DynamicRouteWithQueryParameter() {
  return (
    <>
        
            <nav>
                <li>
                    <Link to="search?search=React">Search React</Link>
                </li>
                <li>
                    <Link to="search?search=JavaScript">Search JavaScript</Link>
                </li>
            </nav>

            <Routes>
                <Route path="/" element={<h1>Home Page</h1>}/>
                <Route path="/search" element={<SearcgRoute/>}/>
            </Routes>
    </>
  )
}

export default DynamicRouteWithQueryParameter