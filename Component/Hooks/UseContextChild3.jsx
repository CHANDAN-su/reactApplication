import React, { useContext } from 'react'
import {UserContext}  from "./UseContextUse";

function UseContextChild3() {

    const user = useContext(UserContext);

  return (
    <div>
          <p>Name: {user.name}</p>  
          <p>Age: {user.age}</p>
          <p>Gmail: {user.gmail}</p>
    </div>
  )
}

export default UseContextChild3