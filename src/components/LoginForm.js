import React, { Component } from 'react'
import { connect } from 'react-redux'


class LoginForm extends Component {

  state = {
    userId:''
  }

  handleChange = (e) => {
    const userId = e.target.value
    this.setState(() => ({
      userId
    }))
  }

  handleLogin = (e) => {
    e.preventDefault()
    const {userId} = this.state
  }
  render() {
    
    console.log("PROPS IN LOGINFORM: ", this.props, "State In LoginForm: ", this.state )
    const { userList } = this.props
    const { userId } = this.state
    return(
      <div className='login'>
      <h1 className='login-header'>Login</h1>
        <form 
          className='login-form' 
          onSubmit={this.handleLogin}
        >
          <label>
            Please select your name: 
            <select 
              onChange={this.handleChange}
            >
            { userList.map((user) => (
              <option
                key={user.id} 
                value={user.id}
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