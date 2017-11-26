import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import {loadNews} from "./actions";
import initialState from './store';
import reducer from './reducer';
import {newsDownload} from './newsDownload'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(newsDownload);
store.dispatch(loadNews(initialState.paging));

ReactDOM.render(
    <AppContainer store={store} />
    , document.getElementById('root')
);

const mapStateToProps = (state) => (state);