import React from 'react'
import { createBrowserRouter, RouterProvider, useParams, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const GotoUserProfile = () => {
        navigate("/user/123")
    }

    const GototProductDetails = () => {
        navigate("/product/456")
    }

    return (
        <>
            <div>
                <h1>Home Page</h1>
                <button onClick={GotoUserProfile}>Go to UserProfile</button>
                <button onClick={GototProductDetails}>Go to Product</button>
            </div>
        </>
    )
}

const UserProfile = () => {
    const {userId} = useParams();
    return (
        <>
            <h1>User Profile</h1>
            <p>User ID: {userId}</p>
        </>
    )
}

const ProductDetails = () => {

    const {productId} = useParams();

    return (
        <>
            <h1>Product Details</h1>
            <p>Product Id: {productId}</p>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/user/:userId",
        element: <UserProfile/>
    },
    {
        path:"/product/:productId",
        element: <ProductDetails/>
    }
]);


function UseParams() {
  return (
    <>
        < RouterProvider router={router}/>
    </>
  )
}

export default UseParams