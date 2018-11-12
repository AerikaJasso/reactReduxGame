import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/home.css'
import Question from './Question' 

class Home extends Component {

  render() {
    return (
      <div className='home-container'>
        <h3 className='center'>The Questions</h3>
        <ul className='questions-list'>
          {this.props.questionIds.map((id) =>(
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({questions}) {
  return {
    questionIds: Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}
export default connect(mapStateToProps)(Home)