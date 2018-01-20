import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationLink extends Component {
  onMouseEnterHandler = () => {
    this.props.changeOverlayColor(this.props.overlayColor);
  };

  onMouseLeaveHandler = () => {
    this.props.changeOverlayColor();
  };

  render() {
    return (
      <li className="link">
        <Link
          to={this.props.path}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
					data-test="nav-link"
        >
          {this.props.text}
        </Link>
      </li>
    );
  }
}

NavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  overlayColor: PropTypes.string.isRequired,
  changeOverlayColor: PropTypes.func.isRequired
};

export default NavigationLink;
