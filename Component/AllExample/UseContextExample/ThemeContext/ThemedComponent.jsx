import React,  { useContext } from "react";
import {ThemeContext} from "./ThemeContext";

function ThemeComponent(){

    const {theme, toggleTheme} = useContext(ThemeContext);

        const style = {
            light: {
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "20px",
                textAlign: "center",
            },
            dark:{
                backgroundColor: "#333333",
                color: "#ffffff",
                padding: "20px",
                textAlign: "center",
            }
        }

    return (
        <>
            <div style={style[theme]}>
                <h2>Current Theme: {theme}</h2>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    )
}

export default ThemeComponent;

