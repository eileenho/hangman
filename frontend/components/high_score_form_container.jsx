import { connect } from 'react-redux';
import { createWord } from '../actions/word_actions';
import HighScoreForm from './high_score_form';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createWord: (word) => dispatch(createWord(word))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HighScoreForm);
