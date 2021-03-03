import "./style.css";
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Main from '../Main/Main'
import Login from '../Pages/SignIn/SignIn'
const Header = ({title,instructions}) => {
    const headingStyle = {
        color: 'Black',
    };
 


    return (
<Jumbotron className = "Jumbotron" style={headingStyle}>

  <h1>{title}</h1>
  <p>
    {instructions}
  </p>
  <p>
  <Button><Link to="/login">Let's Get Started!</Link></Button>

   
   
  </p>
</Jumbotron>
  

    )
}
Header.defaultProps = {
    title: 'Exquisite Corpse Sound Bath ',
    instructions: '"Record your sound & mix your music or listen to your favorite music"'
  }
Header.prototype = {
    title: PropTypes.string.isRequired
  }
export default Header
