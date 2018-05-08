import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import LocalizedStrings from '../../../../../../../../LocalizedStrings';

export default class LocalizationIntegrationModalContent extends React.Component {
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
        <DropDownMenu
          maxHeight={120}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {items}
        </DropDownMenu>
        <List>
          {Array.from(this.state.selectedLanguages).map(language => {
            return (
              <ListItem primaryText={language} rightIcon={<ActionDelete />} />
            );
          })}
        </List>
      </div>
    );
  }
}
