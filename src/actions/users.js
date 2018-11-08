import { saveUser } from '../utils/api'
import {  setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'
import { generateUID } from '../utils/_DATA.js'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'

function addUser (user) {
  return {
    type: ADD_USER,
    user,
  }
}

export function handleAddUser (name, avatarURL) {
  return (dispatch) => {
    // dispatch(showLoading())
    const id = generateUID()
    return saveUser({
      name,
      avatarURL,
      id
    })
    .then((user) => dispatch(addUser(user)))
    .then(()=> dispatch(setAuthedUser(id)))
  }
}
export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}



