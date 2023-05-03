import React, { Component } from 'react'
import axios from 'axios';
export class login extends Component {
    constructor()
    {
        super();
        this.state ={
           username:"",
           pass:""
        }
    }
    setUsername = (event)=>{
       this.setState({
        username:event.target.value
       })

    }
    setPass = (event)=>{
        this.setState({
            pass:event.target.value
        })
       
    }
     login = async ()=>{
        const bdy = {
            username:this.state.username,
            pass:this.state.pass
        }
        console.log("hi");
       const data =  await axios.post('http://localhost:8080/Login',bdy)
       console.log(data);
    }
  render() {
    
    return <>
    
    <div className="loginform">
        <div><label> User Name :
        <input type="text" name="username" id="username" onChange={this.setUsername}  />
        </label></div>
        <div>
        <label> Password :
        <input type="password" name="pass" id="pass" onChange={this.setPass}  />
        </label></div>
        <input type="submit" name="subbtn" id="subbtn" value="Login" onClick={this.login}/>
    </div>
    </>
  }
}

export default login;
