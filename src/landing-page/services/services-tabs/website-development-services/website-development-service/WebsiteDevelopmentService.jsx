import React from 'react';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WebsiteTemplates from './WebsiteTemplates.jsx';
import websiteTemplatesData from './templates.json';
import { addWebsiteDevService } from '../../../../../actions/servicesActions';
import './WebSiteDevelopment.css';

const items = [];

websiteTemplatesData.forEach((element, index) => {
  items.push(
    <MenuItem value={element.title} key={index} onClick={this.handleChange}>
      {' '}
      {element.title}{' '}
    </MenuItem>
  );
});

class WebsiteDevelopmentService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkUrl: '',
      selectedTemplateName: ''
    };
  }

  handleChange = event => {
    this.setState({ selectedTemplateName: event.target.value });
  };

  handleAddService = () => {
    this.props.addWebsiteDevService(this.state);
    this.props.handleModalClose();
  };

  render() {
    return (
      <div id="website-development">
        <h2>Let's get started</h2>
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
        <p>
          Since we wanted you to have a wide choise of designs, so that you can
          easily relate to the one that suits you best, you can choose from one
          of the templates below which can later be customized for your own
          style and needs.
        </p>
        <WebsiteTemplates />
        <br />
        <p>
          If you've chosen a template that will suit you, select it from the
          dropdown below:{' '}
        </p>
        <FormControl style={{ minWidth: '50%' }}>
          <InputLabel htmlFor="template-selected">Template</InputLabel>
          <Select
            value={this.state.selectedTemplateName}
            onChange={this.handleChange}
            inputProps={{
              name: 'template',
              id: 'template-selected'
            }}
          >
            {items}
          </Select>
        </FormControl>
        <br />
        <p>
          ... Or you can give us your own concept of a design and we'll
          implement it.
        </p>
        <TextField
          fullWidth
          multiline
          label="Link to a file or a webpage with wanted design: "
          placeholder="Link"
          value={this.state.linkUrl}
          onChange={eventData => {
            this.setState({
              linkUrl: eventData.target.url
            });
          }}
        />
        <Button
          fullWidth
          variant="raised"
          color="primary"
          onClick={this.handleAddService}
          style={{ marginBottom: '20px', marginTop: '20px' }}
        >
          {'Add Website development service'}
        </Button>
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

export default connect(
  () => {
    return {};
  },
  mapDispatchToProps
)(WebsiteDevelopmentService);
