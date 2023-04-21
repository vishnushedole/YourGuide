import './App.css';
import { About } from './Components/About.js';
import Home from './Home.js';
import PropTypes from 'prop-types'
import {
  Route,
  Routes
} from "react-router-dom";
function App(props) {
  return (
     <>
    <Home CityName={props.CityName} description={props.description}/>
    <About/>
    </>
  );
}

App.propTypes = {messageBody:PropTypes.string.isRequired,messg2:PropTypes.string,num:PropTypes.number}
App.defaultProps = {
   messageBody:"Default message",
   messg2:"Default messg",
   num:0
}
export default App;
