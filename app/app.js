import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { getLocalStore, setLocalStore } from './util/localStore'

import rudiment from './rudiment/reducer'
import Rudiment from './rudiment/component'


// configuration
let config = {
  renderReducer: rudiment,
  RenderComponent: Rudiment
}

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

/**
 * Sync the localStorage
 */
// const setStateToLocalStore = store => next => action => {
//   let result = next(action)

//   // save state to localStorage
//   setLocalStore(store.getState())

//   // Console
//   // console.log('before localStorage state: ', store.getState())
//   console.log('localStorage: ', getLocalStore())
//   return result
// }

let store = createStore(
  config.renderReducer,
  applyMiddleware(logger)
);


ReactDOM.render(
  <Provider store={store}>
    <config.RenderComponent />
  </Provider>,
  document.getElementById('app')
);