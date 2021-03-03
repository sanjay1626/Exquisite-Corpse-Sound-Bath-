import React, { useState } from 'react'
import HomePage from '../HomePage/HomePage'
import Dashboard from '../Dashboard/Dashboard'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Login from '../Pages/SignIn/SignIn'
import Button from 'react-bootstrap/Button'
const Main=() => {
      
    return (
      <div className="wrapper">
        <BrowserRouter>
          

          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>

      </div>
    );
}

export default Main
