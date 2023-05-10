import React, { Component } from 'react'
import ComponentB from './ComponentB.js';
export class ComponentA extends Component {
    constructor(){
        super();
         console.log("componentA constructor")
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("componentA getDerivedStateFromProps")
    }
    componentDidMount()
    {
        console.log("componentA ComponentDidMount")
    }
    HandleChange = (event)=>{
        console.log("handle change")
    }
  render() {
    console.log("componentA render")
    return (
        <div>
      <div>
       ComponentA
      </div>
      <ComponentB/>
      </div>
    )
  }
}

export default ComponentA
