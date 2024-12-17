import React from 'react'
import { Link, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <>
        <div>
            <h3>Profile Layout</h3>

            <ul>
                <li>
                    <Link to="details">Details</Link>
                </li>
                <li>
                    <Link to="edit">Edit</Link>
                </li>
            </ul>
        </div>
        <hr />
        <Outlet/>
    </>
  )
}

export default ProfileLayout