import React from 'react';
import smData from '../data/social-media.json';

const SocialMedis = () => {
	const socialMediaLinks = smData.map(({ url, cssClass }) => (
		<li className="link" key={url}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<span className={cssClass} />
			</a>
		</li>
	));

	return (
		<ul className="SocialMedia" data-test="social-media-links">
			{socialMediaLinks}
		</ul>
	);
};

export default SocialMedis;
