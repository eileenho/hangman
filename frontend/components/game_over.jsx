import React from 'react';
import HighScoreForm from './high_score_form';

class GameOver extends React.Component {
  constructor(props) {
    super(props);

    this.endText = this.endText.bind(this);
  }

  endText() {
    if (this.props.success === true) {
      return <h1>You Won!</h1>;
    } else {
      return <h1>You Lose!</h1>;
    }
  }

  render() {
    return(
      <div>
        <h1>Game over?</h1>
        { this.endText() }
        <button onClick={ this.props.gameReset }>Play Again!</button>
        <HighScoreForm secretWord={ this.props.secretWord }
                       guessesRemaining={ this.props.guessesRemaining }
                       createWord = { this.props.createWord }/>
      </div>
    );
  }
}

export default GameOver;
