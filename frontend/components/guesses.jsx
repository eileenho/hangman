import React from 'react';

class Guesses extends React.Component {
  constructor(props) {
    super(props);

    this.showGuessedLetters = this.showGuessedLetters.bind(this);
    this.showGuessedWords = this.showGuessedWords.bind(this);
  }

  showGuessedLetters() {
    let i = 0;
    return (
      this.props.guessedLetters.map(letter => <li key={i++}>{ letter.toUpperCase() }</li>)
    );
  }

  showGuessedWords() {
    let i = 0;
    return (
      this.props.guessedWords.map(word => <li key={i++}>{ word }</li>)
    );
  }

  render() {
    return (
      <div className="guesses-box">
        <div className="left-guessed-box">
          <div className="left-guessed-list">
            <div className="guesses-titles">Missed Letters:</div>
            <div className="guessed-list">{ this.showGuessedLetters() }</div>
          </div>
          <div className="left-guessed-list">
            <div className="guesses-titles">Guessed Words:</div>
            <div className="guessed-list">{ this.showGuessedWords() }</div>
          </div>
        </div>
        <div className="right-scores-box">
          <div className="right-scores">
            <div className="guesses-titles">Guesses Left:</div>
            <div className="guesses-display"> { this.props.guessesRemaining }</div>
          </div>
          <div className="right-scores">
            <div className="guesses-titles">Total Guesses:</div>
            <div className="guesses-display">{ this.props.totalGuesses }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Guesses;
