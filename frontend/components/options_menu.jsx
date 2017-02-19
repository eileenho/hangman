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
        <h3>Choose a Level</h3>
        <h2>Current Level: { this.props.level }</h2>
        <button onClick={ this.handleClick } value="random">Random</button><br />
        <button onClick={ this.handleClick } value="1">1</button><br />
        <button onClick={ this.handleClick } value="2">2</button><br />
        <button onClick={ this.handleClick } value="3">3</button><br />
        <button onClick={ this.handleClick } value="4">4</button><br />
        <button onClick={ this.handleClick } value="5">5</button><br />
        <button onClick={ this.handleClick } value="6">6</button><br />
        <button onClick={ this.handleClick } value="7">7</button><br />
        <button onClick={ this.handleClick } value="8">8</button><br />
        <button onClick={ this.handleClick } value="9">9</button><br />
        <button onClick={ this.handleClick } value="10">10</button><br />
      </div>
    );
  }
}

export default OptionsMenu;
