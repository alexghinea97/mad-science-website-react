import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import strings from '../../src/LocalizedStrings';
import LocalizedStrings from '../LocalizedStrings';

export default class LocalizationPopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  onSetLanguageToBulgarian = () => {
    strings.setLanguage('bg');
    this.setState({});
  };

  onSetLanguageToEnglish = () => {
    strings.setLanguage('en');
    this.setState({});
  };

  render() {
    return (
      <div>
        <RaisedButton
          onClick={this.handleClick}
          label={LocalizedStrings.header.language}
          primary={true}
          className="localization-popover"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem
              onClick={this.onSetLanguageToBulgarian}
              primaryText="Български"
            />
            <MenuItem
              onClick={this.onSetLanguageToEnglish}
              primaryText="English"
            />
          </Menu>
        </Popover>
      </div>
    );
  }
}
