import React, { useCallback, useState } from 'react'
import '../src/App.css'


const RenderingAListOfItem = () => {

  const fruit = ["Apple", "Banana", "Orange", "Kiwi"];

  return(
    <ul>

              {fruit.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
              
            </ul>
  )

}

const UsingKeysInLists = () => {

  const todo = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a Project' },
    { id: 3, text: 'Deploy the App' }
  ]

  return (
    <ul>
        {todo.map((val) => (
          <ol key={val.id}>{val.text}</ol>
        ))}
      </ul>
  )
}

const SwitchCaseINReact = () => {
  const [status, setStatus] = useState("guest");



  const userShow = () => {
    switch (status) {
      case "guest":
        return <h1>Welcome, Guest</h1>
      case "user":
        return <h1>Welvome, Back</h1>
      case "admin":
        return <h1>Welcome, Admin!</h1>
      default:
        return <h1>Unknown Role</h1>
    }
  }

  return (
    <>
    {userShow()}
      <button onClick={() => setStatus("guest")}>Guest</button>
      <button onClick={() => setStatus("user")}>User</button>
      <button onClick={() => setStatus("admin")}>Admin</button>
    </>
  )
}

const ArrayAndLists = () => {
  const fruit = ["Apple", "Banana", "Orange"];

  return(
    <ul>
        {fruit.map((fr) => (
          <li key={fr}>{fr}</li>
        ))}
      </ul>
  )
}

const Addstyle = () => {
  const divStyle = {
    backgroundColor: "red",
    padding: "30px",
    border: "2px solid black",
    color: "blue",
    marginTop: "5px"
  }

  return (
    <>
    <div style={{ backgroundColor: "red", padding: "10px", border: "1px solid black", color: "blue" }}>Style</div>
      <div style={divStyle}>style 1</div>
      <div className='divstyle'>style 2</div>
    </>
  )
}

const ConditionalRenderingWithIfElse =() => {
  const [isLoggedIN, setIsLoggedIN] = useState(false);

  const handleLogInClick = () => {
    setIsLoggedIN(true);
  }

  const handleLogOutClick = () => {
    setIsLoggedIN(false);
  }

  let button;

  if (isLoggedIN) {
    button = <button className='divstyle' onClick={handleLogOutClick}>Logout</button>
  } else {
    button = <button className='divstyle' onClick={handleLogInClick}>Log in</button>
  }

  return (
    <>
  <h1>{isLoggedIN ? "Welcome back" : "Please log in"}</h1>
  {button}
  </>
  )

}


const Greeting = ({ name }) => {

  
  const [hasMessage, setHasMessage] = useState(false);
  

  

  const isMoring = new Date().getHours < 12;

  

  

  

  return (
    <>
      <h1>Hello: {name}</h1>
      <p>Good: {isMoring ? "Moring" : "Evening"}</p>
      <p>The cureent tine is: {new Date().toString()}</p>

      

      

      {/* <h1>{isLoggedIN? "Welcome Back" : "Please Log in"}</h1>
            {button} */}

      
      {/* <button onClick={() => setIsLoggedIN(!isLoggedIN)}>{isLoggedIN ? "Logout" : "Login"}</button> */}

      <h1>Inbox</h1>
      {hasMessage && <p>You have new message!</p>}
      <button onClick={() => setHasMessage(!hasMessage)}>
        {hasMessage ? "Hide message" : "Show nessage"}
      </button>

      


      < RenderingAListOfItem />
      < UsingKeysInLists /> 
      < SwitchCaseINReact /> 
      < ArrayAndLists /> 
      < Addstyle    />
      < ConditionalRenderingWithIfElse />

    </>
  )
}

function JavascriptXML() {
  return (
    < Greeting name={"chanan thakur"} />
  )
}

export default JavascriptXML