import { connect } from 'react-redux';
import Game from './game';
import { requestRandomWord, requestLeveledWord, createWord, checkWord } from '../actions/word_actions';
import { createScore } from '../actions/score_actions';

const mapStateToProps = state => ({
  word: state.words
});

const mapDispatchToProps = dispatch => ({
  requestRandomWord: () => dispatch(requestRandomWord()),
  requestLeveledWord: level => dispatch(requestLeveledWord(level)),
  createWord: word => dispatch(createWord(word)),
  createScore: score => dispatch(createScore(score)),
  checkWord: word => dispatch(checkWord(word))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
