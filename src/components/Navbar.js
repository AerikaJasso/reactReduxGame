import  React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Nav from '../styles/Nav.css'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from './ImageAvatars';
import { connect } from 'react-redux'

class Navbar extends Component {
  
  render() {
    console.log('User before ...Spread:', this.props.user)
    const { ...user } = this.props.user
    console.log('User after ...Spread', user.avatarURL)
    return (
      <div className='nav-container'>
        <AppBar position='static' className='nav-appbar'>
      
          <Toolbar>
            <Button className='nav-button'>Home</Button>
            <Button className='nav-button'>New Question</Button>
            <Button className='nav-button'>LeaderBoard</Button>
          
            <ImageAvatars 
              avatarURL={user.avatarURL}
              name={user.name}
            />
            <Button className='nav-button'>Logout</Button> 
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
function mapStateToProps({users}, {id} ){
  const user = users[id]
  return {
    user
  }
}

export default connect(mapStateToProps)(Navbar)