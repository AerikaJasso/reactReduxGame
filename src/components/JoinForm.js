import React, { Component } from 'react'
import { connect } from 'react-redux'

class JoinForm extends Component {
  state = {
    name: '',
    avatar: ''
  }
  handleChange = (e) => {
    const inputName = e.target.name
    const value = e.target.value
    
    this.setState(() => ({
      [inputName]: value 
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { name, avatar } = this.state

    // todo: Add User to Store
    console.log('This is the name in the JoinForm: ', name, 'This is the avatarLink', avatar)

    this.setState(() => ({
      name: '',
      avatar: ''
    }))
  }
ls

  render(){
    const {name, avatar} = this.state

    // todo: Redirect to / if submitted
    return(
      <div className='form-container'>
        <div className='sign-up-form'>
          <h1 className='center'>Join</h1>
          <form className='new-user' onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input 
              type="text" 
              value={name}
              name='name'
              onChange={this.handleChange}
              maxLength={100}
              />
            <label>AvatarUrl:</label>
            <input 
              type="text" 
              name='avatar'
              value={avatar} 
              onChange={this.handleChange}
              maxLength={100}
              />
            <button
              className='btn'
              type='submit'
              disabled={name === '' || avatar === ''}
            >
              Join
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default JoinForm