import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationLink extends Component {
	state = {
		color: this.defaultColor
	};

	onMouseEnterHandler = () => {
		this.props.changeOverlayColor(this.props.overlayColor);
		this.setState({ color: this.props.overlayColor });
	};

	onMouseLeaveHandler = () => {
		this.props.changeOverlayColor();
		this.setState({ color: this.defaultColor });
	};

	onClickHandler = () => {
		this.props.onClickCallback();
	};

	defaultColor = '#101010';

	render() {
		const { color } = this.state;
		return (
			<li className="link">
				<NavLink
					exact
					to={this.props.path}
					activeStyle={{ color: this.props.overlayColor }}
					onMouseEnter={this.onMouseEnterHandler}
					onMouseLeave={this.onMouseLeaveHandler}
					onClick={this.onClickHandler}
					data-test="nav-link"
					style={{ color }}
				>
					{this.props.text}
				</NavLink>
			</li>
		);
	}
}

NavigationLink.propTypes = {
	path: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	overlayColor: PropTypes.string.isRequired,
	changeOverlayColor: PropTypes.func.isRequired,
	onClickCallback: PropTypes.func.isRequired
};

export default NavigationLink;
