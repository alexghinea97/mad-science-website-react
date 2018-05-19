import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import LocalizedStrings from '../../../../../../../../LocalizedStrings';
import WebsiteTemplates from './WebsiteTemplates.jsx';
import websiteTemplatesData from './templates.json';
import { connect } from 'react-redux';
import { addWebsiteDevService } from '../../../../../../../../actions/servicesActions';
import RaisedButton from 'material-ui/RaisedButton';

const items = [];
websiteTemplatesData.forEach((element, index) => {
  items.push(
    <MenuItem value={element.title} key={index} primaryText={element.title} />
  );
});

class WebsiteDevelopmentService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkUrl: '',
      selectedTemplateName: undefined
    };
  }

  handleChange = (event, index, value) =>
    this.setState({ selectedTemplateName: value });

  handleAddService = () => {
    this.props.addWebsiteDevService(this.state);
    this.props.handleModalClose();
  };

  render() {
    return (
      <div>
        <h2>{LocalizedStrings.body.services.websiteDevelopmentDialog.title}</h2>
        <p>
          Having a website in the twenty first centure is sort of a must for
          everyone who wants to do business online or have any kind of digital
          presence. This is why we are here to help you with that part.
        </p>
        <img
          src="/images/website-development-service.jpeg"
          alt=""
          width="100%"
          style={{ marginBottom: '10px' }}
        />
        <p>{LocalizedStrings.body.services.websiteDevelopmentDialog.textOne}</p>
        <WebsiteTemplates />
        <br />
        <p>
          If you've chosen a template that will suit you, select it from the
          dropdown below:{' '}
        </p>
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
          style={{ marginBottom: '20px', marginTop: '20px' }}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addWebsiteDevService: requestInfoObj => {
      dispatch(addWebsiteDevService(requestInfoObj));
    }
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(WebsiteDevelopmentService);
