import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { handleAddUser } from '../actions/users'
import  Avatar  from './Avatar'
class NewUser extends Component {
  state = {
    name: '',
    avatarURL: '',
    userExist: false,
    toDashboard: false
  }

  duplicateUser = (checkName) => {
    const users = this.props.users;
    // todo: Find Duplicate User
    for( let user of users) {
      if(user.name.toUpperCase() === checkName.toUpperCase()) {
        return true
      } else { 
        return false
      }
    }
  }


  handleChange = (e) => {
    const avatarURL = 'https://api.adorable.io/avatars/125/'
    const name = e.target.value
    
    this.setState(() => ({
      name,
      avatarURL: avatarURL+name+'.png'
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, avatarURL } = this.state
    const { dispatch } = this.props 
    const isNameDuplicate = this.duplicateUser(name)

    if(isNameDuplicate) {
      this.setState(() => {
        return {
          userExist: isNameDuplicate
        }
      })
    } else {
      dispatch(handleAddUser(name, avatarURL))
        this.setState(() => ({
          name: '',
          avatarURL: ''
        }))
    }
   
  }
  render(){
    const {name, avatarURL} = this.state
    const {users} = this.props
    console.log("USERS:", users);
    // todo: Redirect to / if submitted
    return(
      <div className='form-container'>
        <div className='sign-up-form'>
          <h1 className='center'>Join</h1>
          {name && (
            <Avatar
              avatar={avatarURL}
              name={name}
            />
          )}
          <form className='new-user' onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input 
              type="text" 
              value={name}
              name='name'
              onChange={this.handleChange}
              maxLength={50}
              />
            <button
              className='btn'
              type='submit'
              disabled={name === ''}
            >
              Join
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default connect()(NewUser)