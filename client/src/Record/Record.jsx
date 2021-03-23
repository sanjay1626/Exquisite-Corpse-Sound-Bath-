import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import Player from '../Sounds/Tracks/Player';
import {ReactMic}  from 'react-mic'
import Visuals from '../Visuals/Visuals'

class Record extends Component  {
    constructor(props){
        super(props);
            this.state = {
              record: false,
              sound: null
            }
            this.startRecording = this.startRecording.bind(this)
            this.stopRecording = this.stopRecording.bind(this)
    }
    startRecording()  {
        this.setState({ record: true });
      }

      stopRecording() {
        this.setState({ record: false });
      }
    
      onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
      }
    
      onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
      }
    

    render (){
        const { user, users } = this.props;
       
        return(
            <div id="record">


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
        <Link to ="/logout"><button className="btn btn-dark">Back</button></Link>  
        </div>


        <div className="Player">
            <Player />
            <div className="Visuals">
          <Visuals />
        </div>

        <ReactMic record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#555" />
        
        </div>
        <button className="btn btn-dark" onClick={this.startRecording} type="button">Start</button>
        <button className="btn btn-dark" onClick={this.stopRecording} type="button">Stop</button>

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
export { connectedRecord as Record};