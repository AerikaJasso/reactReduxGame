import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import { handleSetAuthedUser } from '../actions/authedUser'
class LoginForm extends Component {
  state = {
    id:'',
    name: '',
    avatarURL: '',
    clicked:false,
    toDashboard: false
  }

  handleChange= (e) => {
    const userIndex = e.target.value
    let userObj = this.props.users[userIndex]
    let { avatarURL } = userObj
    
    this.setState(() => ({
       avatarURL
    }))
  } 
  handleClick= (e) => {
    e.preventDefault()
    const userIndex = e.target.value
    let userObj = this.props.users[userIndex]
    let { id, name, avatarURL } = userObj;
    
    this.setState(() => ({
      id,
      name,
      avatarURL,
      clicked: true
    }))
  }

  handleLogin = (e) => {
    e.preventDefault()
    const {id} = this.state
    const { dispatch } = this.props
    dispatch(handleSetAuthedUser(id))
  }
  render() {
    const { users  } = this.props
    const {clicked, avatarURL, name} = this.state
  
    console.log('The users props: ', users)
    console.log('THE STATE:', this.state)
    // const {user} = this.state
    return(
      <div className='login'>
      <h1 className='Login-header'>Login</h1>
       { clicked ?
        <Avatar
          avatar={avatarURL}
          name={name}
        /> 
        : null
       } 
         <form 
          className='login-form' 
          onSubmit={this.handleLogin}
        >
          
          <label>
            Please select your name: 
            <select 
              onClick={this.handleClick}
              onChange={this.handleChange}
            >
            { users.map((user, index) => (
              <option
                key={index} 
                value={index}
              >
              {user.name}
              </option>
            ))}
            </select>
          </label> 
          <button
            className='btn'
            type='submit'
          >
            Enter
          </button>
        
        </form> 
      </div>
    )
  }
}

// What state does the component need from the redux store?

export default connect()(LoginForm)