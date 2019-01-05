import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import services from './website-development-services.js';
import './WebSiteDevelopmentServices.css';

const styles = {
  imageStyle: {
    height: '300px',
    width: '45%',
    backgroundSize: 'cover',
    marginRight: '25px',
    marginTop: '-300px'
  },
  buttonRaised: {
    marginBottom: '10px'
  }
};
export default class WebSiteDevelopmentTab extends Component {
  render() {
    return (
      <div id="website-development-tab">
        <h3>WEBSITE DEVELOPMENT</h3>
        <img
          src="/images/website-services.jpeg"
          alt=""
          width="100%"
          style={styles.imageStyle}
        />
        <div>
          <div>
            {services.map((service, index) => {
              return (
                <Button
                  fullWidth
                  variant="raised"
                  color="secondary"
                  onClick={this.props.handleOpen}
                  style={styles.buttonRaised}
                  key={index}
                >
                  {service.name}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
