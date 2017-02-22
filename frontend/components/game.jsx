// sidewalk pic url: http://res.cloudinary.com/di8mt9hbc/image/upload/v1487490178/pavers-1696507_1280_udrocc.jpg

import React from 'react';
import Guesses from './guesses';
import SecretWord from './secret_word';
import GuessForm from './guess_form';
import GameOver from './game_over';
import Picture from './picture';
import OptionsMenu from './options_menu';
import Score from './score.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessesRemaining: 6,
      totalGuesses: 0,
      gameOver: false,
      guessedLetters: [],
      correctLetters: [],
      guessedWords: [],
      secretWord: "secret",
      success: false,
      level: "random",
      scores: ""
    };

    this.setSecretWord = this.setSecretWord.bind(this);
    this.getGuess = this.getGuess.bind(this);
    this.checkResult = this.checkResult.bind(this);
    this.checkLetter = this.checkLetter.bind(this);
    this.checkWord = this.checkWord.bind(this);
    this.checkLastGuess = this.checkLastGuess.bind(this);
    this.gameReset = this.gameReset.bind(this);
    this.setLeveledWord = this.setLeveledWord.bind(this);
    this.setLevel = this.setLevel.bind(this);
  }

  componentDidMount() {
    this.props.requestRandomWord().then(() => this.setSecretWord());
  }

  setSecretWord() {
    console.log("setting secret word");
    let word = this.props.word.word.word;
    let scores = this.props.word.word.scores;
    console.log(word);
    console.log(scores);
    if (word) {
      this.setState({
        secretWord: word,
        scores: scores
      });
    } else {
      return <div>No words</div>;
    }
  }

  setLeveledWord() {
    this.props.requestLeveledWord(this.state.level).then(() => this.setSecretWord());
  }

  setLevel(newLevel) {
    if (newLevel === "random") {
      this.props.requestRandomWord().then(() => this.setSecretWord());
    } else {
      this.setState({
        level: newLevel
      });
      this.setLeveledWord();
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
        totalGuesses: this.state.totalGuesses + 1
      });
    } else {
      this.setState({
        guessedLetters: this.state.guessedLetters.concat(newGuess),
        guessesRemaining: this.state.guessesRemaining - 1,
        totalGuesses: this.state.totalGuesses + 1
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
          totalGuesses: this.state.totalGuesses + 1,
          gameOver: !this.state.gameOver,
          success: !this.state.success
        });
      } else {
        this.setState({
          guessedLetters: this.state.guessedLetters.concat(newGuess),
          guessesRemaining: this.state.guessesRemaining - 1,
          totalGuesses: this.state.totalGuesses + 1,
          gameOver: !this.state.gameOver
        });
      }
    } else {
      if (newGuess === this.state.secretWord) {
        this.setState({
          totalGuesses: this.state.totalGuesses + 1,
          gameOver: !this.state.gameOver,
          success: !this.state.success
        });
      } else {
        this.setState({
          totalGuesses: this.state.totalGuesses + 1,
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
        totalGuesses: this.state.totalGuesses + 1,
        gameOver: !this.state.gameOver,
        success: !this.state.success
      });
    } else {
      console.log("Wrong guess");
      this.setState({
        totalGuesses: this.state.totalGuesses + 1,
        guessedWords: this.state.guessedWords.concat(newGuess),
        guessesRemaining: this.state.guessesRemaining - 1
      });
    }
  }

  checkResult(displayedWord) {
    if (displayedWord === this.state.secretWord) {
      this.setState({
        totalGuesses: this.state.totalGuesses + 1,
        gameOver: !this.state.gameOver,
        success: !this.state.success
      });
    }
  }

  gameReset() {
    this.setState({
      guessesRemaining: 6,
      totalGuesses: 0,
      gameOver: false,
      guessedLetters: [],
      correctLetters: [],
      guessedWords: [],
      secretWord: "secret",
      success: false
    });
    this.props.requestRandomWord().then(() => this.setSecretWord());
  }

  render() {
    return (
      <div className="game-container">
        <div className="title">Comfy Cat (a.k.a Hangman)</div>
        <div className="main-container">
          <OptionsMenu setLevel={ this.setLevel } />
          <div className="board-container">
            <Guesses guessesRemaining={ this.state.guessesRemaining }
                     guessedLetters={ this.state.guessedLetters }
                     guessedWords={ this.state.guessedWords }
                     totalGuesses={ this.state.totalGuesses } />
            <div className="picture-container">
              <Picture guessesRemaining={ this.state.guessesRemaining}
                       success={ this.state.success } />
              <SecretWord secretWord={ this.state.secretWord }
                          correctLetters={ this.state.correctLetters }
                          checkResult={ this.checkResult }
                          gameOver={ this.state.gameOver } />
              <GuessForm getGuess={ this.getGuess }/>
            </div>
          </div>
          <div className="side-bar-container">
            <Score scores={ this.state.scores }
              level={ this.state.level }/>
          </div>
        </div>
        { this.state.gameOver && <GameOver success={ this.state.success }
                                           gameReset={ this.gameReset }
                                           secretWord={ this.state.secretWord }
                                           guessesRemaining={ this.state.guessesRemaining }
                                           totalGuesses={ this.state.totalGuesses }
                                           createWord={ this.props.createWord }
                                           createScore={ this.props.createScore }/> }
      </div>
    );
  }
}

export default Game;
