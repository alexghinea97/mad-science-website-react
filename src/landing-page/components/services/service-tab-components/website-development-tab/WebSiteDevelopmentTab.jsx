import React, { Component } from 'react';
import { Tab } from 'material-ui/Tabs';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { RaisedButton } from 'material-ui';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import ServicesOrderStepper from '../../componentns/ServicesOrderStepper';
import Templates from './components/Templates';

export default class WebSiteDevelopmentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <h3>WebSite Developent</h3>
        <p>This is an example tab.</p>
        <Templates />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Basic static website"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Google analytics integration"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Facebook pixel integration"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Localization"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Users and Authentication"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <br />
        <Divider />
        <br />
        <Paper zDepth={1}>
          <ServicesOrderStepper />
        </Paper>
        <Dialog>
          title="Dialog With Actions" actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          > The actions in this window were passed in as an array of React
          objects.
        </Dialog>
      </div>
    );
  }
}
