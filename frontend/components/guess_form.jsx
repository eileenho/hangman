import React from 'react';

class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: ""
    };

    this.checkGuess = this.checkGuess.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  checkGuess(e) {
    e.preventDefault();
    console.log("check guess");
    this.setState({
      currentGuess: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Guess a letter or word</h2>
        <form onSubmit={ this.checkGuess }>
          <input type="text"
                 value={ this.state.currentGuess }
                 onChange={ this.update("currentGuess")} />
          <input type="submit" value="Guess!" />
        </form>
      </div>
    );
  }
}

export default GuessForm;
