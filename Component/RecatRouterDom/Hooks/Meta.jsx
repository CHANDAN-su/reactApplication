import { use } from 'react';
import React,  { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useMatches, Outlet } from "react-router-dom";


const HomePage = () => {
    return (<>
        <h1>Home Page</h1>
        <p>This is home page</p>
    </>
    )
}


const AboutPage = () => {
    return (
        <>
            <h1>About page</h1>
            <p>This is about page</p>
        </>
    )
}


const Layout = () => {
    return (
        <>
            <h1>Layout page</h1>
            <p>This is layout page</p>

            <Outlet/>
        </>
    )
}

// Accessing meta Using useMatches
const MetaUpdater = () => {

    const mathes = useMatches();

    useEffect(() => {
        const currentData = mathes.find((match) => match.meta?.tittle)

        if (currentData) {
            document.title = currentData.meta.title;
        }
    },[mathes])


    return null;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        meta: {tittle: "Main Layout", description: "This is the main layout"},
        children: [
            {
                index: true,
                element: <HomePage/>,
                meta: {tittle: "Home Page", description: "Welcome to home page"}
            },
            {
                path: "about",
                element: <AboutPage/>,
                meta: {tittle: "About Page", description: "welcome to about page"}
            }
        ]
    }
])

function Meta() {
  return (
    <>
        <MetaUpdater/>
        <RouterProvider router={router} />
    </>
  )
}

export default Meta