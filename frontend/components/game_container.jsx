import { connect } from 'react-redux';
import Game from './game';
import { requestRandomWord, requestLeveledWord } from '../actions/word_actions';

const mapStateToProps = state => ({
  word: state.words
});

const mapDispatchToProps = dispatch => ({
  requestRandomWord: () => dispatch(requestRandomWord()),
  requestLeveledWord: level => dispatch(requestLeveledWord(level))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
