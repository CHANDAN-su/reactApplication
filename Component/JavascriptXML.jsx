import React from 'react'
import '../src/App.css'

const Greeting = ({name}) =>{

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

        </>
    )
}

function JavascriptXML() {
  return (
    < Greeting name={"chanan thakur"}/>
  )
}

export default JavascriptXML