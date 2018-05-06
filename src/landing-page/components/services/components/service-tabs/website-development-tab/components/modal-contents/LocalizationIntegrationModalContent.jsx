import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';

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
        <p>
          С помощта на локализацията Вие ще можете да разивате вашите идеи, тъй
          като съдържанието, което ще достига до потребителите ще бъде
          съобразено според използвания език и страните, в които искате да се
          развива вашият сайт.
        </p>
        <p>
          В менюто може да изберете желаните езици, на които искате да бъде
          преведен вашият сайт. Ние ще се погрижим съдържанието да е максимално
          точно предадено.
        </p>
        <p>Цената се определя според обема на текста и срока за превод.</p>
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
