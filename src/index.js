import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GetSchool from './Components/getSchools.js'
import GetColleges from './Components/getColleges.js'
import GetNews from './Components/getNews.js'
import reportWebVitals from './reportWebVitals.js';
import About  from './Components/About.js';
import Navbar from './Components/Navbar.js';
import Home from './Home.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Components/login.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <Navbar message="Hi this is props variable"/> 
    <Router>
       <Routes>
       <Route path='/' element={
         <React.Fragment>
          <Home CityName="Banglore" description="Nice City!"/>
          <GetNews name="Smartcity"/>
         </React.Fragment>} />
         <Route path='/About' element={<About />} />
         <Route path='/login' element={<Login />} />
         <Route path='/Home/Schools' element={<GetSchool />} />
         <Route path='/Home/Colleges' element={<GetColleges />} />
       </Routes>
    </Router>
    </>
);


reportWebVitals();
