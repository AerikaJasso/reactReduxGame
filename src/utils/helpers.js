export function formatQuestion ( question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question
  const { name, avatarURL } = author
  // const hasVoted = question.optionOne.votes.includes(authedUser) ||
  // question.optionTwo.votes.includes(authedUser)
  // console.log('In Helpers: ', hasVoted);

  return {
    name,
    id,
    timestamp,
    avatarURL,
    optionOne: {...optionOne},
    optionTwo: {...optionTwo},
    // hasVoted: hasVoted
  }
}

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

