import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Game from './game';

const Root = ({store}) => {

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ Game }>
          <IndexRoute component={ Game } />
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
