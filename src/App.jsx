import React, { Component } from 'react';
import AppShell from './app-shell/AppShell';
import NotFoundPage from './not-found-page/NotFoundPage';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={AppShell} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
