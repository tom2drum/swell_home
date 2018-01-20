/* eslint-disable import/no-extraneous-dependencies */
import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class NavigationToggle extends Component {
	state = {
			toggledOn: false
	};

	onClickHandler = () => {
		const toggledOn = !this.state.toggledOn;
		this.setState({toggledOn});
		this.props.onClickCallback(toggledOn);
	};

	render() {
		const classes = classNames('NavigationToggle', {'is-open': this.state.toggledOn});
		return (
			<div className={classes} data-test="nav-toggle" onClick={this.onClickHandler}>
				<span />
			</div>
		)
	}
}

NavigationToggle.propTypes = {
	onClickCallback: PropTypes.func.isRequired
};

export default NavigationToggle;
