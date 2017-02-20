import React from 'react';

class HighScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      score: this.props.totalGuesses,
      secretWord: this.props.secretWord
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createWord(this.state).then(()=> this.props.createScore(this.state))
  ;
  }

  render() {
    return (
      <form className="high-score-form" onSubmit={ this.handleSubmit }>
        <input type="text"
               value={ this.state.playerName }
               onChange={ this.update("playerName") } />
        <input type="submit" value="Save Score"></input>
      </form>
    );
  }

}

export default HighScoreForm;
