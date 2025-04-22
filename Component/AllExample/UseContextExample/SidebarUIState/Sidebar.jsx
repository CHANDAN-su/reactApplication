import React, { useContext } from "react";
import { UIcontext } from "../SidebarUIState/UIContext";

function Sidebar(){

    const {sidebarOpen} = useContext(UIcontext);

    const style = {
        width: "200px",
        height: "100vh",
        background: "#333",
        color: "#fff",
        padding: "20px",
        display: sidebarOpen ? "block" : "none"
      };

    return (
        <div style={style}>Sidebar Menu</div>
    )
}

export default Sidebar