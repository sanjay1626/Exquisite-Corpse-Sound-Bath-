import "./style.css";
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

import Login from '../Pages/SignIn/SignIn'
import Routes from '../Routes/index'

const Header = ({title,instructions}) => {
    const headingStyle = {
        color: 'Black',
    };
 
    return (
      <div>
          <Jumbotron className = "Jumbotron" id="Jumbo" style={headingStyle}>

      <h1>{title}</h1>
      <p>
      {instructions}
        </p>
<p>
<Link to="/login"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}

        ><button  className = "btn btn-dark" type="button">Let's Get Started!</button></Link>

</p>
</Jumbotron>

      </div>

  

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
