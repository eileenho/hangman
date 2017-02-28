import React from 'react';

class SecretWord extends React.Component {
  constructor(props) {
    super(props);

    this.display = this.display.bind(this);
  }

  display() {
    console.log(this.props.secretWord);
    if (this.props.gameOver === false) {
      let letters = [];
      for (let i = 0; i < this.props.secretWordLength; i++) {
        letters.push("_");
      }

      let currentGuess = letters.join("");

      let i = 0;
      return (
        <div className="secret-word-letters">
          {letters.map(letter => <li key={i++}>{letter}</li>)}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
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
