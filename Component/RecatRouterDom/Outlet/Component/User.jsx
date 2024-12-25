import React from 'react'
import { Link, useParams } from "react-router-dom";

const UserProfile = () => {
    const {id} = useParams();
    return <h1>Profile id:{id}</h1>
}

function User() {
    const {id} = useParams();
  return (
    <>  
        <nav>
            <ul>
                <li>
                    <Link to={`/user/${id}`}>View Profile</Link>
                </li>
            </ul>
        </nav>
        <UserProfile />
    </>
  )
}

export default User