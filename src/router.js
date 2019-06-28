import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Homepage from './routes/Homepage/Homepage';
import LogRegister from './routes/LogRegister/LogRegister';
import Food from './routes/Food/Food';
import Movie from './routes/Movie/Movie';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/logregister" exact component={LogRegister} />
        <Route path="/food" exact component={Food} />
        <Route path="/movie" exact component={Movie} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
