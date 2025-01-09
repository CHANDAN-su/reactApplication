import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";

const Home = () => <h1>This is Home Page</h1>;

const Dashbboard = () => {
    return (
        <>
            <h1>This is dasjboard page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Go to Profile</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

const Profile = () => <h1>This is profile page</h1>;

const FetchData = async () =>  {
    console.log("Fetching data for Profile...");;
    return {
        name: "Chandan Thakur",
        age: 20
    }
}

const router  =  createBrowserRouter([
{
    path: "/",
    element: <Home/>
},
{
    path: "/dashboard",
    element: <Dashbboard/>,
    children: [
        {
            path: "profile",
            element: <Profile/>,
            loader: FetchData,
            shouldRevalidate: ({currentUrl, nextUrl, defaultShouldRevalidate  }) => {
                console.log("Current Url:", currentUrl.pathname);
                console.log("Next Url:", nextUrl.pathname);

                if (currentUrl.pathname.startsWith("/dashboard") && nextUrl.pathname.startsWith("/dashboard")) {
                    console.log("Skipping revalidation.");
                    return false;
                }   
            }
        }
    ]
}
])

function ShouldRevalidate() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default ShouldRevalidate