import { createStore, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import promise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'


import reducers from '../reducers'

export default function configureStore(initialState) {
  const finalCreateStore = compose(applyMiddleware(promise, apiMiddleware))(createStore)

  const store = finalCreateStore(
    reducers,
    initialState,
    composeWithDevTools(),
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = reducers
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
