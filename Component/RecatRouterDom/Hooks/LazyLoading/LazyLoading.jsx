import React, { Suspense } from 'react'
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider,  } from "react-router-dom";

const Home = lazy(() => import("../LazyLoading/Home"));
const About  = lazy(() => import("../LazyLoading/About"));
const Contact = lazy(() => import("../LazyLoading/Contact"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<h1>Loading.....</h1>}>
                <Home/>
            </Suspense>
        )
    },
    {
        path: "/about",
        element: (
            <Suspense fallback={<h1>Loading....</h1>}>
                <About/>
            </Suspense>
        )
    },
    {
        path: "/contact",
        element: (
            <Suspense fallback={<div>Loading......</div>}>
                <Contact/>
            </Suspense>
        )
    },
    {
        path: "*",
        lazy: () => import("../LazyLoading/NotFound").then(module => ({ element: <module.default /> })),
    }
])

function LazyLoading() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default LazyLoading