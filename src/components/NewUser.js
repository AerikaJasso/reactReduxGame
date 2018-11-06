import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { handleAddUser } from '../actions/users'
import axios from 'axios'
import  Avatar  from './Avatar'
class NewUser extends Component {
  state = {
    name: '',
    avatar: '',
    userExist: false
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
      avatar: avatarURL+name+'.png'
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, avatar } = this.state
    const { dispatch } = this.props 
    // check if name is duplicate
    const isNameDuplicate = this.duplicateUser(name)

    if(isNameDuplicate) {
      this.setState(() => {
        return {
          userExist: isNameDuplicate
        }
      })
    } else {
      //  todo: Add User to Store
      dispatch(handleAddUser(name, avatar)) 
        this.setState(() => ({
          name: '',
          avatar: ''
        }))
    }
   
  }
  render(){
    const {name, avatar} = this.state
    const {users} = this.props
    console.log("USERS:", users);
    // todo: Redirect to / if submitted
    return(
      <div className='form-container'>
        <div className='sign-up-form'>
        {/* ToDo: Display generated avatar after sign up. */}
        {/* Create Avatar component */}
          <h1 className='center'>Join</h1>
          {name && (
            <Avatar
              avatar={avatar}
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