import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scoresTotal: 0
    };

    this.scoresAverage = this.scoresAverage.bind(this);
  }

  scoresAverage() {
    if (this.props.scores) {
      this.props.scores.map(score => this.setState({ scoresTotal: this.state.scoresTotal + score}));
      let average = this.state.scoresTotal/this.props.scores.length;
      return (
        <div>{ average }</div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="scores">
        <h1>Average number of guesses: 0</h1>
        <h1>Top Scores</h1>
        <ol>
          <li>Victor: 0 </li>
          <li>Gina: 0 </li>
          <li>Heather: 1</li>
        </ol>
        { this.scoresAverage() }
      </div>
    );
  }


}

export default Score;
