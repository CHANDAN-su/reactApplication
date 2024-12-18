import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import  DashboardLayout  from "../RecatRouterDom/DashboardLayout";

function MainLayout() {
  return (
    <>
    <h1>Dashboard page main Layout</h1>
        <div>
            <nav>
                <ul>
                    <li><Link to="dashboard">Dashboard</Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <Routes>
                <Route path="dashboard/*" element={<DashboardLayout/>}/>
            </Routes>
        </div>
    </>
  )
}

export default MainLayout