import React from 'react'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Login from '../Pages/SignIn/SignIn';
import Dashboard from '../Dashboard/Dashboard'
import HomePage from '../HomePage/HomePage'

const Home =()=> <HomePage/>
const SignIn =()=><Login/>
const CDashboard=()=><Dashboard/>

const Routes=() => (
  <BrowserRouter>
    <div>
      <Link to ="/">Home</Link>{' '}
      <Link to={{pathname: '/login'}}>Login</Link>{' '}
      <Link t0 ="/dashboard">Dashboard</Link>
      
      <Switch>
        <Route path ="/" component={Home}/>
        <Route path ="/login" component={SignIn}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default Routes