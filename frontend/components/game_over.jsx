import React from 'react';

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
      </div>
    );
  }
}

export default GameOver;
