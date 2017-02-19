import React from 'react';

class Guesses extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="guesses-box">
        <h2>Guesses Box</h2>
        <h3>Guesses Remaining: { this.props.guessesRemaining }</h3>
        <h3>Guessed Letters: { this.props.guessedLetters }</h3>
        <h3>Guessed Words: { this.props.guessedWords }</h3>
        <h3>Number of Guesses (Score): { this.props.totalGuesses }</h3>
      </div>
    );
  }
}

export default Guesses;
