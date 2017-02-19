import React from 'react';
import Guesses from './guesses';
import SecretWord from './secret_word';
import GuessForm from './guess_form';
import GameOver from './game_over';
import Picture from './picture';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessesRemaining: 6,
      gameOver: false,
      guessedLetters: [],
      correctLetters: [],
      guessedWords: [],
      secretWord: "secret",
      success: false,
    };

    this.setSecretWord = this.setSecretWord.bind(this);
    this.getGuess = this.getGuess.bind(this);
    this.checkResult = this.checkResult.bind(this);
    this.checkLetter = this.checkLetter.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.checkLastGuess = this.checkLastGuess.bind(this);
    this.gameReset = this.gameReset.bind(this);
  }

  componentDidMount() {
    this.props.requestRandomWord().then(() => this.setSecretWord());
  }

  setSecretWord() {
    console.log("setting secret word");
    let word = this.props.word.word.word;
    console.log(word);
    if (word) {
      this.setState({
        secretWord: word
      });
    } else {
      return <div>No words</div>;
    }
  }

  getGuess(newGuess) {
    if (this.state.gameOver === false ) {
      if (this.state.guessesRemaining > 1) {
        if (newGuess.length === 1) {
          this.checkLetter(newGuess);
        } else {
          this.checkWord(newGuess);
        }
      } else {
        this.checkLastGuess(newGuess);
      }
    }

  }

  checkLetter(newGuess) {
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
  }

  checkLastGuess(newGuess) {
    if (newGuess.length === 1) {
      if (this.state.correctLetters.includes(newGuess) || this.state.guessedLetters.includes(newGuess)) {
        console.log("You've already guessed this letter!");
      } else if (this.state.secretWord.includes(newGuess)) {
        this.setState({
          correctLetters: this.state.correctLetters.concat(newGuess),
          gameOver: !this.state.gameOver,
          success: !this.state.success
        });
      } else {
        this.setState({
          guessedLetters: this.state.guessedLetters.concat(newGuess),
          guessesRemaining: this.state.guessesRemaining - 1,
          gameOver: !this.state.gameOver
        });
      }
    } else {
      if (newGuess === this.state.secretWord) {
        this.setState({
          gameOver: !this.state.gameOver,
          success: !this.state.success
        });
      } else {
        this.setState({
          guessedWords: this.state.guessedWords.concat(newGuess),
          guessesRemaining: this.state.guessesRemaining - 1,
          gameOver: !this.state.gameOver
        });
      }
    }
  }

  checkWord(newGuess) {
    if (newGuess === this.state.secretWord) {
      this.setState({
        gameOver: !this.state.gameOver,
        success: !this.state.success
      });
    } else {
      console.log("Wrong guess");
      this.setState({
        guessedWords: this.state.guessedWords.concat(newGuess),
        guessesRemaining: this.state.guessesRemaining - 1
      });
    }
  }

  checkResult(displayedWord) {
    if (displayedWord === this.state.secretWord) {
      this.setState({
        gameOver: !this.state.gameOver,
        success: !this.state.success
      });
    }
  }

  gameReset() {
    this.setState({
      guessesRemaining: 6,
      gameOver: false,
      guessedLetters: [],
      correctLetters: [],
      guessedWords: [],
      secretWord: "secret",
      success: false
    });
    this.returnWords();
  }

  render() {
    return (
      <div>
        <h1>THE HANGMAN GAME</h1>
        <Picture guessesRemaining={ this.state.guessesRemaining}
                 success={ this.state.success } />
        <Guesses guessesRemaining={ this.state.guessesRemaining }
                 guessedLetters={ this.state.guessedLetters }
                 guessedWords={ this.state.guessedWords }/>
        <SecretWord secretWord={ this.state.secretWord }
                    correctLetters={ this.state.correctLetters }
                    checkResult={ this.checkResult } />
        <GuessForm getGuess={ this.getGuess }/>
        { this.state.gameOver && <GameOver success={ this.state.success }
                                           gameReset={ this.gameReset }/> }
      </div>
    );
  }
}

export default Game;
