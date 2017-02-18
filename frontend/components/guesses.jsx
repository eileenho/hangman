import React from 'react';

class Guesses extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h2>Guesses Box</h2>
        <h3>Guesses Remaining: { this.props.guessesRemaining }</h3>
        <h3>Guessed Letters: { this.props.guessedLetters }</h3>
        <h3>Guessed Words: { this.props.guessedWords }</h3>
      </div>
    );
  }
}

export default Guesses;
