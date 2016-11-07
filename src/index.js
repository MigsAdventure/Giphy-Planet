import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import Layout from './components/Layout';
import MainPage from './components/MainPage';
import GifView from './components/GifView';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={MainPage} />
        <Route path="/gifview/:id" component={GifView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
