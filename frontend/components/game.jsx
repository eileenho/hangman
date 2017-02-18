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
      guessedWords: [],
      secretWord: ""
    };

    this.returnWords = this.returnWords.bind(this);
    this.getGuess = this.getGuess.bind(this);
    this.checkResult = this.checkResult.bind(this);
    this.checkRemainingGuesses = this.checkRemainingGuesses.bind(this);
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
    if (this.state.guessesRemaining > 0) {
      if (newGuess.length == 1) {
        if (this.state.correctLetters.includes(newGuess) || this.state.guessedLetters.includes(newGuess)) {
          console.log("You've already guessed this letter!");
        } else if (this.state.secretWord.includes(newGuess)) {
          this.setState({
            correctLetters: this.state.correctLetters.concat(newGuess),
          });
        } else {
          this.setState({
            guessedLetters: this.state.guessedLetters.concat(newGuess),
            guessesRemaining: this.state.guessesRemaining - 1
          });
        }
      } else {
        if (newGuess === this.state.secretWord) {
          console.log("You win!");
        } else {
          console.log("Wrong guess");
          this.setState({
            guessedWords: this.state.guessedWords.concat(newGuess),
            guessesRemaining: this.state.guessesRemaining - 1
          });
        }
      }
      this.checkRemainingGuesses();
    } else {
      console.log("game over!");
      //reveal the secret word
    }
  }

  checkResult(displayedWord) {
    if (displayedWord === this.state.secretWord) {
      console.log("you won!");
    }
  }

  checkRemainingGuesses() {
    console.log("checking remaining guesses");
    if (this.state.guessesRemaining <= 0) {
      console.log("you lose!");
    }
  }

  render() {
    return (
      <div>
        <h1>THE HANGMAN GAME</h1>
        <Guesses guessesRemaining={ this.state.guessesRemaining }
                 guessedLetters={ this.state.guessedLetters }
                 guessedWords={ this.state.guessedWords }/>
        <SecretWord secretWord={ this.state.secretWord }
                    correctLetters={ this.state.correctLetters }
                    checkResult={ this.checkResult }
                    checkRemainingGuesses={ this.checkRemainingGuesses }/>
        <GuessForm getGuess={ this.getGuess }/>
      </div>
    );
  }
}

export default Game;
