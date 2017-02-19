import { connect } from 'react-redux';
import Game from './game';
import { requestRandomWord, requestLeveledWord, createWord, createScore } from '../actions/word_actions';

const mapStateToProps = state => ({
  word: state.words
});

const mapDispatchToProps = dispatch => ({
  requestRandomWord: () => dispatch(requestRandomWord()),
  requestLeveledWord: level => dispatch(requestLeveledWord(level)),
  createWord: word => dispatch(createWord(word)),
  createScore: score => dispatch(createScore(score))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
