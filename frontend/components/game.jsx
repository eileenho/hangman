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
      secretWord: "",
      guess: ""
    };

    this.returnWords = this.returnWords.bind(this);
    this.getGuess = this.getGuess.bind(this);
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

  getGuess(newGuess) {
    this.setState({
      guess: newGuess
    });
    console.log(this.state.guess);
  }

  render() {

    return (
      <div>
        <h1>THE HANGMAN GAME</h1>
        <Guesses guessesRemaining={ this.state.guessesRemaining } guessedLetters={ this.state.guessedLetters }/>
        { this.returnWords() }
        <GuessForm getGuess={ this.getGuess }/>
      </div>
    );
  }
}

export default Game;
