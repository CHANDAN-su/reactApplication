import React from 'react'


function Card({ children }){
    return (
        <div style={{backgroundColor: "red"}} className='card'>{children}</div>
    )
}

function Dialog({header, body}){
    return (
        <div className='dialog'>
            <div className='dialog-header'>{header}</div>
            <div className='dialog-body'>{body}</div>
        </div>
    )
}

const Button = ({label, onClick}) =>{
    return(
        <button onClick={onClick}>{label}</button>
    )
}

function Compsition() {

    const message = () => {
        alert("Hello world");
    }

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

    <Dialog header={<h1>Confirmation</h1>} body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, deleniti?"}/>
    <Dialog header={<h1>Error</h1>} body={<p>An error occurred. Please try agin later</p>}/>

    <Button label={"Click me"} onClick={message} />

    </>

    
  )
}

export default Compsition