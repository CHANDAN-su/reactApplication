import React from 'react'
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../NestedRoute/DashboardLayout";
import ProfileLayout from "../NestedRoute/ProfileLayout";
import Home from "../NestedRoute/PageComponents/Home";
import EditProfile from "../NestedRoute/PageComponents/EditProfile";
import ProfileDetails from "../NestedRoute/PageComponents/ProfileDetails";
import Settings from "../NestedRoute/PageComponents/Settings";

function RouteConfig() {
  return (
    <>
        <h1>Main Layout</h1>

        <Routes>

            <Route index element={<Home/>}/>

            <Route path='dashboard/*' element={<DashboardLayout/>} >

                <Route path='profile/*' element={<ProfileLayout/>}>
                    <Route path='details' element={<ProfileDetails/>}/>
                    <Route path='edit' element={<EditProfile/>}/>
                </Route>

                <Route path='settings' element={<Settings/>} />

            </Route>

        </Routes>
    </>
  )
}

export default RouteConfig