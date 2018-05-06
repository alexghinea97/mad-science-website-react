import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import Templates from '../Templates.jsx';

const items = [];
for (let i = 0; i < 100; i++) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class WebsiteDevelopmentModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 10 };
  }

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
        <h2>Let's get started</h2>
        <p>
          You can choose from one of the templates below which can later be
          customized for your own style and needs.
        </p>
        <Templates />
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
          ... Or you can give us your own concept of a desing an we'll implement
          it.
        </p>
      </div>
    );
  }
}
