import * as React from "react"
import { render } from "react-dom"
import { Provider } from 'react-redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import reducer from './store/reducers'
import rootSaga from './store/sagas'

import App from "./App"

const sagaMiddleWare: SagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement);
