import React, { Component } from 'react'
import { connect } from 'react-redux'

//What info do we want to pass from the store to component?
class Login extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className='login-container'>
        <h1>Login</h1>
      </div>
    )
  }
}

// Ask what state does component need from the Redux Store

function mapStateToProps ({users}){
  return {
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Login)