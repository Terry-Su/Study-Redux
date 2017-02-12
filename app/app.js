import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { logger, setStateToLocalStore } from './util'
import GV from './util/global'

import rudiment from './rudiment/reducer'
import Rudiment from './rudiment/component'
import primary from './primary/reducer'
import Primary from './Primary/component'


// configuration
GV.renderReducer = primary
GV.RenderComponent = Primary
GV.renderProject = 'primary'

let store = createStore(
  GV.renderReducer,
  applyMiddleware(logger, setStateToLocalStore)
);

ReactDOM.render(
  <Provider store={store}>
    <GV.RenderComponent />
  </Provider>,
  document.getElementById('app')
);