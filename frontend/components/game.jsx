import React from 'react';
import { merge } from 'lodash';

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
      secretWordLength: 1,
      success: false,
      level: "random",
      scores: "",
      currentGuess: []
    };

    this.setSecretWord = this.setSecretWord.bind(this);
    // this.getGuess = this.getGuess.bind(this);
    // this.checkLetter = this.checkLetter.bind(this);
    // this.checkWord = this.checkWord.bind(this);
    // this.checkLastGuess = this.checkLastGuess.bind(this);
    this.gameReset = this.gameReset.bind(this);
    this.setLeveledWord = this.setLeveledWord.bind(this);
    this.setLevel = this.setLevel.bind(this);
    this.setCurrentGuess = this.setCurrentGuess.bind(this);
    this.updateCurrentGuess = this.updateCurrentGuess.bind(this);
    this.checkGuess = this.checkGuess.bind(this);
    this.setRandomWord = this.setRandomWord.bind(this);
  }

  componentDidMount() {
    this.setRandomWord();
  }

  setRandomWord() {
    this.props.requestRandomWord().then(() => this.setSecretWord()).then(() => this.setCurrentGuess());
  }

  setLeveledWord() {
    this.props.requestLeveledWord(this.state.level).then(() => this.setSecretWord()).then(() => this.setCurrentGuess());
  }

  setSecretWord() {
    let length = this.props.word.word.length;
    let scores = this.props.word.word.scores;
    if (length) {
      this.setState({
        secretWordLength: length,
        scores: scores
      });
    } else {
      return <div>No words</div>;
    }
  }

  setCurrentGuess() {
    let blankCurrentGuess = [];
    for (let i = 0; i < this.state.secretWordLength; i++) {
      blankCurrentGuess.push("_");
    }
    this.setState({
      currentGuess: blankCurrentGuess
    });
  }

  setLevel(newLevel) {
    if (newLevel === "random") {
      this.setState({
        level: "random"
      }, this.setRandomWord );
    } else {
      this.setState({
        level: newLevel
      }, this.setLeveledWord );
    }
  }

  // getGuess(newGuess) {
  //   if (this.state.gameOver === false ) {
  //     if (this.state.guessesRemaining > 1) {
  //       if (newGuess.length === 1) {
  //         this.checkLetter(newGuess);
  //       } else {
  //         this.checkWord(newGuess);
  //       }
  //     } else {
  //       this.checkLastGuess(newGuess);
  //     }
  //   }
  // }

  updateCurrentGuess(letter) {
    let newCurrentGuess = [];
    let secretWordLetters = this.state.secretWord.split("");
    secretWordLetters.map((x, i) => {
      if (this.state.currentGuess[i] === "_") {
        if (secretWordLetters[i] === letter) {
          newCurrentGuess.push(letter);
        } else {
          newCurrentGuess.push("_");
        }
      } else {
        newCurrentGuess.push(secretWordLetters[i]);
      }
    });
    this.setState({
      currentGuess: newCurrentGuess
    }, this.checkGuess);
  }

  //checks if game is over
  checkGuess() {
    let currentGuessWord = this.state.currentGuess.join("");
    console.log(currentGuessWord);
    if (currentGuessWord === this.state.secretWord) {
      this.setState({
        gameOver: !this.state.gameOver,
        success: !this.state.success
      });
      console.log(this.state.currentGuess);
    }
  }

  // checkLetter(newGuess) {
  //   if (this.state.correctLetters.includes(newGuess) || this.state.guessedLetters.includes(newGuess)) {
  //     console.log("You've already guessed this letter!");
  //   } else if (this.state.secretWord.includes(newGuess)) {
  //     this.setState({
  //       correctLetters: this.state.correctLetters.concat(newGuess),
  //       totalGuesses: this.state.totalGuesses + 1
  //     }, this.updateCurrentGuess(newGuess));
  //   } else {
  //     this.setState({
  //       guessedLetters: this.state.guessedLetters.concat(newGuess),
  //       guessesRemaining: this.state.guessesRemaining - 1,
  //       totalGuesses: this.state.totalGuesses + 1
  //     });
  //   }
  // }

  // checkLastGuess(newGuess) {
  //   if (newGuess.length === 1) {
  //     if (this.state.correctLetters.includes(newGuess) || this.state.guessedLetters.includes(newGuess)) {
  //       console.log("You've already guessed this letter!");
  //     } else if (this.state.secretWord.includes(newGuess)) {
  //       this.setState({
  //         correctLetters: this.state.correctLetters.concat(newGuess),
  //         gameOver: !this.state.gameOver,
  //         success: !this.state.success
  //       });
  //     } else {
  //       this.setState({
  //         guessedLetters: this.state.guessedLetters.concat(newGuess),
  //         guessesRemaining: this.state.guessesRemaining - 1,
  //         totalGuesses: this.state.totalGuesses + 1,
  //         gameOver: !this.state.gameOver
  //       });
  //     }
  //   } else {
  //     if (newGuess === this.state.secretWord) {
  //       this.setState({
  //         totalGuesses: this.state.totalGuesses + 1,
  //         gameOver: !this.state.gameOver,
  //         success: !this.state.success
  //       });
  //     } else {
  //       this.setState({
  //         totalGuesses: this.state.totalGuesses + 1,
  //         guessedWords: this.state.guessedWords.concat(newGuess),
  //         guessesRemaining: this.state.guessesRemaining - 1,
  //         gameOver: !this.state.gameOver
  //       });
  //     }
  //   }
  // }

  // checkWord(newGuess) {
  //   if (newGuess === this.state.secretWord) {
  //     this.setState({
  //       totalGuesses: this.state.totalGuesses + 1,
  //       gameOver: !this.state.gameOver,
  //       success: !this.state.success
  //     });
  //   } else {
  //     this.setState({
  //       totalGuesses: this.state.totalGuesses + 1,
  //       guessedWords: this.state.guessedWords.concat(newGuess),
  //       guessesRemaining: this.state.guessesRemaining - 1
  //     });
  //   }
  // }

  gameReset() {
    this.setState({
      guessesRemaining: 6,
      totalGuesses: 0,
      gameOver: false,
      guessedLetters: [],
      correctLetters: [],
      guessedWords: [],
      secretWord: "secret",
      success: false,
      scores: "",
      currentGuess: []
    }, this.setRandomWord );
  }

  render() {
    return (
      <div className="game-container">
        <div className="title">Comfy Cat (a.k.a. Hangman)</div>
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
                     <SecretWord secretWordLength={ this.state.secretWordLength }
                          correctLetters={ this.state.correctLetters }
                          gameOver={ this.state.gameOver } />
                        <GuessForm createGuess={ this.props.createGuess }
                         checkWord={ this.props.checkWord }/>
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
