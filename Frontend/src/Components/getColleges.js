import React, { Component } from 'react'

export class GetColleges extends Component {
    constructor()
    {
        super();
        this.state = {
            Colleges : [{},{}]
        }
    }
    async componentDidMount()
    {
       
        let data = await fetch('http://localhost:8080/getColleges');
        let parsedData = await data.json();
        this.setState({
            Colleges:parsedData['colleges']
        })
    }
  render() {
    let clg = this.state.Colleges;
    console.log(clg)
    return (
        <div>
        <h2>Colleges </h2>
        <div className="ContentDiv grid">
        {
        clg.map((College,index)=>{
            return <>
            <div className="card">
            <img src={College.ImgUrl} width={300} height={200} ></img>
            <a href={College.Link}><h3>{College.clg_name}</h3></a><br/>
            <ul>
            <li>{College.clg_info}</li><br/>
            </ul>
           
            </div>
            </>
        })
        }
        </div>
    </div>
    )
  }
}

export default GetColleges
