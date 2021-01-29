import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from 'pages/Index';
import LoginPage from 'pages/Login';

import DetailPage from 'pages/sub/Detail';
import ListPage from 'pages/sub/List';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={ LoginPage } path="/login"></Route>
        <Route path="/" render={ props => (
          <IndexPage history={ props.history }>
            <Switch>
              <Route component={ ListPage } path="/sub/list"></Route>
              <Route component={ DetailPage } path="/sub/detail"></Route>
            </Switch>
          </IndexPage>
        )}></Route>
      </Switch>
    </Router>
  );
}

export default App;
