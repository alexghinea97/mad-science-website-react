import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { RaisedButton } from 'material-ui';

export default class MarketingTab extends Component {
  render() {
    return (
      <div>
        <h3>Marketing Solutions</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Service</TableHeaderColumn>
              <TableHeaderColumn>Price</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>
                <RaisedButton label="Facebook Marketing and Analytics" />
              </TableRowColumn>
              <TableRowColumn>100$</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton label="Instagram Marketing and Analytics" />
              </TableRowColumn>
              <TableRowColumn>200$</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton label="Google Adwords" />
              </TableRowColumn>
              <TableRowColumn>150$</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton label="Google Analytics" />
              </TableRowColumn>
              <TableRowColumn>150$</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>
                <RaisedButton label="Email Marketing" />
              </TableRowColumn>
              <TableRowColumn>150$</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
