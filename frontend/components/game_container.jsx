import { connect } from 'react-redux';
import Game from './game';
import { requestRandomWord } from '../actions/word_actions';

const mapStateToProps = state => ({
  word: state.words
});

const mapDispatchToProps = dispatch => ({
  requestRandomWord: () => dispatch(requestRandomWord()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
