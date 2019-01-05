import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { addBlogAndBlogManagmentService } from '../../../../../../../../actions/servicesActions';
import './Blog.css';

class BlogAndBlogManagmentService extends React.Component {
  handleChange = (event, index, value) => this.setState({ value });

  handleAddService = () => {
    this.props.addBlogAndBlogManagmentService(true);
    this.props.handleModalClose();
  };

  render() {
    return (
      <div id="blog-blogMan">
        <h2> Blog and blog managment</h2>
        <p>
          The Blog managment will help you to write your own article as easy as
          ABC through admin pannel.
        </p>
        <img
          src="/images/email-subscription.jpeg"
          alt=""
          width="100%"
          height="500px"
          style={{ marginBottom: '10px' }}
        />
        <p>
          Please choose on of the following options for the integration of
          google analytics:{' '}
        </p>
        <Button
          fullWidth
          variant="raised"
          color="primary"
          style={{ marginBottom: '20px', marginTop: '20px' }}
          onClick={this.handleAddService}
        >
          {'Add Website development service'}
        </Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addBlogAndBlogManagmentService: requestInfoObj => {
      dispatch(addBlogAndBlogManagmentService(requestInfoObj));
    }
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(BlogAndBlogManagmentService);
