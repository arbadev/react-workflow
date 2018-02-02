import update from 'immutability-helper'
// import { REHYDRATE } from 'redux-persist/constants'

import {
  SET_USER_NAME,
} from '../actions/user'

const initialState = {
  username: 'And3',
  error: null,
  fetching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      const { username } = action
      return update(state, {
        username: { $set: username },
      })
    }
    default:
      return state
  }
}
