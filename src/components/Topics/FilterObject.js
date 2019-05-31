import React, {Component} from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            characters: [
                {
                   name: 'Luke Skywalker',
                   gender: 'male',
                   withTheForce: 'yes'
                },
                {
                   name: 'Obiwan Kinobi',
                   occupation: 'Jedi Knight',
                   withTheForce: 'yes'
                },
                {
                   name: 'Han Solo',
                   sidekick: 'Chewbacca',
                   talent: 'flying'
                }
            ],

            userInput: '',
            filteredCharacters: []
        }
    }

    handleChange(value) {
        this.setState({userInput: value}) 
    }

    filterCharacterObjects(property) {
        let characters = this.state.characters;
        let filteredCharacters = [];
    
        for ( let i = 0; i < characters.length; i++ ) {
          if ( characters[i].hasOwnProperty(property) ) {
            filteredCharacters.push(characters[i]);
          }
        }

        this.setState({ filteredCharacters: filteredCharacters });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original Characters: {JSON.stringify(this.state.characters)}</span>
            <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
            <button className="confirmationButton" onClick={() => {this.filterCharacterObjects(this.state.userInput)}}>Filter</button>
            <span className="resultsBox filterObjectRB">Filtered Characters: {JSON.stringify(this.state.filteredCharacters)}</span>
            </div>
        )
    }
}