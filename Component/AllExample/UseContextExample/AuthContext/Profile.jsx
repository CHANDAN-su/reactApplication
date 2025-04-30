import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

function Profile(){
    const {user} = useContext(AuthContext);

    return (
         <div style={{margin: "20px"}}>
            {
                user.isLogged ? (<p>👋 Welcome, <strong>{user.name}</strong>!</p>) :  (<p>🔐 Please log in to continue.</p>)
            }
         </div>   
    )
}

export default Profile