import { connect } from 'react-redux';
import Game from './game';
import { requestAllWords } from '../actions/word_actions';

const mapStateToProps = state => ({
  words: state.words
});

const mapDispatchToProps = dispatch => ({
  requestAllWords: () => dispatch(requestAllWords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
