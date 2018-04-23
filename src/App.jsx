import React, { Component } from 'react';
import AppShell from './pages/app-shell/AppShell';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={AppShell} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
// @flow
