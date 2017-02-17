import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import GameContainer from './game_container';

const Root = ({store}) => {

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ GameContainer }>
          <IndexRoute component={ GameContainer } />
        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
