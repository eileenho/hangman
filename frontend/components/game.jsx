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
      correctLetters: [],
      secretWord: "",
      guess: ""
    };

    this.returnWords = this.returnWords.bind(this);
    this.getGuess = this.getGuess.bind(this);
  }

  componentDidMount() {
    this.props.requestAllWords().then(() => this.returnWords());
  }

  returnWords() {
    let words = this.props.words.words;
    if (words) {
      let secretWord = words[Math.floor(Math.random() * words.length)];
      this.setState({
        secretWord: secretWord
      });
    } else {
      return <div>No words</div>;
    }
  }

  getGuess(newGuess) {
    this.setState({
      guess: newGuess
    });
    if (newGuess.length == 1) {
      if (this.state.secretWord.includes(newGuess)) {
        this.setState({
          correctLetters: this.state.correctLetters.concat(newGuess),
          guessesRemaining: this.state.guessesRemaining - 1
        });
      } else {
        this.setState({
          guessedLetters: this.state.guessedLetters.concat(newGuess),
          guessesRemaining: this.state.guessesRemaining - 1
        });
      }
    }
  }

  render() {

    return (
      <div>
        <h1>THE HANGMAN GAME</h1>
        <Guesses guessesRemaining={ this.state.guessesRemaining } guessedLetters={ this.state.guessedLetters }/>
        <SecretWord secretWord={ this.state.secretWord } correctLetters={ this.state.correctLetters }/>
        <GuessForm getGuess={ this.getGuess }/>
      </div>
    );
  }
}

export default Game;
