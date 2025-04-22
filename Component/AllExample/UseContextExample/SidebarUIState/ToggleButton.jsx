import React, { useContext } from "react";
import { UIcontext } from "../SidebarUIState/UIContext";


function ToggleButton(){

    const { sidebarOpen, setSidebarOpen } = useContext(UIcontext);


    return (
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? "Hide" : "Show"}</button>
    )
}


export default ToggleButton;