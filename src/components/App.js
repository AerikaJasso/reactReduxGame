import React, { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login  from './Login'
import JoinForm from './JoinForm'

class App extends Component {
  // When app mounts we want to dispatch the action creator
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
      <LoadingBar />
       {/* <Login /> */}
       <JoinForm/>

      </div>
    );
  }
}
/* 
  we dont need anything from state, the connect invocation can remain blank.
*/
export default connect()(App);
