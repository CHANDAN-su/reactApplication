import React from 'react'
import { Routes, Route, Link, Outlet,  useParams } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <h1>DashBoard</h1>
            <div>
                <ul>
                <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="user/1">User fisrt</Link>
                    </li>
                    <li>
                        <Link to="user/2">User Second</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}

const UserProfile = () => {
    const {id} = useParams();
    return <h3>User ID: {id}</h3>
}

function DynamicRouteWithNestedRoute() {
  return (
    <>
        <Routes>
            <Route path='/' element={<h1>This is Home Page</h1>}/>
            <Route path='/dashboard' element={<Dashboard/>}>
                <Route path='user/:id' element={<UserProfile/>} />
            </Route>
        </Routes>
    </>
  )
}

export default DynamicRouteWithNestedRoute