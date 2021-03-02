import React from 'react';
import Button from 'react-bootstrap/Button';
import './Signup.css';


const Signup= ({firstName,lastName,}) => {
     

    return (
        <form className = "signup-form">
            <div className ='form-control'>
                <label>"First Name"</label>
                <input type ='text' placeholder ="Frist Name" />

            </div>
            <div className ='form-control'>
                <label>"Last Name"</label>
                <input type ='text' placeholder ="Last Name" />

            </div>
            <div className ='form-control'>
                <label>"Password"</label>
                <input type ='password' placeholder ="Password" />

            </div>
            <div className ='form-control'>
                <label>"Re-enter Password"</label>
                <input type ='password' placeholder ="reEnter Password" />

            </div>
            <Button variant="secondary">Submit</Button>
        </form>
    )
}

export default Signup
