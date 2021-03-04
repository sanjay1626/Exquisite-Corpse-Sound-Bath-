import React, { useState } from 'react'
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

// import { Link, animateScroll as scroll } from "react-scroll";
const Main=() => {
    
const Home =()=> <HomePage/>
const SignIn =()=> <Login/>
const CDashboard=()=>Dashboard
    return (
     
      <div className="main">
        <Jumbotron className="Jumbotron">
          <h1>Exquisite Corpse Sound Bath</h1>
          <p>Record your sound & mix your music or listen to your favorite music</p>

        
      <BrowserRouter>

   
   
    <Link to="/login"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}

        ><button  className = "btn btn-dark" type="button">Let's Get Started!</button></Link>
      
      <Switch>
     
        <Route path ="/home" component={Home}/>
        <Route path ="/login" component={SignIn}/>
      </Switch>
    
  </BrowserRouter>
  </Jumbotron>
  <Container/>
      
            
      </div>
    );
}

export default Main
