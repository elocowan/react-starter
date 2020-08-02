import React from 'react';
import MovieList from "./MovieList";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/movies")
    .then((response) => {
      this.setState({
        movies: response.data
      })
    })
    .catch((err) => {console.log("axios error: ", err)})
  }

  render(){
    return(
    <div>
      <div className="header">
        <h2>Movie List!</h2>
        <MovieList movies={this.state.movies}/>
      </div>
    </div>
  )}
}

export default App;
