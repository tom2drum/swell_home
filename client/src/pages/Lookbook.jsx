/* eslint-disable consistent-return */
import React, { Component } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

class Lookbook extends Component {
	state = {
		categories: []
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
		arrows: false
	};

	fetchCategories = async () => {
		const response = await axios.get('/api/categories').catch(error => error);
		if (response.data) {
			const { categories } = response.data;
			this.setState({ categories });
		}
	};

	beforeSlideChange = (oldIndex, newIndex) => {
		console.log(oldIndex, newIndex);
	};

	renderSliders = () => {
		const { categories } = this.state;

		if (categories.length > 0) {
			return categories.map(({ image, _id }) => {
				// eslint-disable-next-line import/no-dynamic-require,global-require
				const src = require(`../img/categories/${image}`);
				return (
					<div key={_id}>
						<img src={src} alt="" />
					</div>
				);
			});
		}
	};

	render() {
		return (
			<div className="Lookbook">
				<Slider className="Slider" {...this.sliderSettings}>
					{this.renderSliders()}
				</Slider>
			</div>
		);
	}
}

export default Lookbook;
