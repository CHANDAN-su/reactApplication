import React, {useState} from 'react'
import Presentational from "../Component/Presentational";

function User() {

    const [user, setUser] = useState({name: "chandan", age: 22});

    function Great(){
        alert(`Hello ${user.name}`);
    }

  return (
    <>
        <Presentational name={user.name} age={user.age} onGreat={Great}/>
    </>
  )
}

export default User