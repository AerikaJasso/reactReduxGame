import React , { Component } from 'react'
import Question from './Question'
import '../styles/Question.css'

class Poll extends Component{
  state = {
    viewPoll: true
  }
  render(){
    console.log('Props in Poll: ', this.props)
    const { viewPoll } = this.state
    const { id } = this.props.match.params
    return(
      <div>
        <Question 
          id={id}
          viewPoll={viewPoll}
        />  
      </div>
    )
  }
}
export default Poll