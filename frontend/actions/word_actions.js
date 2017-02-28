import * as WordUtil from '../util/word_util';

export const RECEIVE_RANDOM_WORD = "RECEIVE_RANDOM_WORD";
export const RECEIVE_LEVELED_WORD = "RECEIVE_LEVELED_WORD";
export const RECEIVE_WORD = "RECEIVE_WORD";
export const RECEIVE_GUESS = "RECEIVE_GUESS";

export const requestRandomWord = () => dispatch => {
  return WordUtil.fetchRandomWord().then(word => {
    dispatch(receiveRandomWord(word));
  });
};

export const requestLeveledWord = level => dispatch => {
  return WordUtil.fetchLeveledWord(level).then(word => {
    dispatch(receiveLeveledWord(word));
  });
};

export const createWord = newWord => dispatch => {
  return WordUtil.createWord(newWord).then(word => {
    dispatch(receiveWord(word));
  });
};

export const createGuess = newGuess => dispatch => {
  return WordUtil.getGuess(newGuess).then(guess => {
    dispatch(receiveGuess(guess));
  });
};

export const checkWord = newWord => dispatch => {
  return WordUtil.checkWord(newWord).then(word => {
    dispatch(receiveWord(word));
  });
};

export const receiveRandomWord = word => ({
  type: RECEIVE_RANDOM_WORD,
  word
});

export const receiveLeveledWord = word => ({
  type: RECEIVE_LEVELED_WORD,
  word
});

export const receiveWord = word => ({
  type: RECEIVE_WORD,
  word
});

export const receiveGuess = guess => ({
  type: RECEIVE_GUESS,
  guess
});
