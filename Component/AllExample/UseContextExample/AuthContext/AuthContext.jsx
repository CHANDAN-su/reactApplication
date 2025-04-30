import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProivder = ({children}) => {
    const [user, setUser] = useState({
        name: "",
        isLogged: false
    });

    const login = (name) => {
        setUser({name, isLogged: true});
    }

    const logout = () => {
        setUser({name: "", isLogged: false });
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}