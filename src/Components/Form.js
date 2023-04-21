import react,{useState} from 'react'

export default function Form()
{
    function Upper()
    {
        setText(text.toUpperCase())
    }
    function Change(event)
    {
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter Name');
    return (
        <>
        <div>
        <label name="name" id="name">Enter Your Name : </label>
        <input type="text" name="name"  onChange={Change}/>
        <div>
        <button onClick={Upper} >Change to UpperCase</button>
        </div>
        </div>
        <label name="name" id="name">Name : </label>
        <label name="name" id="name">{text}</label>
        <p>No of Charecters : {text.length}</p>
        <p>No of Words : {text.split(" ").length}</p>
        </>
    )
}