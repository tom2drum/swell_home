/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class NavigationToggle extends Component {
	onClickHandler = () => {
		const toggledOn = !this.props.toggledOn;
		this.props.onClickCallback(toggledOn);
	};

	render() {
		const classes = classNames('NavigationToggle', { 'is-open': this.props.toggledOn });
		return (
			<div className={classes} data-test="nav-toggle" onClick={this.onClickHandler}>
				<span />
			</div>
		);
	}
}

NavigationToggle.propTypes = {
	onClickCallback: PropTypes.func.isRequired,
	toggledOn: PropTypes.bool.isRequired
};

export default NavigationToggle;
