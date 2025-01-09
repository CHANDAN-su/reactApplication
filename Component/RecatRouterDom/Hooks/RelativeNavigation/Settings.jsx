import React from 'react'
import { useNavigate } from "react-router-dom";

function Settings() {
    const navigate = useNavigate();
  return (
    <>
        <div>
            <h1>Settings Page</h1>
            <p>This is settings Page</p>
            <button onClick={() => navigate("../")}>Back to Dashboard</button>
        </div>
    </>
  )
}

export default Settings