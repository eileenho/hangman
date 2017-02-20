import React from 'react';
import HighScoreForm from './high_score_form';

class GameOver extends React.Component {
  constructor(props) {
    super(props);

    this.endText = this.endText.bind(this);
  }

  endText() {
    let catHappy = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464940/happycat_ycbe7f.png";
    let catSad = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464917/sadcat_eef8di.png";

    if (this.props.success === true) {
      return (
        <div>
          <img src={ catHappy } />
          <h1>You Win!</h1>
          <h2>You correctly guessed: { this.props.secretWord }</h2>
          <h3>You made { this.props.totalGuesses } guess(es).</h3>
          <h2>Add your score:</h2>
          <HighScoreForm secretWord={ this.props.secretWord }
            totalGuesses={ this.props.totalGuesses }
            createWord={ this.props.createWord }
            createScore={ this.props.createScore }/>
        </div>
      );
    } else {
      return (
        <div>
          <img src={ catSad } />
          <h1>You Lose!</h1>
          <h2>The word was: { this.props.secretWord }</h2>
        </div>
      );
    }
  }

  render() {

    return(
      <div className="overlay">
        <div className="end-game-box">
          <h1>Game Over</h1>
          { this.endText() }
          <button className="reset-button" onClick={ this.props.gameReset }>Play Again!</button>
        </div>
      </div>
    );
  }
}

export default GameOver;
