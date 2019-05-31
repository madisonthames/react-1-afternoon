import React, {Component} from 'react';

export default class EvenAndOdd extends Component {

    constructor() {
        super();

        this.state = {
            evenArr: [],
            oddArr: [],
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    seperateEvensAndOdds(userInput) {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt (arr[i]));
            } else {
                odds.push(parseInt (arr[i]));
            }
        }

    this.setState({ evenArr: evens, oddArr: odds });
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>"Even and Odds"</h4>
                <input className='inputLine' onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.seperateEvensAndOdds(this.state.userInput)}}>Seperate</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArr)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArr)}</span>
            </div>
        )
        
    }
    
}