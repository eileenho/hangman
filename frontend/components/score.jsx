import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);

    this.showLevel = this.showLevel.bind(this);
    this.scoresAverage = this.scoresAverage.bind(this);
    this.showScores = this.showScores.bind(this);
  }

  showLevel() {
    return (
      <div className="average">{ this.props.level }</div>
    );
  }

  scoresAverage() {
    if (this.props.scores.length < 1) {
      return <div className="average">N/A</div>;
    } else {
      let scoresArray = [];
      this.props.scores.map(score => scoresArray.push(score.score));
      let scoresTotal = scoresArray.reduce((a, b) => a + b, 0);
      let average = (scoresTotal/this.props.scores.length).toFixed(2);
      return (
        <div className="average">{ average }</div>
      );
    }
  }

  showScores() {
    if (this.props.scores) {
      return (
        this.props.scores.map(score => <li key={score.id}>{score.player_name} : {score.score} guesses</li>)
      );
    } else {
      return (
        <li>No players yet</li>
      );
    }
  }

  render() {
    return (
      <div className="scores">
        <div className="secret-word">
          <h1>Current Level:</h1>
          { this.showLevel() }
        </div>
        <div className="average-scores">
          <p>Average guesses<br/>
             for this word:</p>
          { this.scoresAverage() }
        </div>
        <div className="players">
          <h1>Top Players:</h1>
          <ol className="top-scores">
            { this.showScores() }
          </ol>
        </div>
      </div>
    );
  }


}

export default Score;
