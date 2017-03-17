import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom';
import mobx from 'mobx';

import Main from './containers/main';

const rootElement = document.querySelector(
  document.currentScript.getAttribute('data-container')
);

const StartPoint = (
  <Router history={hashHistory}>
    <div>
      <Route path="/" component={Main} />
    </div>
  </Router>
);

render(StartPoint, rootElement);
