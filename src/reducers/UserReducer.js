import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'

import {
  SET_USER_NAME,
} from '../actions/user'

const initialState = {
  user: {
    username: null,
    error: null,
    fetching: false,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      console.log('action @ SET_USER_NAME', action)
      return update(state, {
        user: {
          username: { $set: action.username },
        },
      })
    }
    default:
      return state
  }
}
