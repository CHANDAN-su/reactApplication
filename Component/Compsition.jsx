import React from 'react'


function Card({ children }){
    return (
        <div style={{backgroundColor: "red"}} className='card'>{children}</div>
    )
}

function Compsition() {
  return (
    <>
    <Card>
        <h1>This is a tittle</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, deleniti?</p>
    </Card>
    <br /><br />
    <Card>
        <button>Card</button>
    </Card>
    </>
  )
}

export default Compsition