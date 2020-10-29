import React from "react";
import MovieList from "./MovieList"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {title: 'The Matrix'},
        {title: 'Hackers'},
        {title: 'Johnny Mnemonic'},
        {title: 'eXistenZ'},
        {title: 'RoboCop'}
        ]
    };
  }

  render() {
    return (
      <div>
        <h1>Movie list</h1>
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;