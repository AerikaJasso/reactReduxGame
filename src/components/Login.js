import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'


//What info do we want to pass from the store to component?
class Login extends Component {
  render() {
    const {userList} = this.props
    return (
      <div className='login-container'>
        <h1>Login</h1>  
          <LoginForm
            userList={userList}
          />    
      </div>
    )
  }
}

// Ask what state does component need from the Redux Store

// these are just an array of the KEYS.
function mapStateToProps ({users}){
  return {
    userList: Object.keys(users).map((u) => users[u])
  }
}

export default connect(mapStateToProps)(Login)