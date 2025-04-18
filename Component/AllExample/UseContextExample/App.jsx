import React from "react";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import ThemedComponent from "./ThemeContext/ThemedComponent";

function MainApp() {

    return (
            <ThemeProvider>
                <ThemedComponent />
            </ThemeProvider>
    )
}

export default MainApp;