import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import selectionReducer from './reducers/selectionReducer'


const store = createStore(
  selectionReducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
);
