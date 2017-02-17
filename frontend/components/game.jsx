import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGuesses: 6,
      gameOver: false,
      guessedLetters: [],
      secretWord: ""
    };
  }

  componentDidMount() {
    this.props.requestAllWords();
  }

  render() {
    let words = this.props.words;
    console.log(words);
    return (
      <div>
        <h1>THE HANGMAN GAME</h1>
      </div>
    );
  }
}

export default Game;
