import React from 'react'
import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";

const log = (message, data) => {
    console.log(`[LOG]: ${message}`, data);    
}

const Home = () => <h1>Home Page</h1>;
const ErrorPage = () => <h1>An error occurred!</h1>

const User = () => {
    const userData = useLoaderData();
    log("User Component Rendered", userData);

    return <h1>User: {userData.name}</h1>;

}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        loader: () => {
            log("Home route loader executed");
            return null;
        }
    },
    {
        path: "/user/:id",
        element: <User/>,
        errorElement: <ErrorPage/>,
        loader: async ({params}) => {
            log("User loader executed", params);

            try {

                const response = await fetch(`/api/users${params.id}`);

                if (!response.ok) {
                    throw new Error(`Error fetching user data: ${response.statusText}`);
                }
                
                const data = await response.json();
                log("User data loaded successfully", data);
                return data;

            } catch (error) {
                log("Error in User loader", error);
                throw error; // This will trigger the errorElement
            }

            
        }
    }
]);


function LoggingwithcreateBrowserRouter() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default LoggingwithcreateBrowserRouter