import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {SearchForm} from '../SearchForm'
import { userActions } from '../_actions';
class HomePage extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }
//onChange Event
handleOnInputChange(event){
	const query = event.target.value;
            this.setState({ query, loading: true, message: ''  } );
};


    render() {
        const { user, users } = this.props;
        return (
            <div >
                    
                <div className="col-md-12">
                <h1>Hi {user.firstName}!</h1>
                <button className="btn btn-success active">Let's Record</button>
                <button className="btn btn-primary">Let's Mix</button>
                <button className="btn btn-primary">Let's Listen</button><hr></hr>
               
                <div className = "container h-100"> 
                    <div className="d-flex justify-content-center h-100">
                        <div className="searchbar">
                            <input className ="search_input" 
                            type="text" 
                            placeholder="Search.." 
                            id="search-input"
                            value=""
                            onChange={this.handleOnInputChange}></input>
                            <button href='#' className="search_icon"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                List of popular music with image 
          
              </div>
              
              <hr></hr>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
                
                {/* <h3>All registered users:</h3> */}
                {/* {users.loading && <em>Loading users...</em>} */}
                {/* {users.error && <span className="text-danger">ERROR: {users.error}</span>} */}
                {/* {users.items && */}
                    {/* // <ul> */}
                        {/* {users.items.map((user, index) => */}
                            {/* // <li key={user.id}> */}
                                {/* {user.firstName + ' ' + user.lastName} */}
                                {/* { */}
                                    {/* // user.deleting ? <em> - Deleting...</em>
                                    // : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    // : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                // } */}
                            {/* </li> */}
                        {/* // )} */}
                    {/* </ul> */}
                {/* // } */}
               
                
            </div>
         

            </div> //master div
            
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };