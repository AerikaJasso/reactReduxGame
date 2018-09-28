import React, { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  // When app mounts we want to dispatch the action creator
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
       <h1 className="">IM TIRED!</h1>
      </div>
    );
  }
}
/* 
  we dont need anything from state, the connect invocation can remain blank.
*/
export default connect()(App);
