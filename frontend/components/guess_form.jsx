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
    if (this.state.newGuess.length > 0) {
      this.props.createGuess(this.state.newGuess);
      this.setState({
        newGuess: ""
      });
    }
  }
  //this.props.checkWord(this.state.newGuess)

  handleOnChange(e) {
    e.preventDefault();
    this.setState({
      newGuess: e.target.value
    });
  }

  render() {
    return (
      <div className="guess-form">
        <form onSubmit={ this.handleInput }>
          <input className="guess-form-box" type="text"
                 value={ this.state.newGuess }
                 onChange={ this.handleOnChange } />
               <input className="guess-button" type="submit" value="Guess!" />
        </form>
      </div>
    );
  }
}

export default GuessForm;
