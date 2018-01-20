/* eslint-disable jsx-a11y/anchor-is-valid,import/no-extraneous-dependencies,react/forbid-prop-types */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavigationLink from './NavigationLink';
import navData from '../data/navigation.json';
import smData from '../data/social-media.json';

class Navigation extends Component {
	static renderSocialMediaLinks() {
  	return smData.map(({url, cssClass}) => (
			<li className="link" key={url}>
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className={cssClass} />
				</a>
			</li>
		))
	}

	state = {
		overlayColor: ''
	};

	componentDidMount() {
		this.setDefaultOverlayColor();
	}

	setDefaultOverlayColor() {
		const color = this.getDefaultOverlayColor();
		this.setState({overlayColor: color});
	};

	getDefaultOverlayColor = () => navData.filter(({ path }) => path === this.props.location.pathname)[0].overlayColor;

	changeOverlayColorHandler = (color = '') => {
		const overlayColor = (color === '') ? this.getDefaultOverlayColor() : color;
		this.setState({overlayColor});
	};

	renderNavLinks = () => navData.map(item =>
			<NavigationLink
				key={item.path}
				{...item}
				changeOverlayColor={this.changeOverlayColorHandler}
			/>);

	render() {
    const overlayStyle = {
      backgroundColor: this.state.overlayColor
    };

		return (
      <div className="Navigation">
        <nav className="navbar">
          <ul className="links">{this.renderNavLinks()}</ul>
          <ul className="social-media">{Navigation.renderSocialMediaLinks()}</ul>
        </nav>
        <div className="overlay" style={overlayStyle} />
      </div>
    );
  }
}

Navigation.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(Navigation);
