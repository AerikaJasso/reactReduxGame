import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { TiStarburst } from 'react-icons/ti'
import Avatar from './Avatar'
import '../styles/Question.css'

class Question extends Component {
  handleClick = (e) => {
    e.preventDefault();
    alert("CLICKED")
  }
  render() {
    const { question } = this.props
    console.log('THESE ARE THE PROPS IN QUESTION: ', this.props)
    // console.log('THIS IS Question Option 1 votes: ', question.optionOne.votes.length)

    if(question === null){
      return <p>This Question Doesn't Exist</p>
    }

    const {
      name, avatarURL, id, timestamp, optionOne, OptionTwo, hasVoted
    } = question
    
    return(
      <div className='question-container'>
        <div className="question-card">
         <div className="card-header">
          <h4>
            {name} Asks : 
            </h4>
         </div>
         
          
            <div className="card-main">
              <Avatar
                className='avatar'
                avatar={avatarURL}
                name={name}
              />
            

              <div className="question-info">
                {/* <div>{formatDate(timestamp)}</div> */}
                <p>
                  Would you rather ...
                </p>
              

                <button onClick={this.handleClick}>
                View Poll
                </button>
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
  return {
    authedUser,
    question: question 
      ? formatQuestion(question, users[question.author] , authedUser )
      : null
  }
}
export default connect(mapStateToProps)(Question)