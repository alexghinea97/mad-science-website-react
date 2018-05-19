import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from 'material-ui/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import LocalizedStrings from '../../../../../../../../LocalizedStrings';
import Button from '@material-ui/core/Button';

export default class LocalizationIntegrationService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      selectedLanguages: new Set()
    };
  }

  handleChange = (event, index, value) => {
    this.state.selectedLanguages.add(event.target.innerText);
    this.setState({ value: value });
  };

  render() {
    const languages = [
      'Английски',
      'Български',
      'Испански',
      'Френски',
      'Немски'
    ];
    const items = [];

    for (let i = 0; i < languages.length; i++) {
      items.push(<MenuItem value={i} primaryText={languages[i]} />);
    }

    return (
      <div>
        <p>{LocalizedStrings.body.services.localizationDialog.textOne}</p>
        <p>{LocalizedStrings.body.services.localizationDialog.textSecond}</p>
        <p>{LocalizedStrings.body.services.localizationDialog.textThird}</p>
        <Select
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
        </List>
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
