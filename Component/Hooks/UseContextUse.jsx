import React, { createContext, useState } from 'react'
import UseContextChild1 from "./UseContextChild1";

// step1:- create cusecontext
// step2: :- provider
// step3:- pass data
// step4:- jisko data use karna h o data use kar sakta h


// step1:- 
const UserContext = createContext();

function UseContextUse() {

  const [user, setUser] = useState({name: "chandan thakur", age: "25", gmail: "chandan7073251686@gmail.com"})

  return (
    <div>
      {/* step2:- */}
      <UserContext.Provider value={user}>
        <UseContextChild1/>
      </UserContext.Provider>
        
    </div>
  )
}

export default UseContextUse
export {UserContext}