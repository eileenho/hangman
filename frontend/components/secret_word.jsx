import React from 'react';

class SecretWord extends React.Component {
  constructor(props) {
    super(props);

    this.display = this.display.bind(this);
  }

  display() {
    console.log(this.props.secretWord);
    let letters = [];
    for (let i = 0; i < this.props.secretWord.length; i++) {
      if (this.props.correctLetters.includes(this.props.secretWord[i])) {
        letters.push(this.props.secretWord[i]);
      } else {
        letters.push("_");
      }
    }

    let currentGuess = letters.join("");
    this.props.checkResult(currentGuess);
    let i = 0;
    return (
      <ul className="secret-word-letters">
        {letters.map(letter => <li key={i++}>{letter}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div>{ this.display() }</div>
      </div>
    );
  }
}

export default SecretWord;
