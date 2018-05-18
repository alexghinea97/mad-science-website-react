import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import LocalizedStrings from '../../../../../../../../LocalizedStrings';
import WebsiteTemplates from '../WebsiteTemplates.jsx';
import websiteTemplatesData from './../templates.json';
import { connect } from 'react-redux';
import { addWebsiteDevService } from '../../../../../../../../actions/servicesActions';
import RaisedButton from 'material-ui/RaisedButton';

const items = [];
websiteTemplatesData.forEach((element, index) => {
  items.push(
    <MenuItem value={element.title} key={index} primaryText={element.title} />
  );
});

class WebsiteDevelopmentModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkUrl: '',
      selectedTemplateName: 'Band Template'
    };
  }

  handleChange = (event, index, value) =>
    this.setState({ selectedTemplateName: value });

  handleAddService = () => {
    this.props.onAddWebsiteDevelopmentService(this.state);
    this.props.handleModalClose();
  };

  render() {
    return (
      <div>
        <h2>{LocalizedStrings.body.services.websiteDevelopmentDialog.title}</h2>
        <img
          src="/images/website-development-service.jpeg"
          alt=""
          width="100%"
          style={{ marginBottom: '10px' }}
        />
        <p>{LocalizedStrings.body.services.websiteDevelopmentDialog.textOne}</p>
        <WebsiteTemplates />
        <br />
        <DropDownMenu
          autoWidth={false}
          style={{ width: '100%' }}
          maxHeight={300}
          value={this.state.selectedTemplateName}
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
          value={this.state.linkUrl}
          onChange={eventData => {
            this.setState({
              linkUrl: eventData.target.url
            });
          }}
        />
        <RaisedButton
          fullWidth={true}
          primary={true}
          onClick={this.handleAddService}
          label={'Add Website development service'}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddWebsiteDevelopmentService: requestInfoObj => {
      dispatch(addWebsiteDevService(requestInfoObj));
    }
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(WebsiteDevelopmentModalContent);
