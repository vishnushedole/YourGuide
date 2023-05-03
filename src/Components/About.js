import react ,{Component} from 'react';
import axios from 'axios';
export default class About extends Component{
    constructor()
    {
        super();
        this.state={
            Information : "Hi This is a Smart city Application Helps to Get city data.",
            LoggedIn : false,
            txt : "",
            words:0,
            heading:"Heading of your article",
            content:"It should me maximum of 1000 words."
        };
        // this.getInfo = this.getInfo.bind(this);
    }
    getInfo = ()=>
    {       this.setState({
            Information : "Smart city provides you city information such as Schools Colleges Restaurant Malls etc. visit Home page "
        })
    }
    Change_txt = (event)=>{
        this.setState({
            txt : event.target.value
        })
    }
     Savetxt = ()=>{
        console.log(this.state.txt);
        const Txt = {txt : this.state.txt}
         axios.post('http://localhost:8080/Savetxt',Txt)
        .then(res=>{
            console.log("Sent data")
        }).catch(err=>{
            console.log(err);
        })
    }
    Change_title=(event)=>{
        this.setState({
          heading:event.target.value
        })
    }
    Change_content=(event)=>{
        
        let count=0;
        for(let i=0;i<event.target.value.length;i++)
        {
            if(this.state.content[i]==' ')
            count++;
        }
        if(count<=10)
        {
            this.setState({
                content:event.target.value,
                words:count
              })
        }
           
    
    }
    render(){
        
        if(this.state.LoggedIn)
        {
            return (
                <>
            <h1>About Page</h1>
            <p>Hello Vishnu</p>
            <p>{this.state.Information}</p>
              <button onClick={this.getInfo}>Click  To Know More</button>
            </>
            )
        }
        else
        {
            return (
                <>
            <h1>About Page</h1>
            <p>{this.state.Information}</p>
              <button onClick={this.getInfo}>Click  To Know More</button>
              <button onClick={this.Savetxt}>Save</button>
              <div class="publish_article">
              <p>Share your experiance</p>
              <div id="title">Heading  <input type="text" value={this.state.heading} onChange={this.Change_title}></input></div>
              <div id="content">  <textarea class="editor" value={this.state.content} onChange={this.Change_content}></textarea></div>
              <p>{this.state.words}/1000</p>
              <input class="post" type="submit" value="POST"></input>
              </div>
              
              
            </>
            )
        }
    }
}
