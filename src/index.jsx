import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App'
import configureStore from './store/StoreConfig'

const root = document.getElementById('root')

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
)
