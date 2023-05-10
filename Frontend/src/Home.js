import './App.css';
import Card from './Components/Card.js'
import PropTypes from 'prop-types'
import {Routes,Route} from 'react-router-dom';

function Home(props) {
  
  const images = ["https://as2.ftcdn.net/v2/jpg/05/36/94/97/1000_F_536949759_AYrLbZdR0KU8dkyJawKn4MwfuVlQ6fBO.jpg","https://t3.ftcdn.net/jpg/00/65/25/04/360_F_65250427_GSbg61xpzPB8ahKAuYcjKHIT6B3xiHDp.jpg"]
  // console.log("hi");
  return (
    <>
    <h2 id="h1">{props.CityName}</h2>
    <div className='flex'>
    <Card image={images[0]} url="/Home/Schools"/>
    <Card image={images[1]} url="/Home/Colleges"/>
    
    </div>
    </>
  );
}

Home.propTypes = {messageBody:PropTypes.string.isRequired,messg2:PropTypes.string,num:PropTypes.number}
Home.defaultProps = {
   messageBody:"Default message",
   messg2:"Default messg",
   num:0
}
export default Home;
