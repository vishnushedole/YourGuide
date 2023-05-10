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
        <p> User Name </p>
        <input type="text" name="username" placeholder='Email' onChange={this.setUsername} />
        <p> Password </p>
        <input type="password" name="pass"  placeholder='password' onChange={this.setPass} />
        <input type="submit" name="subbtn" id="login" value="Login" onClick={this.login}/>
    </div>
    </>
  }
}

export default login;
