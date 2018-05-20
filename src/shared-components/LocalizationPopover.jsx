import React from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LocalizedStrings from '../LocalizedStrings';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150
  }
});

class LocalizationPopover extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    localStorage.setItem('lang', event.target.value);
    document.location.reload();
  };

  render() {
    return (
      <div>
        <FormControl className={this.props.formControl}>
          <Select
            value={localStorage.getItem('lang')}
            onChange={this.handleChange}
          >
            <MenuItem value="bg">Български</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

LocalizationPopover.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocalizationPopover);
