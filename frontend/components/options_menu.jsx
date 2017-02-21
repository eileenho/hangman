import React from 'react';

class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newLevel: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      newLevel: e.target.value
    });
    this.props.setLevel(this.state.newLevel);
  }

  render() {
    return (
      <div className="options-menu">
        <div>Choose a Level:</div>
        <button onClick={ this.handleClick } value="random">Random</button>
        <button onClick={ this.handleClick } value="1">1</button>
        <button onClick={ this.handleClick } value="2">2</button>
        <button onClick={ this.handleClick } value="3">3</button>
        <button onClick={ this.handleClick } value="4">4</button>
        <button onClick={ this.handleClick } value="5">5</button>
        <button onClick={ this.handleClick } value="6">6</button>
        <button onClick={ this.handleClick } value="7">7</button>
        <button onClick={ this.handleClick } value="8">8</button>
        <button onClick={ this.handleClick } value="9">9</button>
        <button onClick={ this.handleClick } value="10">10</button>
      </div>
    );
  }
}

export default OptionsMenu;
