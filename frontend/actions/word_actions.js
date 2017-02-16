import * as WordUtil from '../util/word_util';

export const RECEIVE_ALL_WORDS = "RECEIVE_ALL_WORDS";

export const requestAllWords = () => dispatch => (
  WordUtil.fetchAllWords().then(words => dispatch(receiveAllWords(words)))
);

export const receiveAllWords = words => ({
  type: RECEIVE_ALL_WORDS,
  words
});
