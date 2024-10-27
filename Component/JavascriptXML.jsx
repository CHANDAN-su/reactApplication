import React, {useState} from 'react'
import '../src/App.css'

const Greeting = ({name}) =>{

  const [isLoggedIN, setIsLoggedIN] = useState(false);

    const handleLogInClick = () => {
      setIsLoggedIN(true);
    }

    const handleLogOutClick = () => {
      setIsLoggedIN(false);
    }

    let button;

    if(isLoggedIN){
      button = <button className='divstyle' onClick={handleLogOutClick}>Logout</button>
    }else{
      button = <button className='divstyle' onClick={handleLogInClick}>Log in</button>
    }

    const isMoring = new Date().getHours < 12;

    const divStyle = {
      backgroundColor: "red",
      padding: "30px",
      border: "2px solid black",
      color: "blue",
      marginTop: "5px"
    }

    const fruit = ["Apple", "Banana", "Orange"];

    return(
        <>
            <h1>Hello: {name}</h1>
            <p>Good: {isMoring ? "Moring" : "Evening"}</p>
            <p>The cureent tine is: {new Date().toString()}</p>

          <div style={{backgroundColor: "red", padding: "10px", border: "1px solid black", color: "blue"}}>Style</div>
          <div style={divStyle}>style 1</div>
          <div className='divstyle'>style 2</div>

          <ul>
            {fruit.map((fr) => (
              <li key={fr}>{fr}</li>
            ))}
          </ul>

            {/* <h1>{isLoggedIN? "Welcome Back" : "Please Log in"}</h1>
            {button} */}

            <h1>{isLoggedIN ? "Welcome back" : "Please log in"}</h1>
            <button onClick={() => setIsLoggedIN(!isLoggedIN)}>{isLoggedIN ? "Logout" : "Login"}</button>

        </>
    )
}

function JavascriptXML() {
  return (
    < Greeting name={"chanan thakur"}/>
  )
}

export default JavascriptXML