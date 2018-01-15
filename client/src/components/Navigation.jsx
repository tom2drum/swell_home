import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
		<nav>
			<ul>
				<li><Link to="/">Lookbook</Link></li>
				<li><Link to="/shop">Shop</Link></li>
				<li><Link to="/contact">Contact</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</nav>
	);
