import React, {Component} from 'react'

function ClickEvent() {
    const heandleClick = () => {
        let date = new Date();
        alert(date);
    }
  return (
    <>
        <button onClick={heandleClick}>Click me</button>
    </>
  )
}


function EventDetails() {

  const heandleEvent = (event) => {
    console.log(`Event Type: ${event.type}`);
    console.log(`Button Click: ${event.target}`);
  }

  return (
    <>
    <br /><br />
    <button onClick={heandleEvent}>Event Details</button>
    </>
  )
}


class Event extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello world"
    }

    // Binding 'this' to the event handler
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    alert(this.state.message)
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>Click button</button>
      </>
    )
  }
}


class EventSecond extends Component {
    
    state = {
       message: "Hello world arroe function"
    }

    heandleClick = () => {
      alert(this.state.message);
    }

  render() {
    return (
      <>
      <button onClick={this.heandleClick}>Click here</button>
      </>
    )
  }
}

function GreetUser(){

  const Greet = (user) => {
    alert(`Hello, ${user}!`);
  }

  return(
    <>
      <button onClick={() => Greet("chandan")}>Hello</button>
    </>
  )
}


function AllEvent(){
  return(
    <>
      <ClickEvent/>
      <EventDetails/>
      <Event/>
      <EventSecond/>
      <GreetUser/>
    </>
  )
}

export default AllEvent