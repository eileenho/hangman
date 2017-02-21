import React from 'react';

class Guesses extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="guesses-box">
        <div className="top-row">
          <div>Level: { this.props.level }</div>
          <div>Guesses Left: { this.props.guessesRemaining }</div>
          <div>Total Guesses: { this.props.totalGuesses }</div>
        </div>
        <div className="bottom-row">
          <div>Guessed Letters: { this.props.guessedLetters }</div>
          <div>Guessed Words: { this.props.guessedWords }</div>
        </div>
      </div>
    );
  }
}

export default Guesses;
