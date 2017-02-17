import React from 'react';
import Guesses from './guesses';
import SecretWord from './secret_word';
import GuessForm from './guess_form';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessesRemaining: 6,
      gameOver: false,
      guessedLetters: [],
      secretWord: ""
    };

    this.returnWords = this.returnWords.bind(this);
  }

  componentDidMount() {
    this.props.requestAllWords();
  }

  returnWords() {
    let words = this.props.words.words;
    if (words) {
      let secretWord = words[Math.floor(Math.random() * words.length)];
      return <SecretWord secretWord={ secretWord }/>;
    } else {
      return <div>No words</div>;
    }
  }


  render() {

    return (
      <div>
        <h1>THE HANGMAN GAME</h1>
        <Guesses guessesRemaining={ this.state.guessesRemaining } guessedLetters={ this.state.guessedLetters }/>
        { this.returnWords() }
        <GuessForm />
      </div>
    );
  }
}

export default Game;
