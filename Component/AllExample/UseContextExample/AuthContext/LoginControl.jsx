import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

function LoginControl(){
    const {user, login, logout} = useContext(AuthContext);
    const [name, setName] = useState("");

    const handleLogin = () => {
        if(name.trim()) login(name);
    }

    return (
        <div>
            {
            user.isLogged ? 
            (<button onClick={logout}>Logout</button>) :
            (
                <div>
                <input type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ padding: "6px", marginRight: "10px" }}
                />
                <button onClick={handleLogin}>Login</button>
              </div>
            )

            }
        </div>
    )
}

export default LoginControl;