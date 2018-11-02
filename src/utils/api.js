import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveUser
  
} from './_DATA.js'

export function getInitialData () {
  return Promise.all ([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users
    // questions
  }))
}
export function saveUser (info) {
  return _saveUser(info)
}

