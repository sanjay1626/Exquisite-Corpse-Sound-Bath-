import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import Player from "../Sounds/Tracks/Player"


class Record extends Component {
  render() {
    const { user, users } = this.props;
    console.log("PLayer " + Player)

    return (
      <div>


        <div className="sidenav">
          <label>Exquisite Corpse Sound Bath</label>
          <h2 className="nav-title"> Discover</h2>
          <a href="#">
            <i className="fas fa-fire"></i> Featured
              </a>
          <a href="#">
            <i className="fas fa-music"></i> Music
              </a>
          <Link to="/record" ><i class="fas fa-microphone"></i> Record
              </Link>
          <a href="#">
            <i className="fas fa-search"></i> Search
              </a>
          <br></br>
          <br></br>
          <button className="btn btn-dark">Signout</button>
        </div>


        <div className="Player">
          <Player />
        </div>


      </div>




    )
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedRecord = connect(mapState, actionCreators)(Record);
export { connectedRecord as Record };