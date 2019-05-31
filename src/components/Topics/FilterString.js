import React, { Component } from 'react';

export default class FilterString extends Component {

  constructor() {
    super();

    this.state = {
      movies: ['Harry Potter', 'Star Wars', 'The Lord of the Rings', 'The Hobbit'],
      userInput: '',
      filteredMovies: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterMovies(userInput) {
    let movies = this.state.movies;
    let filteredMovies = [];

    for ( let i = 0; i < movies.length; i++ ) {
      if ( movies[i].includes(userInput) ) {
        filteredMovies.push(movies[i]);
      }
    }

    this.setState({ filteredMovies: filteredMovies });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Movies: { JSON.stringify(this.state.movies, null) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterMovies(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Movies: { JSON.stringify(this.state.filteredMovies, null) } </span>
      </div>
    )
  }
}