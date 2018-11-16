import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login  from './Login'
import Home from './Home'


class App extends Component {
  // When app mounts we want to dispatch the action creator
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        
          <div className="app-container">
            <LoadingBar />
            {/* <Login /> */}
            <Home />
          </div>
       
      </React.Fragment>
    );
  }
}
/* 
  we dont need anything from state, the connect invocation can remain blank.
*/
export default connect()(App);
