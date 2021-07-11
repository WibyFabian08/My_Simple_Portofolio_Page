import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { createBrowserHistory } from "history";

import MainPage from './pages/MainPage';

import './assets/scss/style.scss';

function App() {
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/" component={MainPage}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
