import React from 'react'

import Dashboard from '../Dashboard/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Pages/SignIn/SignIn'

const Main=() => {
    return (
        <div className ="wrapper">
  
       
        <BrowserRouter>
        <Switch>
            
            <Route path = '/Dashboard'>
                <Dashboard/>
            </Route>

            <Route path = '/login'>
                <Login/>
            </Route>
               
        </Switch>
        </BrowserRouter>

        </div>
    
    );
}

export default Main
