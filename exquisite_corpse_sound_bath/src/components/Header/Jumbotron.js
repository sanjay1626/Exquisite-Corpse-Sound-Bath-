import "./style.css";
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'



const Header = ({title,instructions}) => {
    const headingStyle = {
        color: 'Black',
    };
 
    const onClick = () =>{
      
      console.log('Click')
      
    };


    return (
<Jumbotron className = "Jumbotron" style={headingStyle}>

  <h1>{title}</h1>
  <p>
    {instructions}
  </p>
  <p>
    <Button onClick ={onClick} variant="secondary">Let's Get Started</Button>
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
