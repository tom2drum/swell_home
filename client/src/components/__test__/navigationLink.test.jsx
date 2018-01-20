/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import NavigationLink from '../NavigationLink';

function mountComponent(props = {}) {
	const propsToUse = {
		changeOverlayColor() {},
		path: '',
		text: '',
		overlayColor: '',
		to: '',
		...props,
	};

	return shallow(<NavigationLink {...propsToUse} />)
}

function sel(id) {
	return `[data-test="${id}"]`
}

test('the component mounts with defaults', () => {
	const wrapper = mountComponent();
	expect(wrapper).toMatchSnapshot();
});

test('it renders the given text', () => {
	const text = 'foo';
	const wrapper = mountComponent({text});
	const innerText = wrapper.find(sel('nav-link')).children().text();
	expect(innerText).toBe(text);
});

test('it call parent handler when user hovers over', () => {
	const changeOverlayColor = jest.fn();
	const overlayColor = 'white';
	const wrapper = mountComponent({changeOverlayColor, overlayColor});
	const el = wrapper.find(sel('nav-link'));

	el.simulate('mouseenter');
	expect(changeOverlayColor).toHaveBeenLastCalledWith(overlayColor);

	el.simulate('mouseleave');
	expect(changeOverlayColor).toHaveBeenLastCalledWith();

	expect(changeOverlayColor).toHaveBeenCalledTimes(2);
});
