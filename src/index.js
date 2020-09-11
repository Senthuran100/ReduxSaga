import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './redux';
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from './sagas';
import { Provider } from 'react-redux';


const sagaMiddleware = createSagaMiddleware();
// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store = createStore(reducer,compose(applyMiddleware(sagaMiddleware),reduxDevTools));

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
