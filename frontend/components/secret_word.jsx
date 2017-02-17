import React from 'react';

class SecretWord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secretWord: this.props.secretWord
    };

    this.display = this.display.bind(this);
  }

  display() {
    console.log(this.state.secretWord);
    return (
      Array(this.state.secretWord.length + 1).join("_ ")
    );
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
