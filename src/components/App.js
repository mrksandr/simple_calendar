import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/ContactPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route path="/calculator" component={CalculatorPage} />
    <Route path="/about" component={AboutPage} />

    <Route path="*" render={() => <h1>Not found</h1>} />
  </Switch>
);

export default App;
