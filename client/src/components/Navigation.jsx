import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const overlayColors = {
	"/": '#cdcdcd',
	"/shop": '#e5554f',
	"/contact": '#bfced6',
	"/about": '#e8e0d3',
};

class Navigation extends Component {
	render() {
		return (
			<div className="Navigation">
				<nav className="navbar">
					<ul className="links">
						<li className="link"><Link to="/">Lookbook</Link></li>
						<li className="link"><Link to="/shop">Shop</Link></li>
						<li className="link"><Link to="/contact">Contact</Link></li>
						<li className="link"><Link to="/about">About</Link></li>
					</ul>
					<ul className="social-media">
						<li className="link"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span className="fa fa-facebook" /></a></li>
						<li className="link"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><span className="fa fa-twitter" /></a></li>
						<li className="link"><a href="https://pintereest.com" target="_blank" rel="noopener noreferrer"><span className="fa fa-pinterest" /></a></li>
						<li className="link"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><span className="fa fa-instagram" /></a></li>
					</ul>
				</nav>
				<div className="overlay" />
			</div>
		)
	}
}

export default Navigation;
