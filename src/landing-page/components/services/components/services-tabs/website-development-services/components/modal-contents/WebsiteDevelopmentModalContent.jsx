import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import LocalizedStrings from '../../../../../../../../LocalizedStrings';
import WebsiteTemplates from '../WebsiteTemplates.jsx';
import websiteTemplatesData from './../templates.json';

const items = [];
websiteTemplatesData.forEach((element, index) => {
  items.push(
    <MenuItem value={index} key={index} primaryText={element.title} />
  );
});

export default class WebsiteDevelopmentModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: -1 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <h2>{LocalizedStrings.body.services.websiteDevelopmentDialog.title}</h2>
        <p>{LocalizedStrings.body.services.websiteDevelopmentDialog.textOne}</p>
        <WebsiteTemplates />
        <br />
        <DropDownMenu
          autoWidth={false}
          style={{ width: '100%' }}
          maxHeight={300}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {items}
        </DropDownMenu>
        <br />
        <p>
          {LocalizedStrings.body.services.websiteDevelopmentDialog.textSecond}
        </p>
        <TextField
          fullWidth={true}
          hintText="Link to a file or a webpage with wanted design: "
          floatingLabelText="Link"
        />
      </div>
    );
  }
}
