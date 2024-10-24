import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement = () => {
        if (this.state.count < 0) {
            this.setState({count: this.state.count - 1});

        }else { 
            this.setState({count: 0});
        }
        
    }

    render() {
    return (
      <>
        <h1>Counter: {this.state.count}</h1><br /><br />
        <button onClick={this.increment}>Add</button>
        <button onClick={this.decrement}>Sub</button>
      </>
    )
  }
}

export default ClassComponent