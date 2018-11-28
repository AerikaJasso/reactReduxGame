import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login  from './Login'
import Home from './Home'
import Navbar from './Navbar'
import Poll from './Poll'


class App extends Component {
  // When app mounts we want to dispatch the action creator
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
            <div className="app-container">
              <Navbar id={authedUser} />
              <LoadingBar/>
                <Route path='/login' exact component={Login}/>
                <Route path='/' exact component={Home}/>
                <Route path='/question/:id' component={Poll}/>     
                
              {/* <Login /> */}
              {/* <Home /> */}
            </div>
        
        </React.Fragment>
      </Router>
    );
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    // loading: authedUser === null
    authedUser: authedUser
  }
}
export default connect(mapStateToProps)(App);
