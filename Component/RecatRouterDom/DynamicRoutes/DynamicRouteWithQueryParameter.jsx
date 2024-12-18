import React from 'react'
import { Routes, Route, Link, useLocation } from "react-router-dom";

const SearcgRoute = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const searchQuery = queryParams.get('search');
    const query = queryParams.get("query");
    const category = queryParams.get("category");
    const page = queryParams.get("pages");

    return (
        <>
            <h3>Search Results for: {searchQuery}</h3>

            <div>
                <h3>Product Search</h3>
                <p>Searching for: <strong>{query}</strong></p>
                <p>Category: <strong>{category}</strong></p>
                <p>Page: <strong>{page}</strong></p>
                {/* You can add logic to fetch and display products based on these params */}
            </div>
        </>
    )
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
                <li>
                    <Link to="search?query=React&category=electornics&pages=1">Rectelectronics1</Link>
                </li>
                <li>
                    <Link to="search?query=Javascript&category=books&pages=2">JAvascriptBooks2</Link>
                </li>
            </nav>

            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/search" element={<SearcgRoute />} />
            </Routes>
        </>
    )
}

export default DynamicRouteWithQueryParameter