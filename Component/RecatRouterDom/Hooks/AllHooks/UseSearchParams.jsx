import React, {useState} from 'react'
import { createBrowserRouter, RouterProvider, Link, useSearchParams  } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home Page</h1>
            <p>Welcomr to home page</p>
            <nav>
                <Link to="/">Home</Link> | <Link to="search">Search</Link>
            </nav>
        </>
    )
}

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get("query") | "";
    const page = searchParams.get("page") || 1;

    const [searchQuery, setSearchQuery] = useState(query);

    const handleSearch = () => {
        setSearchParams({query: searchQuery, page: "1"});
    }

    const goToNextPage = () => {
        setSearchParams({ query, page: String(Number(page) + 1) });
    }


    return (
        <>
            <h1>Search Page</h1>
            <div>
                <input type="text" value={searchQuery} placeholder='Search....' onChange={(e) => {setSearchQuery(e.target.value)}} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <p>Current query: {query}</p>
            <p>Current page: {page}</p>
            <button onClick={goToNextPage}>Next Page</button>

        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/search",
        element: <Search/>
    }
])

function UseSearchParams() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default UseSearchParams