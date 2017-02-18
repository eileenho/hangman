import React from 'react';

class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuess: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleInput(e) {
    e.preventDefault();
    this.props.getGuess(this.state.newGuess);
    this.setState({
      newGuess: ""
    });
  }

  handleOnChange(e) {
    e.preventDefault();
    this.setState({
      newGuess: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Guess a letter or word</h2>
        <form onSubmit={ this.handleInput }>
          <input type="text"
                 value={ this.state.newGuess }
                 onChange={ this.handleOnChange } />
          <input type="submit" value="Guess!" />
        </form>
      </div>
    );
  }
}

export default GuessForm;
