import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

// const AUTHED_ID = 'sarahedo'
//todo: set up authentication replacing string.

// thunk action creator
export function handleInitialData () {
  // use redux async thunk pattern to make API req
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        // dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
        // sending the dispatches to the reducers to handle them.
      })
  }
}

