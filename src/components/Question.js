import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { TiStarburst } from 'react-icons/ti'
import '../styles/Question.css'
import ImageAvatars from './ImageAvatars'
import { withRouter } from 'react-router-dom'
import PollForm from './PollForm'

class Question extends Component {

  viewPoll = (e, id) => {
    e.preventDefault();
    
    this.props.history.push(`/question/${id}`)
    
  }
  render() {
    const { question, optionOneText, optionTwoText, authedUser, viewPoll, votedOptionOne, votedOptionTwo } = this.props
    // console.log('THIS IS Question Option 1 votes: ', question.optionOne.votes.length)
    if(question === null){
      return <p>This Question Doesn't Exist</p>
    }
    const {
      name, avatarURL, id, timestamp, optionOne, optionTwo, hasVoted
    } = question
    
    let renderCard;

    const viewPollAnswer = (  
      <div className='poll-info'>
        <h4>You Would Rather . . .</h4>
        <span className='vote-option'>
        {optionOneText}
        {votedOptionOne &&
          <TiStarburst className='voted-icon' color='#ebbb32'/>
        }
        </span>
        <h4>OR</h4>
        <span className='vote-option'>
        {optionTwoText}
        {votedOptionTwo &&
          <TiStarburst className='voted-icon' color='#ebbb32'/>
        }
        </span>
        <button>Back</button>
      </div>
              
    )

    const pollQuestion = (
      <div className='poll-info'>
        <h4>Would You Rather?</h4>
        <span>{optionOneText}</span>
        <h4>OR</h4>
        <span>{optionTwoText}</span>
        <button 
          onClick={(e) => this.viewPoll(e , id)}
        >
        View Poll
        </button>
      </div>
    )

    if (hasVoted && viewPoll) {
      renderCard = viewPollAnswer
    }
    else if(hasVoted && !viewPoll){
      renderCard = pollQuestion
    }
    else if(!hasVoted && !viewPoll){
      renderCard = pollQuestion
    }
    else if(!hasVoted && viewPoll) {
      renderCard = <PollForm
        authedUser={authedUser}
        question={question}
        optionOneText={optionOneText}
        optionTwoText={optionTwoText}
      />
    }
    return(
      <div className='question-container'>
        <div className="question-card">
         <div className="card-header">
          <h4>{name} Asks : </h4>
         </div>
          <div className="card-main">
            <ImageAvatars
              className='avatar'
              avatarURL={avatarURL}
              name={name}
            />
            <div className="question-info">
              { renderCard }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// What state does the Component need from the store?
function mapStateToProps ({authedUser, users, questions }, { id }) {
  // what info do we want to pass to the component?
  // get question from questions Array.
  const question = questions[id]
  const optionOneText = question.optionOne.text
  const optionTwoText = question.optionTwo.text
  const votedOptionOne= question.optionOne.votes.includes(authedUser)
  const votedOptionTwo= question.optionTwo.votes.includes(authedUser)
  
  return {
    authedUser,
    optionOneText,
    optionTwoText,
    votedOptionOne,
    votedOptionTwo,
    question: question 
      ? formatQuestion(question, users[question.author], votedOptionOne, votedOptionTwo )
      : null
  }
}
export default withRouter(connect(mapStateToProps)(Question))