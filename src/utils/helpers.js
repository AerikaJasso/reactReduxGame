export function formatQuestion ( question, author, votedOptionOne, votedOptionTwo ) {
  const { id, timestamp, optionOne, optionTwo } = question
  const { name, avatarURL } = author

  return {
    name,
    id,
    timestamp,
    avatarURL,
    optionOne: {...optionOne},
    optionTwo: {...optionTwo},
    hasVoted: votedOptionOne || votedOptionTwo
  }
}

// const optionOneText = question.optionOne.text
// const optionTwoText = question.optionTwo.text
// const votedOptionOne= question.optionOne.votes.includes(authedUser)
// const votedOptionTwo= question.optionTwo.votes.includes(authedUser)
export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

