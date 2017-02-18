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
      if (this.props.guessedLetters.includes(this.props.secretWord[i])) {
        letters.push(this.props.secretWord[i]);
      } else {
        letters.push("_");
      }
    }
    return letters.join(" ");
  }

  render() {
    return (
      <div>
        <h3>Secret Word:</h3>
        { this.display() }
      </div>
    );
  }
}

export default SecretWord;
