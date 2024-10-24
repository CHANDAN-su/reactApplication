import React, { Component } from 'react';
import Presentational from "../Component/Presentational";



class ContainerComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user: null,
      }
    }

    componentDidMount = () => {
        setTimeout(() => {
            const fethUser = {
                name: "chandan kumar",
                age: 22
            }
            this.setState({user: fethUser});
        }, 5000);
    }

    Great = () => {
        alert(`Hello ${this.state.user.name}`);
    }

  render() {

    const {user} = this.state;

    if(!user){
        return <div>Loding...</div>
    }

    return (
        <Presentational name={user.name} age={user.age} onGreat={this.Great} />
    )
  }
}

export default ContainerComponent