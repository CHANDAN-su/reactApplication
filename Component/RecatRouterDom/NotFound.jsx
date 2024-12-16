import React from 'react'
import { useLocation } from "react-router-dom";

function NotFound () {

  const location = useLocation();

  return (
    <>
      <div>404 Page NotFound </div>
      <p>The page <code>{location.pathname}</code> doesn't exit.</p>
    </>
  )
}

export default NotFound 