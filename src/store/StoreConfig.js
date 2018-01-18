import { createStore, applyMiddleware, compose } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import promise from 'redux-promise'
// import { persistStore, autoRehydrate } from 'redux-persist'
// import localForage from 'localforage'
// import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from '../reducers'

// const reducer = combineReducers(reducers)
// const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore)

// const autoRehydrateConfig = {
//   log: true,
// }
// const localStorageConfig = {
//   // storage: localForage,
//   whitelist: ['user'],
// }
export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise, apiMiddleware),
    // autoRehydrate(autoRehydrateConfig),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore)

  // const store = finalCreateStore(reducers, initialState, composeWithDevTools())
  const store = finalCreateStore(reducers, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = reducers
      store.replaceReducer(nextReducer)
    })
  }

  // Redux persist for local storage
  // persistStore(store, localStorageConfig, () => {
  //   console.log('rehydration complete')
  // })
  return store
}
