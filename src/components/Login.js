import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import NewUser from './NewUser'


//What info do we want to pass from the store to component?
class Login extends Component {
  
  render() {
    const {users} = this.props
    return (
      <div className='login-container'> 
        
          <LoginForm
            users={users}
          /> 
          {/* <NewUser
            users={users}
          />    */}
      </div>
    )
  }
}

// Ask what state does component need from the Redux Store

// these are just an array of the KEYS.
function mapStateToProps ({users}){
  return {
    users: Object.keys(users).map((u) => users[u])
  }
}

export default connect(mapStateToProps)(Login)