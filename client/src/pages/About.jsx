import React from 'react';
import aboutImg from '../img/pages/about-mission.jpg';

import SocialMedia from '../components/SocialMedia';
import FooterContact from '../components/FooterContact';
import FooterBottom from '../components/FooterBottom';

const About = () => (
	<div>
		<main className="About">
			<h1 className="page-heading">About</h1>
			<section className="intro container">
				<h2 className="page-subheading">Proudly designed for everyday living</h2>
				<div className="row">
					<article className="col-lg-2">
						<h3 className="article-heading">01 — Our Mission</h3>
						<p>
							Swell was born from the desire to make contemporary and functional design attainable
							to everyone. We believe your home should make you proud whether enjoyed alone, or with
							company. Meaningful design is not only how something looks but how you connect with it
							in everyday living.
						</p>
					</article>
					<div className="col-lg-2">
						<img src={aboutImg} alt="swell home mission" className="about-image" />
						<div className="translation">
							<p className="name">
								Swell. <span>/swɛl/</span>
							</p>
							<p className="text">Be intensely affected or filled with a particular emotion.</p>
						</div>
					</div>
				</div>
			</section>
			{/* <div className="holder" /> */}
		</main>
		<footer className="Footer">
			<FooterContact />
			<SocialMedia />
			<FooterBottom />
		</footer>
	</div>
);

export default About;
