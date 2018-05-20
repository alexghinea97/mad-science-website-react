import React from 'react';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import LocalizedStrings from '../../../../../../../../LocalizedStrings';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '-moz-available'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '50%'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
});

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250
    }
  }
};

class LocalizationIntegrationService extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0,
  //     selectedLanguages: new Set()
  //   };
  // }

  state = {
    name: []
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  // handleChange = (event, index, value) => {
  //   this.state.selectedLanguages.add(event.target.innerText);
  //   this.setState({ value: value });
  // };

  render() {
    const { classes, theme } = this.props;

    const languages = [
      'Английски',
      'Български',
      'Испански',
      'Френски',
      'Немски',
      'Японски',
      'Китайски'
    ];

    // const items = [];

    // for (let i = 0; i < languages.length; i++) {
    //   items.push(<MenuItem value={i} primaryText={languages[i]} />);
    // }

    return (
      <div className={classes.root}>
        <p>{LocalizedStrings.body.services.localizationDialog.textOne}</p>
        <p>{LocalizedStrings.body.services.localizationDialog.textSecond}</p>
        <p>{LocalizedStrings.body.services.localizationDialog.textThird}</p>

        <div className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-chip">Languages</InputLabel>
            <Select
              multiple
              value={this.state.name}
              onChange={this.handleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {languages.map(name => (
                <MenuItem
                  key={name}
                  value={name}
                  style={{
                    fontWeight:
                      this.state.name.indexOf(name) === -1
                        ? theme.typography.fontWeightRegular
                        : theme.typography.fontWeightMedium
                  }}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {/* <Select
          maxHeight={120}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {items}
        </Select>
        <List>
          {Array.from(this.state.selectedLanguages).map(language => {
            return (
              <ListItem primaryText={language} rightIcon={<ActionDelete />} />
            );
          })}
        </List> */}
        <Button
          fullWidth
          variant="raised"
          color="primary"
          onClick={this.handleAddService}
        >
          {'Add Website development service'}
        </Button>
      </div>
    );
  }
}

LocalizationIntegrationService.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(
  LocalizationIntegrationService
);
