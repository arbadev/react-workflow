/*
 * CONSTANTS
*/

export const SET_USER_NAME = 'SET_USER_NAME'

/*
 * ACTIONS CREATORS
*/

export const setUserName = (username) => {
  return {
    type: SET_USER_NAME,
    username,
  }
}
