import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem value={1} primaryText={`Beginner integration`} />,
  <MenuItem value={2} primaryText={`Most common events integration`} />,
  <MenuItem value={3} primaryText={`Advanced integration`} />
];

export default class FacebookPixelIntegrationModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <h2> Facebook pixel</h2>
        <p>
          Google analytics is a useful tool for monitoring and measuring the
          performance of your web presence. That is why we can help you with its
          integration with your web platform. You can choose from the most
          general to a more detailed implementation of the Google analytics and
          its events.
        </p>
        <img
          src="/images/facebook-pixel.jpg"
          alt=""
          width="100%"
          height="500px"
          style={{ marginBottom: '10px' }}
        />
        <p>
          Please choose on of the following options for the integration of
          google analytics:{' '}
        </p>
        <DropDownMenu
          autoWidth={false}
          style={{ width: '100%' }}
          maxHeight={300}
          value={this.state.value}
          onChange={this.handleChange}
        >
          {items}
        </DropDownMenu>
      </div>
    );
  }
}
