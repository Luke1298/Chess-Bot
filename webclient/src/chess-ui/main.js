// inventory main.es6

import React from 'react';
import ReactDOM from 'react-dom';
import ChessBoard from './components/ChessBoard';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
//
//
const store = createStore(combineReducers(allReducers));

ReactDOM.render(
  <Provider store={store}>
    <ChessBoard />
  </Provider>, document.getElementById("header")
);

