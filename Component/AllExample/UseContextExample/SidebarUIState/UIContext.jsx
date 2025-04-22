import React, { createContext, useState } from "react";

export const UIcontext = createContext();

export const UIProvider = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <UIcontext.Provider value={{sidebarOpen, setSidebarOpen}}>
            {children}
        </UIcontext.Provider>

    )
}