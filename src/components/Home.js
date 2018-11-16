import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Home.css'
import '../styles/Container.css'
import Question from './Question'

class Home extends Component {
  
  state = {
    answered: false
  }
  
  render() {
    const { answered } = this.state
    return (
      <div className='Container'>
        <nav className="nav">
          <ul>
          
            <li className={answered ? 'color': null }>Answered</li>
          
            <li className={!answered ? 'color': null }>Unanswered</li>
    
          </ul>
        </nav>
        <ul className='questions-list'>
          { answered ? 
            this.props.answeredQuestions.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li> 
          )) : 
          this.props.unansweredQuestions.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({authedUser , questions}) {
  const questionIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  
  const answeredQuestions = [...questionIds.filter((id) => questions[id].optionOne.votes.includes(authedUser)), ...questionIds.filter((id) => questions[id].optionTwo.votes.includes(authedUser))]

  const unansweredQuestions = questionIds.filter(id => !answeredQuestions.includes(id))
  console.log('Unanswered: ', unansweredQuestions);


  return {
    answeredQuestions,
    unansweredQuestions
  }
}
export default connect(mapStateToProps)(Home)