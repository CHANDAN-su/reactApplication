import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, useMatches } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>HomePage</h1>
            <p>This is home page</p>
        </>
    )
}

const AboutPAge =() => {
    return (
        <>
            <h1>AboutPage</h1>
            <p>This is about page</p>
        </>
    )
}

const Layout = () => {
    return (
        <>
            <h1>LayoutPage</h1>
            <p>This is layout page</p>

            <Outlet/>
        </>
    )
}

// Accessing handle Using useMatches
const Breadcrumbs = () => {
    const matches = useMatches();
return (
    <>
        <nav>
            <ul>
                {matches.map((match, index) => (
                     <li key={index}>
                        {/* Accessing `handle` property */}
                        {match.handle?.pageTittle || match.handle?.pageTittle || "Unknow page"}
                     </li>   
                ))}
            </ul>
        </nav>
    </>
)
}

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        handle: {pageTittle: "Main Layout"},
        children: [
            {
                index: true,
                element: <HomePage/>,
                handle: {pageTittle: "Home Page"}
            },
            {
                path: "/about",
                element: <AboutPAge />,
                handle: {pageTittle: "About Page"}
            },
            {
                path: "/handle",
                element: <Breadcrumbs/>
            }
        ]
    },
    
])




function Handle() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default Handle