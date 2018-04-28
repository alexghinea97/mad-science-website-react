import React, { Component } from 'react';
import AppShell from './app-shell/AppShell';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Route path="/" component={AppShell} />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
// @flow
