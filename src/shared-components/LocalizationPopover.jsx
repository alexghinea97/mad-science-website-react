import React from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
    localStorage.setItem('lang', 'bg');
    document.location.reload();
  };

  onSetLanguageToEnglish = () => {
    localStorage.setItem('lang', 'en');
    document.location.reload();
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.handleClick}
          variant="raised"
          color="primary"
          className="localization-popover"
        >
          {LocalizedStrings.header.language}
        </Button>
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
