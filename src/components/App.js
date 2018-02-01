import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import CalculatorPage from './pages/CalculatorPage';
import AboutPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route path="/calculator" component={CalculatorPage} />
    <Route path="/about" component={AboutPage} />

    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default App;
