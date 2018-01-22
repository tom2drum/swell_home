import React from 'react';
import { Link } from 'react-router-dom';

const FooterContact = () => {
	return (
		<section className="FooterContact container">
			<p className="text">I want to know more</p>
			<div className="row buttons">
				<Link to="/" className="button">
					<span className="circle" />
					<span className="label">Retail Enquires</span>
				</Link>
				<Link to="/" className="button">
					<span className="circle" />
					<span className="label">Join Mail List</span>
				</Link>
			</div>
		</section>
	);
};

export default FooterContact;
