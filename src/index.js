import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composerEnchancer = devtools ? devtools : compose;
const enhancedStore = composerEnchancer(applyMiddleware( thunk ));

function configureStore(initialState) {
  return createStore(
    rootReducer, 
    initialState, 
    enhancedStore
  )
};

export const store = configureStore({});
const reactRoot = document.getElementById('react-root');
const baseComponent = React.createElement(App);

ReactDOM.render(baseComponent, reactRoot);