import React from 'react'
import axios from  'axios'
class SeacrhForm extends React.Component {
  constructor( props ) {
    super( props );
  
    this.state = {
      query: '',
      results:{},
      loading: false,
      message: '',
    };
    this.cancel = '';
  }
  render(){
    return(
         
    )
  }
   fetchSearchResults (updatedPageNo = '', query ){

    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
  
    // By default the limit of results is 20
    const searchUrl = `https://shazam.p.rapidapi.com/search/?key=c84a11a37dmsh97101e52facfc63p160003jsna7983511d133=${query}${pageNumber}`;
  
    if (this.cancel) {
      // Cancel the previous request before making a new request
      this.cancel.cancel();
    }
    // Create a new CancelToken
    this.cancel = axios.CancelToken.source();
  
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.hits.length
          ? 'There are no more search results. Please try a new search.'
          : '';
  
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
            message: 'Failed to fetch results.Please check network',
          });
        }
      });
  };
 
};

export default SearchForm
