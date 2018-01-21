import React from 'react';
import { shallow, mount } from 'enzyme';
import { StaticRouter } from 'react-router-dom';

import { Navigation } from '../Navigation';
import navLinks from '../../data/navigation.json';
import smLinks from '../../data/social-media.json';
import { sel } from '../../../../tests/utils';

function mountComponent(props = {}, isShallow = true) {
	const propsToUse = {
		location: {
			pathname: '/'
		},
		...props
	};

	if (isShallow) {
		return shallow(<Navigation {...propsToUse} />);
	}

	return mount(
		<StaticRouter context={{}}>
			<Navigation {...propsToUse} />
		</StaticRouter>
	);
}

test('the component mounts with defaults', () => {
	const wrapper = mountComponent();

	expect(wrapper).toMatchSnapshot();
});

test('it renders correct number of navigation and social media links', () => {
	const wrapper = mountComponent();
	const elNavLinks = wrapper.find(sel('nav-links')).children();
	const elSocialMediaLinks = wrapper.find(sel('social-media-links')).children();

	expect(elNavLinks).toHaveLength(navLinks.length);
	expect(elSocialMediaLinks).toHaveLength(smLinks.length);
});

test('method "getDefaultOverlayColor()" returns correct color', () => {
	const pathname = '/contact';
	const wrapper = mountComponent({ location: { pathname } });
	const color = wrapper.instance().getDefaultOverlayColor();

	expect(color).toBe(navLinks.filter(item => item.path === pathname)[0].overlayColor);
});

test('it changes overlay color when user hover over a navigation link', () => {
	const index = 1;
	const wrapper = mountComponent({}, false);
	// const backgroundColor = wrapper.instance().getDefaultOverlayColor();
	const linkToHover = wrapper
		.find(sel('nav-link'))
		.children()
		.at(index);

	linkToHover.simulate('mouseenter');
	let overlayColor = wrapper.find(sel('overlay')).get(0).props.style.backgroundColor;
	expect(overlayColor).toBe(navLinks[index].overlayColor);

	linkToHover.simulate('mouseleave');
	overlayColor = wrapper.find(sel('overlay')).get(0).props.style.backgroundColor;
	expect(overlayColor).toBe(navLinks[0].overlayColor);
});

test('it adds "is-open" class when toggle clicked', () => {
	const wrapper = mountComponent({}, false);
	const toggle = wrapper.find(sel('nav-toggle'));

	toggle.simulate('click');
	expect(wrapper.find(sel('navigation')).hasClass('is-open')).toBe(true);

	toggle.simulate('click');
	expect(wrapper.find(sel('navigation')).hasClass('is-open')).toBe(false);
});
