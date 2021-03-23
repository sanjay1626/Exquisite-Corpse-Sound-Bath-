import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../_actions";

import axios from "axios";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
    this.cancel = "";
  }
  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }
  //function to fetch
  fetchSearchResults(updatedPageNo = "", query) {
    const pageNumber = updatedPageNo ? `&page=${pageNumber}` : "";
    const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.hits.length
          ? "There are no more search results. Please try a new search."
          : "";
        this.setState({
          results: res.data.hits,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fecth results. Please check network",
          });
        }
      });
  }

  //onChange Event
  handleOnInputChange(event) {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchSearchResults(1, query);
    });
  }

  renderSearchResults() {
    const { results } = this.state;

    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map((result) => {
            return (
              <a
                key={result.id}
                href={result.previewURL}
                className="result-items"
              >
                <h6 className="image-username">{result.username}</h6>
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={result.previewURL}
                    alt={result.username}
                  />
                </div>
              </a>
            );
          })}
        </div>
      );
    }
  }
  render() {
    const { user, users } = this.props;
    const { query } = this.state;
    console.warn(this.state);
    return (
      <div>
        <div className="sidenav">
          <label>Exquisite Corpse Sound Bath</label>
          <h2 className="nav-title"> Discover</h2>
          <a href="#">
            <i class="fas fa-fire"></i> Featured
          </a>
          <a href="#">
            <i class="fas fa-music"></i> Music
          </a>
           <Link to="/record" ><i class="fas fa-microphone"></i> Record
          </Link> 
          <a href="#">
            <i class="fas fa-search"></i> Search
          </a>
          <br></br>
          <br></br>
          <Link to="/login"><button className="btn btn-dark">Signout</button></Link> 
        </div>
        
    
        <div className="col-md-16">
          {/* <h1>Hi {user.firstName}!</h1> */}
          <div className="container">
            
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="item active">
              <img src="https://www.cifras.com.br/arquivos/artistas/l/led_zeppelin_02_big.jpg" /> 
              <div class="carousel-caption">
                <h4><a href="#">LedZeppelin</a></h4>
                <p>Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, bassist/keyboardist John Paul Jones, and drummer John Bonham.</p>
            </div>
            </div>{/* End Item */}
            <div className="item">
              <img src="https://jazzdesk.files.wordpress.com/2019/11/ron_carter_danny_simmons_brown_beatnik_tomes.jpg" />
              <div class="carousel-caption">
                <h4><a href="#">Ron Carter & Danny Simmons</a></h4>
                <p>The Brown Beatnik Tomes – Live at BRIC House is a unique and powerful collaboration between poet/artist Danny Simmons and legendary jazz bassist Ron Carter. </p>
            </div>
            </div>{/* End Item */}
            <div className="item">
              <img src="https://floridatheatre.showare.com/uplimage/TicketBanner-CALZeppelinII.JPG" />
              
            </div>{/* End Item */}
            <div className="item">
              <img src="http://hardrockhaven.net/online/wp-content/uploads/2020/10/Wildness.jpg" />
              
            </div>{/* End Item */}
            <div className="item">
              <img src="https://www.cifras.com.br/arquivos/artistas/b/black_sabbath_2013_02_big.jpg" />
              
            </div>{/* End Item */}
            
          </div>{/* End Carousel Inner */}
         
          {/* Controls */}
          <div className="carousel-controls">
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" />
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" />
            </a>
          </div>
            
        </div>{/* End Carousel */}
          
      </div>
    
          
          

          <hr></hr>

          <div className="container h-100">
            <label>Searh for Top Music 2021</label>
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                {/* <label className ="seacrch-label" htmlFor="search-input"></label> */}
                <input
                  className="search_input"
                  type="text"
                  placeholder="Search.."
                  value={query}
                  id="search-input"
                  name="query"
                  onChange={this.handleOnInputChange}
                ></input>

                {/*  */}

                <a href="#" className="search_icon">
                  <i className="fa fa-search"></i>
                </a>
              </div>
            </div>
            List of popular music with image
            {this.renderSearchResults()}
          </div>

          <hr></hr>


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
        <footer className="footer">
          <ul>
            <li>
              <i className="fa fa-facebook fa-2x"></i>
            </li>
            <li>
              <i className="fa fa-twitter fa-2x"></i>
            </li>
            <li>
              <i className="fa fa-linkedin fa-2x"></i>
            </li>
            <li>
              <i className="fa fa-instagram fa-2x"></i>
            </li>
          </ul>
        </footer>
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
  deleteUser: userActions.delete,
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
