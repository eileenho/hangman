import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);

    this.secretWordDisplay = this.secretWordDisplay.bind(this);
    this.scoresAverage = this.scoresAverage.bind(this);
    this.showScores = this.showScores.bind(this);
  }

  secretWordDisplay() {
    let letters = [];
    for (let i = 0; i < this.props.secretWord.length; i++) {
      letters.push("_");
    }
    let i = 0;
    return (
      <ul>
        {letters.map(letter => <li key={i++}>{ letter }</li> )}
      </ul>
    );
  }

  scoresAverage() {
    if (this.props.scores.length < 1) {
      return <div>N/A</div>;
    } else {
      let scoresArray = [];
      this.props.scores.map(score => scoresArray.push(score.score));
      let scoresTotal = scoresArray.reduce((a, b) => a + b, 0);
      let average = scoresTotal/this.props.scores.length;
      return (
        <div>{ average }</div>
      );
    }
  }

  showScores() {
    if (this.props.scores) {
      return (
        this.props.scores.map(score => <li key={score.id}>{score.player_name} : {score.score}</li>)
      );
    }
  }

  render() {
    return (
      <div className="scores">
        <div className="secret-word">
            { this.secretWordDisplay() }
        </div>
        <div className="average-scores">
          Average number of guesses:<br />
          { this.scoresAverage() }
        </div>
        <div className="top-scores">
          <ol>
            { this.showScores() }
          </ol>
        </div>
      </div>
    );
  }


}

export default Score;
