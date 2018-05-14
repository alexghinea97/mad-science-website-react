import React, { Component } from 'react';
import AppShell from './app-shell/AppShell';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider>
          <BrowserRouter>
            <Route path="/" component={AppShell} />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
