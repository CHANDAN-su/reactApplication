import React from 'react'
import { useParams } from "react-router-dom";

function User() {
  const {id} = useParams();
  return (
    <>
        <div>This is User page and User Id: {id}</div>
    </>
  )
}

export default User