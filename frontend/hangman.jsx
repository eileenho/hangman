import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchAllWords } from './util/word_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.store = store;
  window.fetchAllWords = fetchAllWords;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
