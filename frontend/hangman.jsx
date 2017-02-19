import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchRandomWord, fetchLeveledWord } from './util/word_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  window.fetchRandomWord = fetchRandomWord;
  window.fetchLeveledWord = fetchLeveledWord;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
