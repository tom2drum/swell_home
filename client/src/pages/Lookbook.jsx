/* eslint-disable consistent-return */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';

class Lookbook extends Component {
	state = {
		categories: [],
		activeSlide: 0
	};

	componentDidMount() {
		this.fetchCategories();
		this.sliderSettings.beforeChange = this.beforeSlideChange;
	}

	sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true
	};

	fetchCategories = async () => {
		const response = await axios.get('/api/categories').catch(error => error);
		if (response.data) {
			const { categories } = response.data;
			this.setState({ categories });
		}
	};

	beforeSlideChange = (oldIndex, newIndex) => {
		this.setState({ activeSlide: newIndex });
		console.log(oldIndex, newIndex);
	};

	renderSlider = () => {
		const { categories, activeSlide } = this.state;

		if (categories.length > 0) {
			const images = categories.map(({ image, _id }) => {
				// eslint-disable-next-line import/no-dynamic-require,global-require
				const src = require(`../img/categories/${image}`);
				return (
					<div key={_id}>
						<img src={src} alt="" />
					</div>
				);
			});

			return (
				<div className="slider-wrapper">
					<Slider className="Slider" {...this.sliderSettings}>
						{images}
					</Slider>
					<Link className="slide-tag" to={`/catalog/${categories[activeSlide].slug}`}>{`View ${
						categories[activeSlide].name
					}`}</Link>
				</div>
			);
		}
	};

	render() {
		return <div className="Lookbook">{this.renderSlider()}</div>;
	}
}

export default Lookbook;
