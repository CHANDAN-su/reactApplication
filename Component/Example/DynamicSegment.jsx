import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const Userprofile = () => {
    const {id} = useParams();
    return <h2>User Profile for ID: {id}</h2>
}

const user = [
    {id: 1, name:"Chandan Thakur"},
    {id: 2, name: "Ravi thakur"},
    {id: 3, name: "Kavi thakur"}
]

const UserList = () => {
    return (
        <>
        <div>
        <h1>Use Lists</h1>
        <ul>
            {user.map((user) => (
                <li key={user.id}>
                    <Link to={`user/${user.id}`}>View Profile of {user.name}</Link>
                </li>
            ))}
        </ul>
    </div>
        </>
    )
}


function DynamicSegment() {
  return (
    <>
        <Routes>
            <Route path="/" element={<UserList/>}/>
            <Route path='/user/:id' element={<Userprofile/>} />
        </Routes>
    </>
  )
}

export default DynamicSegment