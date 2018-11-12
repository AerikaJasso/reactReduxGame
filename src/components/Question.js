import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { TiStarburst } from 'react-icons/ti'
import Button from '@material-ui/core/Button';
import Avatar from './Avatar'

class Question extends Component {
  handleClick = (e) => {
    e.preventDefault();
    alert("CLICKED")
  }
  render() {
    const { question } = this.props
    console.log('THESE ARE THE PROPS IN QUESTION: ', this.props)
    console.log('THIS IS THE QUESTION: ', question)

    if(question === null){
      return <p>This Question Doesn't Exist</p>
    }

    const {
      name, avatarURL, id, timestamp
    } = question
    
    return(
      <div className='question-container'>
        <div className="question">
        {/* Todo: Add styling for avatar globally with Material */}
          <div className="avatar">
            <Avatar
              avatar={avatarURL}
              name={name}
            />
          </div>

          <div className="question-info">
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            <blockquote>
              Would you rather . . .
            </blockquote>
            <Button onClick={this.handleClick}>
              View Poll
            </Button>
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
  return {
    authedUser,
    question: question 
      ? formatQuestion(question, users[question.author] , authedUser )
      : null
  }
}
export default connect(mapStateToProps)(Question)