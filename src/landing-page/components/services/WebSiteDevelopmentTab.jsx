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
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import { List, ListItem } from 'material-ui/List';

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
        <Stepper activeStep={0}>
          <Step>
            <StepLabel>Select campaign settings</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
          </Step>
        </Stepper>

        <h4>Templates</h4>
        <List>
          <ListItem>
            <a target="blank" href="/templates/band-template.html">
              Band Template
            </a>
          </ListItem>
          <ListItem primaryText="Trash" />
          <ListItem primaryText="Spam" />
          <ListItem primaryText="Follow up" />
        </List>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
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
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Google analytics integration"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Facebook pixel integration"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Localization"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
              <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton
                  fullWidth={true}
                  label="Users and Authentication"
                  onClick={this.handleOpen}
                />
              </TableRowColumn>
              <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
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
