import React from "react";
import '../App.css';
export default function Card(props)
{ 

       return (<div className="Fields">
            <img src={props.image} alt="imag" width={280} height={200} />
            <div >
                <a href={props.url}><input type="submit"  name="name"  value="Details" className="btn" /></a>
            </div>
        </div>);
 
}