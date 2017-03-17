import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom';
import mobx from 'mobx';
import { Provider } from 'mobx-react';

import Main from './containers/main';

const rootElement = document.querySelector(
  document.currentScript.getAttribute('data-container')
);

// Enable MobX Strict Functionality
mobx.useStrict(true);

// Import our Stores Here
import LanguageStore from './stores/language';
// Because they're classes, we have to instantiate them here :)
const languageStore = new LanguageStore('en');

const store = {
  language: languageStore
};

const StartPoint = (
  <Provider {...store}>
    <Router history={hashHistory}>
      <div>
        <Route path="/" component={Main} />
      </div>
    </Router>
  </Provider>
);

render(StartPoint, rootElement);
