import React, { Component } from 'react'

export class ComponentB extends Component {
    constructor(){
        super();
        console.log("ComponentB constructor")
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("ComponentB getDerivedStateProps")
    }
    componentDidMount()
    {
        console.log("ComponentB componentDidMount")
    }
  render() {
    console.log("ComponentB render")
    return (
      <div>
        ComponentB
      </div>
    )
  }

}

export default ComponentB
