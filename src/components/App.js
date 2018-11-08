import React, { Component } from 'react'
import '../styles/App.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
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
      <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        
          <div className="App">
            <LoadingBar />
            {/* <Login /> */}
            <Home />
          </div>
       
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
/* 
  we dont need anything from state, the connect invocation can remain blank.
*/
export default connect()(App);
