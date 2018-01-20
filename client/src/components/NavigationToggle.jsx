import React, {Component} from 'react';
import classNames from 'classnames';

class NavigationToggle extends Component {
	state = {
			toggledOn: false
	};

	onClickHandler = () => {
		const toggledOn = !this.state.toggledOn;
		this.setState({toggledOn});
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

export default NavigationToggle;
