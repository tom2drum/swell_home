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

	renderSliders = () => {
		const { categories } = this.state;

		if (categories.length === 0) {
			return;
		}

		return categories.map(({ image, _id }) => {
			const src = require(`../img/categories/${image}`);
			return (
				<div key={_id}>
					<img src={src} alt="" />
				</div>
			);
		});
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
