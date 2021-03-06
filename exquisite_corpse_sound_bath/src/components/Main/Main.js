import React, { useState, Component } from 'react'
import HomePage from '../HomePage/HomePage'
import Dashboard from '../Dashboard/Dashboard'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Pages/SignIn/SignIn'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Wrapper from '../Wrapper/index'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Routes from '../Routes/index'
import Container from "../Container/Container"
import axios from "axios";
// import { Link, animateScroll as scroll } from "react-scroll";
const Main=() => {
    
const Home =()=> <HomePage/>
const SignIn =()=> <Login/>
const CDashboard=()=> <Dashboard/>

const disappear = () => {
  document.getElementById("button").style.display = "none";
};

const[token,setToken]= useState();
if(!token){
  return<Login setToken={setToken}/>
}
return (
  <div className="wrapper">
    
    <BrowserRouter>
      
      <Jumbotron className="Jumbotron" id="jumber">
        <h1>Exquisite Corpse Sound Bath</h1>
        <p>
          "Record your sound & mix your music or listen to your favorite music"
        </p>
        <Link
          to="/dashboard"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button
            onClick={disappear}
            id="button"
            className="btn btn-dark"
            type="button"
          >
            Let's Get Started!
          </button>
        </Link>
      </Jumbotron>
      <Switch>
       
        <Route id="login" path="/login" component={SignIn} />
        <Route id="dashboard" path="/dashboard" component={CDashboard} />
      </Switch>
    </BrowserRouter>
  </div>
);
}

export default Main
